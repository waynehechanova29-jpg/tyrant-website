# TYRANT Discord member API

This service keeps a Discord bot connected and exposes the configured server's member count at:

```text
GET /api/discord-members
```

## Local setup

1. Install Node.js 18 or newer.
2. Open a terminal in this folder and run `npm install`.
3. Copy `.env.example` to `.env`.
4. Fill in `DISCORD_BOT_TOKEN` and `DISCORD_GUILD_ID`.
5. Run `npm start`.

The API will be available at `http://localhost:3000`.

The bot needs the `Guilds` and `Guild Members` intents. Enable **Server Members Intent** under the bot's Privileged Gateway Intents in the Discord Developer Portal.

- View Channels

The bot must be invited to the server identified by `DISCORD_GUILD_ID`.
