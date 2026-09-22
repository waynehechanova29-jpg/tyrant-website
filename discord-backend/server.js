require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { Client, Events, GatewayIntentBits } = require("discord.js");

const requiredEnvironment = ["DISCORD_BOT_TOKEN", "DISCORD_GUILD_ID"];
const missingEnvironment = requiredEnvironment.filter(name => !process.env[name]);

if (missingEnvironment.length) {
  throw new Error(`Missing environment variables: ${missingEnvironment.join(", ")}`);
}

const app = express();
const port = Number(process.env.PORT) || 3000;
const allowedOrigin = process.env.ALLOWED_ORIGIN || "*";
let memberCount = null;
let lastUpdated = null;
let members = [];

app.use(cors({ origin: allowedOrigin }));

async function updateMemberCount(guild) {
  const fetchedGuild = await guild.fetch();
  if (!Number.isInteger(fetchedGuild.memberCount)) {
    throw new Error("Discord did not return a valid member count");
  }

  memberCount = fetchedGuild.memberCount;
  const fetchedMembers = await fetchedGuild.members.fetch();
  members = [...fetchedMembers.values()].map(member => ({
    id: member.id,
    username: member.user.username,
    displayName: member.displayName,
    country: "Other",
    role: member.roles.highest?.name && member.roles.highest.name !== "@everyone"
      ? member.roles.highest.name
      : "Member",
    avatarUrl: member.user.displayAvatarURL({ extension: "png", size: 256 }),
    robloxId: ""
  }));
  lastUpdated = new Date().toISOString();
  console.log(`Discord member count updated: ${memberCount}; profiles loaded: ${members.length}`);
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers]
});

client.once(Events.ClientReady, async readyClient => {
  try {
    const guild = await readyClient.guilds.fetch(process.env.DISCORD_GUILD_ID);
    await updateMemberCount(guild);
    console.log(`Bot logged in as ${readyClient.user.tag}`);
  } catch (error) {
    console.error("Unable to load the configured Discord server:", error);
  }
});

client.on(Events.GuildMemberAdd, member => {
  if (member.guild.id === process.env.DISCORD_GUILD_ID && Number.isInteger(member.guild.memberCount)) {
    memberCount = member.guild.memberCount;
    updateMemberCount(member.guild).catch(error => console.error("Unable to refresh members after join:", error));
    lastUpdated = new Date().toISOString();
    console.log(`Member joined. Discord member count: ${memberCount}`);
  }
});

client.on(Events.GuildMemberRemove, member => {
  if (member.guild.id === process.env.DISCORD_GUILD_ID && Number.isInteger(member.guild.memberCount)) {
    memberCount = member.guild.memberCount;
    updateMemberCount(member.guild).catch(error => console.error("Unable to refresh members after leave:", error));
    lastUpdated = new Date().toISOString();
    console.log(`Member left. Discord member count: ${memberCount}`);
  }
});

app.get("/api/discord-members", (req, res) => {
  if (memberCount === null) {
    return res.status(503).json({ error: "Discord member count is not ready" });
  }

  return res.json({ memberCount, updatedAt: lastUpdated, members });
});

app.get("/health", (req, res) => {
  res.json({ ok: true, discordReady: client.isReady(), memberCount });
});

app.listen(port, () => {
  console.log(`TYRANT Discord API listening on port ${port}`);
});

client.login(process.env.DISCORD_BOT_TOKEN).catch(error => {
  console.error("Discord bot login failed:", error);
  process.exitCode = 1;
});
