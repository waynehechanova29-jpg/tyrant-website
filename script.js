/* TYRANT — ENHANCED script.js v2 */

/* ================================================================
   1. EDITABLE DATA
================================================================= */
const clanData = { memberCount: 61, staffCount: 3, gamesCount: 6, eventsCount: 0 };
const DISCORD_MEMBER_API_URL = "http://localhost:3000/api/discord-members";

let members = [
  { username: "Liviathan", displayName: "itsmenuggets_", country: "Philippines", role: "Member", robloxId: "1", avatarUrl: "https://i.imgur.com/bn4tXt1.png" },
  { username: "ZERO", displayName: "izer00678", country: "Philippines", role: "Member", robloxId: "2", avatarUrl: "https://i.imgur.com/vVDVt7C.png" },
  { username: "ms.moonlight 🌙", displayName: "yoursleeepyluna", country: "Philippines", role: "Veteran", robloxId: "3", avatarUrl: "https://i.imgur.com/fNB0X8t.png" },
  { username: "babyje03", displayName: "babyje03", country: "Philippines", role: "Member", robloxId: "4", avatarUrl: "https://i.imgur.com/sFU9Feh.png" },
  { username: "XZSAYVIONNE", displayName: "nathalie03857", country: "Philippines", role: "Member", robloxId: "5", avatarUrl: "https://i.imgur.com/P3VVd8x.png" },
  { username: "SORA", displayName: "mejiexe_t", country: "Thailand", role: "Member", robloxId: "6", avatarUrl: "https://i.imgur.com/PDnzJDR.png" },
  { username: "Hanslea", displayName: "hanslea.", country: "Other", role: "Member", robloxId: "7", avatarUrl: "https://i.imgur.com/AqrRce0.png" },
  { username: "Brey.", displayName: "aubreykyle1212_91123", country: "Philippines", role: "Member", robloxId: "8", avatarUrl: "https://i.imgur.com/qKmUabH.png" },
  { username: "Mikshiegirl💋", displayName: "mikshiegirl", country: "Philippines", role: "Member", robloxId: "9", avatarUrl: "https://i.imgur.com/J6mzMpV.png" },
  { username: "MUSIKA", displayName: "nyakkku", country: "Philippines", role: "Member", robloxId: "10", avatarUrl: "https://i.imgur.com/aAh4f9o.png" },
  { username: "ki", displayName: "ki03083", country: "Indonesia", role: "Member", robloxId: "11", avatarUrl: "https://i.imgur.com/2HfQzVD.png" },
  { username: "cyu", displayName: "cy5577", country: "Philippines", role: "Member", robloxId: "12", avatarUrl: "https://i.imgur.com/JaPJe04.png" },
  { username: "𝓒𝓮𝓪༊*·˚", displayName: "lushxy_", country: "Philippines", role: "Member", robloxId: "13", avatarUrl: "https://i.imgur.com/A6fq23U.png" },
  { username: "TYRANDxsalman", displayName: "tyrandxsalman", country: "Other", role: "Member", robloxId: "14", avatarUrl: "https://i.imgur.com/vbIf5QL.png" },
  { username: "Ryu", displayName: "jos.xhua", country: "Philippines", role: "Member", robloxId: "15", avatarUrl: "https://i.imgur.com/zmbwNCG.png" },
  { username: "chen xie", displayName: "jackie_112.", country: "China", role: "Member", robloxId: "16", avatarUrl: "https://i.imgur.com/8N27v8U.png" },
  { username: "Mori", displayName: "bolt1804", country: "Philippines", role: "Member", robloxId: "17", avatarUrl: "https://i.imgur.com/UIE8f0F.png" },
  { username: "aeroxyin", displayName: "aeroxyin", country: "Philippines", role: "Member", robloxId: "18", avatarUrl: "https://i.imgur.com/jz7qTFg.png" },
  { username: "RynnXnazz", displayName: "rynnxnazz", country: "Philippines", role: "Member", robloxId: "19", avatarUrl: "https://i.imgur.com/6T8iZ5v.png" },
  { username: "[TMOD] Matthew.", displayName: "m0tt2y.", country: "Philippines", role: "Trial Moderator", robloxId: "20", avatarUrl: "https://i.imgur.com/wamTkno.png" },
  { username: "NV", displayName: "herfavoriteband", country: "Philippines", role: "Member", robloxId: "21", avatarUrl: "https://i.imgur.com/kqjSVdx.png" },
  { username: "Tyron", displayName: "tyron2497", country: "Philippines", role: "Member", robloxId: "22", avatarUrl: "https://i.imgur.com/LzAuhf8.png" },
  { username: "Luwy", displayName: "luizitooo", country: "Philippines", role: "Member", robloxId: "23", avatarUrl: "https://i.imgur.com/HQPHYzm.png" },
  { username: "Zyyiiee", displayName: "_zyzyzyrynne", country: "Philippines", role: "Member", robloxId: "24", avatarUrl: "https://i.imgur.com/qkPK9eF.png" },
  { username: "xeno_phoenix18", displayName: "xeno_phoenix18", country: "Philippines", role: "Member", robloxId: "25", avatarUrl: "https://i.imgur.com/A6fq23U.png" },
  { username: "Sora", displayName: "fern010223", country: "Philippines", role: "Member", robloxId: "26", avatarUrl: "https://i.imgur.com/eLUdEnN.png" },
  { username: "Erin", displayName: "_erin10", country: "Philippines", role: "Member", robloxId: "27", avatarUrl: "https://i.imgur.com/ccTzAsV.png" },
  { username: "Fero", displayName: "ryeoun0317_24641", country: "Philippines", role: "Member", robloxId: "28", avatarUrl: "https://i.imgur.com/nCwnGUr.png" },
  { username: "Latinah", displayName: "latinahsofine", country: "Philippines", role: "Member", robloxId: "29", avatarUrl: "https://i.imgur.com/jEhqGm1.png" },
  { username: "Ris", displayName: "ris69", country: "Philippines", role: "Member", robloxId: "30", avatarUrl: "https://i.imgur.com/SyEv8dc.png" },
  { username: "Elpis✓", displayName: "elpis0871", country: "Philippines", role: "Member", robloxId: "31", avatarUrl: "https://i.imgur.com/RrUTZF4.png" },
  { username: "Kingkong", displayName: "kingkong036365", country: "Philippines", role: "Member", robloxId: "32", avatarUrl: "https://i.imgur.com/RrUTZF4.png" },
  { username: "Reen", displayName: "mau077792", country: "Philippines", role: "Member", robloxId: "33", avatarUrl: "https://i.imgur.com/yNdlHyH.png" },
  { username: "Dwight", displayName: "rldnjxde", country: "Philippines", role: "Member", robloxId: "34", avatarUrl: "https://i.imgur.com/zom9L7B.png" },
  { username: "xyzdef", displayName: "xyz_.33", country: "Philippines", role: "Member", robloxId: "35", avatarUrl: "https://i.imgur.com/SoTQbjs.png" },
  { username: "NIKE_7", displayName: "nike_70920", country: "Philippines", role: "Member", robloxId: "36", avatarUrl: "https://i.imgur.com/NwMMKZg.png" },
  { username: "dee_vyne", displayName: "dee_vyne.", country: "Philippines", role: "Member", robloxId: "37", avatarUrl: "https://i.imgur.com/2IIRX9z.png" },
  { username: "xena", displayName: "eliz_flowrpuff", country: "Philippines", role: "Member", robloxId: "38", avatarUrl: "https://i.imgur.com/PPnsGTM.png" },
  { username: "Schewzan", displayName: "schewzan255", country: "Philippines", role: "Member", robloxId: "39", avatarUrl: "https://i.imgur.com/9TaCGxG.png" },
  { username: "NIKE_7", displayName: "nike_70920", country: "Philippines", role: "Member", robloxId: "40", avatarUrl: "https://i.imgur.com/NwMMKZg.png" }
];

const staff = [
  { username: "Daddy Wayne", role: "Founder", description: "Founded TYRANT to build a clan people would actually be proud to represent.", robloxId: "101", avatarUrl: "https://imgur.com/2Ghq36d.png" },
  { username: "Cin", role: "Co-Owner", description: "Runs day-to-day operations and oversees the staff team.", robloxId: "102", avatarUrl: "https://imgur.com/sqFP0PJ.png" },
  { username: "Emberlynx", role: "Administrator", description: "Manages events and the Mount Lonely leaderboard.", robloxId: "103", avatarUrl: "https://imgur.com/2Ghq36d.png" },
  { username: "[TMOD] Matthew.", role: "Trial Moderator", description: "New to the team, helping run smaller events.", robloxId: "104", avatarUrl: "https://i.imgur.com/wamTkno.png" }
];

const games = [
  { name: "Mount Lonely", description: "TYRANT's primary game. We focus on repeated summit pushes and competitive climbing.", robloxLink: "https://www.roblox.com/games/76427490154192", robloxGameId: "76427490154192", imageUrl: "https://imgur.com/PCWbDZd.png", status: "Very Active", featured: true },
  { name: "Steal An Egg", description: "A hybrid Roblox tycoon simulation and pet collection game where players sneak into dangerous biomes, steal eggs from guardian beasts, and hatch them to build a passive income base.", robloxLink: "https://www.roblox.com/games/107778070777162", robloxGameId: "107778070777162", imageUrl: "https://imgur.com/n98WHcz.png", status: "Active", featured: false },
  { name: "Salon de Fiestas 2", description: " Spanish term that translates to a party room, banquet hall, or reception room used for hosting social events like weddings, birthdays, and celebrations", robloxLink: "https://www.roblox.com/games/11694307960", robloxGameId: "11694307960", imageUrl: "https://imgur.com/XVoF2gE.png", status: "Active", featured: false },
  { name: "[Club 🎶] Young Stunna District", description: "A social Dancing with friends, meeting new players, showing off custom styles and outfits, and hanging out in a party atmosphere.", robloxLink: "https://www.roblox.com/games/81419750922892", robloxGameId: "81419750922892", imageUrl: "https://imgur.com/yuWe8qm.png", status: "Active", featured: false }
];

const leaderboard = [
  { rank: 1, player: "TYRANTxMUSIKA", summits: "10m", status: "Active" },
  { rank: 2, player: "TYRANTxGlenn", summits: "8.7m", status: "Active" },
  { rank: 3, player: "TYRANTxBABYje", summits: "8.3m", status: "Active" },
  { rank: 4, player: "TYRANTxMira", summits: "7.3m", status: "Active" },
  { rank: 5, player: "TYRANTxWayne", summits: "4.7m", status: "Active" },
  { rank: 6, player: "TYRANTxZyro", summits: "4.3m", status: "Active" },
  { rank: 7, player: "TYRANTxReigh", summits: "3.4m", status: "Active" },
  { rank: 8, player: "TYRANTxRyu", summits: "1.9m", status: "Active" },
  { rank: 9, player: "TYRANTxHATAKE", summits: "1.7m", status: "Active" },
  { rank: 10, player: "TYRANTxLMATTHEW", summits: "1.0m", status: "Active" },
  { rank: 11, player: "TYRANTxCii", summits: "520375k", status: "Active" }
];

const events = [
  { name: "Summit Rush", date: "2026-10-04", game: "Mount Lonely", description: "Competitive summit push — most summits in 2 hours wins.", status: "Upcoming" },
  { name: "New Recruit Meetup", date: "2026-09-27", game: "Frontier Outpost", description: "Casual hangout for new members to meet the clan.", status: "Upcoming" },
  { name: "Skyline Grand Prix", date: "2026-10-18", game: "Skyline Racers", description: "Clan-wide racing tournament with bracket eliminations.", status: "Upcoming" },
  { name: "Founding Anniversary", date: "2026-06-01", game: "Mount Lonely", description: "Celebrated TYRANT's founding with a clan-wide summit relay.", status: "Completed" },
  { name: "Tower Speedrun Night", date: "2026-05-14", game: "Tower of Misery", description: "Timed speed-clear event across the whole obby.", status: "Completed" },
  { name: "Deepwater Expedition", date: "2026-04-02", game: "Deepwater Salvage", description: "Cooperative salvage run for clan resources.", status: "Completed" }
];

const announcements = [
  { title: "📢 TYRANT — OFFICIAL ANNOUNCEMENT", date: "2026-09-15", author: "Daddy Wayne", content: "Signups for Summit Rush are live now in Discord. This is our biggest Mount Lonely event of the season, so get your name down early — spots for the leaderboard bonus round are limited. Full rules will be posted in the events channel closer to the date." },
  { title: "📢 NEW TRIAL MODERATORS ANNOUNCED", date: "2026-09-16", author: "Daddy Wayne", content: "Welcome Matthew to the Tyrant staff team as a Trial Moderator! Although he has only been a Trial Moderator for 2 days, we appreciate his presence and contributions to the clan. Please give him a warm welcome and treat him with the same respect and accountability as any other member of the staff team. If you have any concerns or reports, feel free to bring them to his attention accordingly." }
];

const discordData = { tag: "TYRN", inviteUrl: "https://discord.gg/nd2spXNDZ" };
const robloxGroupUrl = "https://www.roblox.com/groups/REPLACE_THIS";

const rules = [
  { title: "Respect all members", detail: "Every member deserves basic respect regardless of rank, skill level, or how long they've been in the clan." },
  { title: "No harassment or bullying", detail: "Harassment of any kind, in or out of TYRANT spaces, is grounds for immediate removal." },
  { title: "No unnecessary drama", detail: "Take conflicts to staff privately instead of airing them publicly in chat or events." },
  { title: "No cheating or exploiting", detail: "Using exploits, cheats, or unfair advantages in any TYRANT-affiliated game is not tolerated." },
  { title: "Follow staff instructions", detail: "Staff are here to keep things running smoothly — follow their guidance during events and disputes." },
  { title: "Respect everyone's boundaries", detail: "Ask before adding people to DMs or group chats, and respect it when someone says no." },
  { title: "Dual-clanning is not allowed", detail: "If you join another clan, you must leave TYRANT first. We ask for full commitment, not a backup option." }
];

const recruitmentData = {
  requirements: ["Active Roblox account", "Willingness to participate in clan events", "Respectful attitude toward all members", "Join the official TYRANT Discord server"],
  expectations: ["Represent TYRANT with professionalism", "Participate in community events when possible", "Follow all clan rules at all times", "Support and encourage fellow members"]
};

/* ================================================================
   2. HELPERS
================================================================= */
const countryFlags = {
  "Afghanistan":"🇦🇫","Albania":"🇦🇱","Algeria":"🇩🇿","Andorra":"🇦🇩","Angola":"🇦🇴",
  "Antigua and Barbuda":"🇦🇬","Argentina":"🇦🇷","Armenia":"🇦🇲","Australia":"🇦🇺","Austria":"🇦🇹",
  "Azerbaijan":"🇦🇿","Bahamas":"🇧🇸","Bahrain":"🇧🇭","Bangladesh":"🇧🇩","Barbados":"🇧🇧",
  "Belarus":"🇧🇾","Belgium":"🇧🇪","Belize":"🇧🇿","Benin":"🇧🇯","Bhutan":"🇧🇹",
  "Bolivia":"🇧🇴","Bosnia and Herzegovina":"🇧🇦","Botswana":"🇧🇼","Brazil":"🇧🇷","Brunei":"🇧🇳",
  "Bulgaria":"🇧🇬","Burkina Faso":"🇧🇫","Burundi":"🇧🇮","Cabo Verde":"🇨🇻","Cambodia":"🇰🇭",
  "Cameroon":"🇨🇲","Canada":"🇨🇦","Central African Republic":"🇨🇫","Chad":"🇹🇩","Chile":"🇨🇱",
  "China":"🇨🇳","Colombia":"🇨🇴","Comoros":"🇰🇲","Congo":"🇨🇬","Costa Rica":"🇨🇷",
  "Croatia":"🇭🇷","Cuba":"🇨🇺","Cyprus":"🇨🇾","Czech Republic":"🇨🇿","Czechia":"🇨🇿",
  "Democratic Republic of the Congo":"🇨🇩","Denmark":"🇩🇰","Djibouti":"🇩🇯","Dominica":"🇩🇲",
  "Dominican Republic":"🇩🇴","Ecuador":"🇪🇨","Egypt":"🇪🇬","El Salvador":"🇸🇻","Equatorial Guinea":"🇬🇶",
  "Eritrea":"🇪🇷","Estonia":"🇪🇪","Eswatini":"🇸🇿","Ethiopia":"🇪🇹","Fiji":"🇫🇯",
  "Finland":"🇫🇮","France":"🇫🇷","Gabon":"🇬🇦","Gambia":"🇬🇲","Georgia":"🇬🇪",
  "Germany":"🇩🇪","Ghana":"🇬🇭","Greece":"🇬🇷","Grenada":"🇬🇩","Guatemala":"🇬🇹",
  "Guinea":"🇬🇳","Guinea-Bissau":"🇬🇼","Guyana":"🇬🇾","Haiti":"🇭🇹","Honduras":"🇭🇳",
  "Hungary":"🇭🇺","Iceland":"🇮🇸","India":"🇮🇳","Indonesia":"🇮🇩","Iran":"🇮🇷",
  "Iraq":"🇮🇶","Ireland":"🇮🇪","Israel":"🇮🇱","Italy":"🇮🇹","Jamaica":"🇯🇲",
  "Japan":"🇯🇵","Jordan":"🇯🇴","Kazakhstan":"🇰🇿","Kenya":"🇰🇪","Kiribati":"🇰🇮",
  "Kuwait":"🇰🇼","Kyrgyzstan":"🇰🇬","Laos":"🇱🇦","Latvia":"🇱🇻","Lebanon":"🇱🇧",
  "Lesotho":"🇱🇸","Liberia":"🇱🇷","Libya":"🇱🇾","Liechtenstein":"🇱🇮","Lithuania":"🇱🇹",
  "Luxembourg":"🇱🇺","Madagascar":"🇲🇬","Malawi":"🇲🇼","Malaysia":"🇲🇾","Maldives":"🇲🇻",
  "Mali":"🇲🇱","Malta":"🇲🇹","Marshall Islands":"🇲🇭","Mauritania":"🇲🇷","Mauritius":"🇲🇺",
  "Mexico":"🇲🇽","Micronesia":"🇫🇲","Moldova":"🇲🇩","Monaco":"🇲🇨","Mongolia":"🇲🇳",
  "Montenegro":"🇲🇪","Morocco":"🇲🇦","Mozambique":"🇲🇿","Myanmar":"🇲🇲","Namibia":"🇳🇦",
  "Nauru":"🇳🇷","Nepal":"🇳🇵","Netherlands":"🇳🇱","New Zealand":"🇳🇿","Nicaragua":"🇳🇮",
  "Niger":"🇳🇪","Nigeria":"🇳🇬","North Korea":"🇰🇵","North Macedonia":"🇲🇰","Norway":"🇳🇴",
  "Oman":"🇴🇲","Pakistan":"🇵🇰","Palau":"🇵🇼","Palestine":"🇵🇸","Panama":"🇵🇦",
  "Papua New Guinea":"🇵🇬","Paraguay":"🇵🇾","Peru":"🇵🇪","Philippines":"🇵🇭","Poland":"🇵🇱",
  "Portugal":"🇵🇹","Qatar":"🇶🇦","Romania":"🇷🇴","Russia":"🇷🇺","Rwanda":"🇷🇼",
  "Saint Kitts and Nevis":"🇰🇳","Saint Lucia":"🇱🇨","Saint Vincent and the Grenadines":"🇻🇨",
  "Samoa":"🇼🇸","San Marino":"🇸🇲","Sao Tome and Principe":"🇸🇹","Saudi Arabia":"🇸🇦",
  "Senegal":"🇸🇳","Serbia":"🇷🇸","Seychelles":"🇸🇨","Sierra Leone":"🇸🇱","Singapore":"🇸🇬",
  "Slovakia":"🇸🇰","Slovenia":"🇸🇮","Solomon Islands":"🇸🇧","Somalia":"🇸🇴","South Africa":"🇿🇦",
  "South Korea":"🇰🇷","South Sudan":"🇸🇸","Spain":"🇪🇸","Sri Lanka":"🇱🇰","Sudan":"🇸🇩",
  "Suriname":"🇸🇷","Sweden":"🇸🇪","Switzerland":"🇨🇭","Syria":"🇸🇾","Taiwan":"🇹🇼",
  "Tajikistan":"🇹🇯","Tanzania":"🇹🇿","Thailand":"🇹🇭","Timor-Leste":"🇹🇱","Togo":"🇹🇬",
  "Tonga":"🇹🇴","Trinidad and Tobago":"🇹🇹","Tunisia":"🇹🇳","Turkey":"🇹🇷","Turkmenistan":"🇹🇲",
  "Tuvalu":"🇹🇻","Uganda":"🇺🇬","Ukraine":"🇺🇦","United Arab Emirates":"🇦🇪","United Kingdom":"🇬🇧",
  "United States":"🇺🇸","Uruguay":"🇺🇾","Uzbekistan":"🇺🇿","Vanuatu":"🇻🇺","Vatican City":"🇻🇦",
  "Venezuela":"🇻🇪","Vietnam":"🇻🇳","Yemen":"🇾🇪","Zambia":"🇿🇲","Zimbabwe":"🇿🇼"
};
function flagFor(country) { return countryFlags[country] || "🌐"; }
function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  if (isNaN(d)) return isoDate;
  return d.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}
function esc(str) { const div = document.createElement("div"); div.textContent = String(str ?? ""); return div.innerHTML; }

const FALLBACK_AVATAR = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a1a30"/><circle cx="50" cy="38" r="18" fill="#5a5a8a"/><path d="M20 90 Q50 60 80 90 Z" fill="#5a5a8a"/></svg>`);
const FALLBACK_GAME_THUMB = "data:image/svg+xml;utf8," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#10102a"/><path d="M10 80 L35 40 L50 60 L65 30 L92 80 Z" fill="#2a2a50"/></svg>`);
const RANK_ORDER = ["Founder", "Co-Owner", "Administrator", "Moderator", "Trial Moderator"];

/* ================================================================
   3. RENDER FUNCTIONS
================================================================= */
function setStatTargets() {
  document.getElementById("stat-members").dataset.target = clanData.memberCount;
  document.getElementById("stat-staff").dataset.target = clanData.staffCount;
  document.getElementById("stat-games").dataset.target = clanData.gamesCount;
  document.getElementById("stat-events").dataset.target = clanData.eventsCount;
}

async function loadDiscordMemberCount() {
  if (DISCORD_MEMBER_API_URL.includes("YOUR-BACKEND-URL")) return;

  try {
    const separator = DISCORD_MEMBER_API_URL.includes("?") ? "&" : "?";
    const response = await fetch(`${DISCORD_MEMBER_API_URL}${separator}_=${Date.now()}`, {
      cache: "no-store"
    });
    if (!response.ok) throw new Error(`Member API returned ${response.status}`);

    const data = await response.json();
    if (!Number.isInteger(data.memberCount) || data.memberCount < 0) {
      throw new Error("Member API returned an invalid count");
    }

    clanData.memberCount = data.memberCount;
    if (Array.isArray(data.members) && data.members.length) {
      members = data.members;
      populateMemberFilterOptions();
      renderMembers();
      observeNewReveals(document.getElementById("member-grid"));
    }
    setStatTargets();
    document.getElementById("stat-members").textContent = String(clanData.memberCount);
    document.getElementById("member-count-badge").textContent = `${clanData.memberCount} Members`;
  } catch (error) {
    console.error("Unable to load Discord member count:", error);
  }
}

function renderAnnouncements() {
  const list = document.getElementById("announcement-list");
  if (!announcements.length) { list.innerHTML = `<p class="empty-state">No announcements yet.</p>`; return; }
  const sorted = [...announcements].sort((a, b) => new Date(b.date) - new Date(a.date));
  list.innerHTML = sorted.map((a, i) => `
    <article class="announcement-card reveal">
      <div class="announcement-head">
        <h3 class="announcement-title">${esc(a.title)}</h3>
        <span class="announcement-date">${formatDate(a.date)}</span>
      </div>
      <span class="author-badge">${esc(a.author)}</span>
      <p class="announcement-content" id="announcement-content-${i}">${esc(a.content)}</p>
      <button class="announcement-toggle" data-target="announcement-content-${i}">Read more</button>
    </article>
  `).join("");
  list.querySelectorAll(".announcement-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      const content = document.getElementById(btn.dataset.target);
      const expanded = content.classList.toggle("is-expanded");
      btn.textContent = expanded ? "Read less" : "Read more";
    });
  });
}

function populateMemberFilterOptions() {
  const roleSelect = document.getElementById("member-role-filter");
  const countrySelect = document.getElementById("member-country-filter");
  roleSelect.querySelectorAll("option:not(:first-child)").forEach(option => option.remove());
  countrySelect.querySelectorAll("option:not(:first-child)").forEach(option => option.remove());
  [...new Set(members.map(m => m.role))].sort().forEach(r => {
    const opt = document.createElement("option"); opt.value = r; opt.textContent = r; roleSelect.appendChild(opt);
  });
  [...new Set(members.map(m => m.country))].sort().forEach(c => {
    const opt = document.createElement("option"); opt.value = c; opt.textContent = c; countrySelect.appendChild(opt);
  });
}

function getFilteredMembers() {
  const search = document.getElementById("member-search").value.trim().toLowerCase();
  const role = document.getElementById("member-role-filter").value;
  const country = document.getElementById("member-country-filter").value;
  const sort = document.getElementById("member-sort").value;
  let list = members.filter(m => {
    const matchesSearch = !search || m.username.toLowerCase().includes(search) || m.displayName.toLowerCase().includes(search);
    return matchesSearch && (!role || m.role === role) && (!country || m.country === country);
  });
  if (sort === "az") list.sort((a, b) => a.username.localeCompare(b.username));
  else if (sort === "za") list.sort((a, b) => b.username.localeCompare(a.username));
  else if (sort === "role") list.sort((a, b) => a.role.localeCompare(b.role));
  return list;
}

function renderMembers() {
  document.getElementById("member-count-badge").textContent = `${clanData.memberCount} Members`;
  const grid = document.getElementById("member-grid");
  const emptyState = document.getElementById("member-empty");
  const filtered = getFilteredMembers();
  if (!filtered.length) { grid.innerHTML = ""; emptyState.hidden = false; return; }
  emptyState.hidden = true;
  grid.innerHTML = filtered.map(m => `
    <article class="person-card">
      <div class="avatar-wrap" data-roblox-id="${esc(m.robloxId)}" data-avatar-url="${esc(m.avatarUrl || "")}"><div class="avatar-skeleton"></div></div>
      <p class="person-username">${esc(m.username)}</p>
      <p class="person-displayname">${esc(m.displayName)}</p>
      <p class="person-country">${flagFor(m.country)} ${esc(m.country)}</p>
      <span class="role-badge" data-role="${esc(m.role)}">${esc(m.role)}</span>
    </article>
  `).join("");
  loadAvatarsIn(grid);
}

function renderStaff() {
  const container = document.getElementById("staff-groups");
  const groups = RANK_ORDER.map(rank => ({ rank, list: staff.filter(s => s.role === rank) })).filter(g => g.list.length);
  container.innerHTML = groups.map(g => `
    <div class="staff-rank-group reveal">
      <h3>${esc(g.rank)}${g.list.length > 1 ? "s" : ""}</h3>
      <div class="staff-cards">
        ${g.list.map(s => `
          <article class="person-card staff-card ${g.rank === "Founder" || g.rank === "Co-Owner" ? "featured" : ""}">
            <div class="avatar-wrap" data-roblox-id="${esc(s.robloxId)}" data-avatar-url="${esc(s.avatarUrl || "")}"><div class="avatar-skeleton"></div></div>
            <p class="person-username">${esc(s.username)}</p>
            <span class="role-badge" data-role="${esc(s.role)}">${esc(s.role)}</span>
            <p class="staff-desc">${esc(s.description)}</p>
          </article>
        `).join("")}
      </div>
    </div>
  `).join("");
  loadAvatarsIn(container);
}

function renderGames() {
  const grid = document.getElementById("games-grid");
  const sorted = [...games].sort((a, b) => (b.featured === true) - (a.featured === true));
  grid.innerHTML = sorted.map(g => `
    <article class="game-card ${g.featured ? "featured" : ""} reveal">
      <div class="game-thumb-wrap" data-universe-id="${esc(g.robloxGameId)}" data-image-url="${esc(g.imageUrl || "")}"><div class="avatar-skeleton"></div></div>
      <div class="game-body">
        <h3 class="game-name">${esc(g.name)}</h3>
        <p class="game-desc">${esc(g.description)}</p>
        <span class="status-badge" data-status="${esc(g.status)}">${esc(g.status)}</span>
        <a href="${esc(g.robloxLink)}" class="play-btn" target="_blank" rel="noopener">Play on Roblox</a>
      </div>
    </article>
  `).join("");
  loadGameThumbsIn(grid);
}

function renderLeaderboard() {
  const body = document.getElementById("leaderboard-body");
  const emptyState = document.getElementById("leaderboard-empty");
  if (!leaderboard.length) { body.innerHTML = ""; emptyState.hidden = false; return; }
  emptyState.hidden = true;
  const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
  body.innerHTML = [...leaderboard].sort((a, b) => a.rank - b.rank).map(row => `
    <tr class="${row.rank <= 3 ? "rank-" + row.rank : ""}">
      <td class="rank-cell">${medals[row.rank] || ""} #${row.rank}</td>
      <td><strong>${esc(row.player)}</strong></td>
      <td><span style="font-family:var(--font-display);color:var(--color-accent-secondary)">${esc(row.summits)}</span></td>
      <td><span class="status-badge" data-status="${esc(row.status)}">${esc(row.status)}</span></td>
    </tr>
  `).join("");
}

function renderEvents() {
  const upcoming = events.filter(e => e.status === "Upcoming").sort((a, b) => new Date(a.date) - new Date(b.date));
  const completed = events.filter(e => e.status !== "Upcoming").sort((a, b) => new Date(b.date) - new Date(a.date));
  const cardHTML = e => `
    <article class="event-card reveal">
      <h3 class="event-name">${esc(e.name)}</h3>
      <p class="event-date">📅 ${formatDate(e.date)}</p>
      <p class="event-game">${esc(e.game)}</p>
      <p class="event-desc">${esc(e.description)}</p>
      <span class="status-badge" data-status="${esc(e.status)}">${esc(e.status)}</span>
    </article>
  `;
  const upcomingGrid = document.getElementById("upcoming-events-grid");
  const upcomingEmpty = document.getElementById("upcoming-empty");
  if (!upcoming.length) { upcomingGrid.innerHTML = ""; upcomingEmpty.hidden = false; }
  else { upcomingEmpty.hidden = true; upcomingGrid.innerHTML = upcoming.map(cardHTML).join(""); }
  const completedGrid = document.getElementById("completed-events-grid");
  const completedEmpty = document.getElementById("completed-empty");
  if (!completed.length) { completedGrid.innerHTML = ""; completedEmpty.hidden = false; }
  else { completedEmpty.hidden = true; completedGrid.innerHTML = completed.map(cardHTML).join(""); }
}

function renderRecruitment() {
  document.getElementById("requirements-list").innerHTML = recruitmentData.requirements.map(r => `<li>${esc(r)}</li>`).join("");
  document.getElementById("expectations-list").innerHTML = recruitmentData.expectations.map(x => `<li>${esc(x)}</li>`).join("");
  document.getElementById("recruit-roblox-btn").href = robloxGroupUrl;
}

function renderRules() {
  const container = document.getElementById("rules-accordion");
  container.innerHTML = rules.map((r, i) => `
    <div class="rule-item" id="rule-${i}">
      <button class="rule-trigger" aria-expanded="false" aria-controls="rule-body-${i}">
        <span class="rule-number">${i + 1}</span>
        <span>${esc(r.title)}</span>
        <span class="rule-chevron" aria-hidden="true">▾</span>
      </button>
      <div class="rule-body" id="rule-body-${i}">
        <p class="rule-body-inner">${esc(r.detail)}</p>
      </div>
    </div>
  `).join("");
  container.querySelectorAll(".rule-trigger").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".rule-item");
      const isOpen = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", isOpen);
    });
  });
}

function renderDiscordLinks() {
  document.getElementById("discord-tag").textContent = discordData.tag;
  ["hero-discord-btn", "recruit-discord-btn", "discord-main-btn", "footer-discord-link"].forEach(id => {
    const el = document.getElementById(id); if (el) el.href = discordData.inviteUrl;
  });
}

/* ================================================================
   4. ROBLOX API
================================================================= */
async function loadAvatarsIn(container) {
  const wraps = [...container.querySelectorAll(".avatar-wrap")];
  if (!wraps.length) return;
  const customAvatarWraps = wraps.filter(w => isValidAvatarUrl(w.dataset.avatarUrl));
  const robloxWraps = wraps.filter(w => !isValidAvatarUrl(w.dataset.avatarUrl));
  customAvatarWraps.forEach(w => applyAvatar(w, normalizeAvatarUrl(w.dataset.avatarUrl)));
  const ids = [...new Set(robloxWraps.map(w => w.dataset.robloxId).filter(id => id && /^\d+$/.test(id)))];
  robloxWraps.forEach(w => { if (!/^\d+$/.test(w.dataset.robloxId || "")) applyAvatar(w, FALLBACK_AVATAR); });
  if (!ids.length) return;
  try {
    const url = `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${ids.join(",")}&size=150x150&format=Png&isCircular=false`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Roblox API error");
    const json = await res.json();
    const byId = {};
    (json.data || []).forEach(entry => { byId[entry.targetId] = entry.imageUrl; });
    robloxWraps.forEach(w => {
      if (!/^\d+$/.test(w.dataset.robloxId || "")) return;
      applyAvatar(w, byId[w.dataset.robloxId] || FALLBACK_AVATAR);
    });
  } catch { robloxWraps.forEach(w => applyAvatar(w, FALLBACK_AVATAR)); }
}

function isValidAvatarUrl(value) {
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol)
      && (
        url.hostname === "imgur.com"
        || url.hostname.endsWith(".imgur.com")
        || url.hostname === "cdn.discordapp.com"
        || url.hostname === "media.discordapp.net"
      );
  } catch {
    return false;
  }
}

function normalizeAvatarUrl(value) {
  const url = new URL(value);
  if (url.hostname === "imgur.com" || url.hostname === "www.imgur.com") {
    url.hostname = "i.imgur.com";
  }
  return url.href;
}

function applyAvatar(wrap, src) {
  const img = new Image(); img.alt = "";
  img.onload = () => { wrap.innerHTML = ""; wrap.appendChild(img); };
  img.onerror = () => {
    const fallback = new Image(); fallback.src = FALLBACK_AVATAR; fallback.alt = "";
    wrap.innerHTML = ""; wrap.appendChild(fallback);
  };
  img.src = src;
}

async function loadGameThumbsIn(container) {
  const wraps = [...container.querySelectorAll(".game-thumb-wrap[data-universe-id]")];
  if (!wraps.length) return;
  const customImageWraps = wraps.filter(w => isValidAvatarUrl(w.dataset.imageUrl));
  const robloxWraps = wraps.filter(w => !isValidAvatarUrl(w.dataset.imageUrl));
  customImageWraps.forEach(w => applyGameThumb(w, normalizeAvatarUrl(w.dataset.imageUrl)));
  const ids = [...new Set(robloxWraps.map(w => w.dataset.universeId).filter(id => id && /^\d+$/.test(id)))];
  robloxWraps.forEach(w => { if (!/^\d+$/.test(w.dataset.universeId || "")) applyGameThumb(w, FALLBACK_GAME_THUMB); });
  if (!ids.length) return;
  try {
    const url = `https://thumbnails.roblox.com/v1/games/icons?universeIds=${ids.join(",")}&returnPolicy=PlaceholderThumbnail&size=512x512&format=Png&isCircular=false`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Roblox API error");
    const json = await res.json();
    const byId = {};
    (json.data || []).forEach(entry => { byId[entry.targetId] = entry.imageUrl; });
    robloxWraps.forEach(w => {
      if (!/^\d+$/.test(w.dataset.universeId || "")) return;
      applyGameThumb(w, byId[w.dataset.universeId] || FALLBACK_GAME_THUMB);
    });
  } catch { robloxWraps.forEach(w => applyGameThumb(w, FALLBACK_GAME_THUMB)); }
}

function applyGameThumb(wrap, src) {
  const img = new Image(); img.alt = "";
  img.onload = () => { wrap.innerHTML = ""; wrap.appendChild(img); };
  img.onerror = () => {
    const fallback = new Image(); fallback.src = FALLBACK_GAME_THUMB; fallback.alt = "";
    wrap.innerHTML = ""; wrap.appendChild(fallback);
  };
  img.src = src;
}

/* ================================================================
   5. DRAGON ANIMATION — flying dragon on hero canvas
================================================================= */
function initDragon() {
  const canvas = document.getElementById("dragon-canvas");
  const ctx = canvas.getContext("2d");
  let width, height, t = 0;
  let rafId;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) return;

  function resize() {
    const hero = canvas.closest(".hero");
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }
  resize();
  window.addEventListener("resize", () => { cancelAnimationFrame(rafId); resize(); rafId = requestAnimationFrame(loop); });

  // Dragon state
  const dragon = {
    x: -200, y: height * 0.3,
    targetX: width * 0.7, targetY: height * 0.25,
    wingPhase: 0,
    trail: [],
    color: { r: 255, g: 90, b: 20 },
    scale: 1,
    direction: 1, // 1 = right, -1 = left
    speed: 1.2
  };

  // Multiple dragon paths — dragon flies across screen in waves
  let pathIndex = 0;
  const paths = [
    { startX: -300, startY: 0.35, endX: 1.2, endY: 0.2, speed: 1.4 },
    { startX: 1.3, startY: 0.5, endX: -0.3, endY: 0.3, speed: 1.2 },
    { startX: -0.3, startY: 0.6, endX: 1.3, endY: 0.15, speed: 1.6 },
    { startX: 1.3, startY: 0.25, endX: -0.3, endY: 0.45, speed: 1.3 },
  ];

  let currentPath = null;
  let pathProgress = 0;
  let waitTimer = 0;

  function startNewPath() {
    const p = paths[pathIndex % paths.length];
    pathIndex++;
    currentPath = {
      sx: p.startX * width, sy: p.startY * height,
      ex: p.endX * width, ey: p.endY * height,
      speed: p.speed,
      controlY: (Math.random() - 0.5) * height * 0.3
    };
    dragon.x = currentPath.sx;
    dragon.y = currentPath.sy;
    dragon.direction = currentPath.ex > currentPath.sx ? 1 : -1;
    pathProgress = 0;
  }

  function drawDragonBody(cx, cy, dir, wingAnim, scale) {
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(dir * scale, scale);

    const alpha = Math.min(1, pathProgress * 4, (1 - pathProgress) * 4);

    // Fire breath trail
    if (dir === 1) {
      const fireGrad = ctx.createLinearGradient(-80, 0, -160, 0);
      fireGrad.addColorStop(0, `rgba(255, 120, 30, ${alpha * 0.9})`);
      fireGrad.addColorStop(0.3, `rgba(255, 60, 10, ${alpha * 0.6})`);
      fireGrad.addColorStop(0.7, `rgba(200, 30, 0, ${alpha * 0.2})`);
      fireGrad.addColorStop(1, `rgba(80, 10, 0, 0)`);
      ctx.beginPath();
      ctx.ellipse(-120, 2, 60, 8, 0, 0, Math.PI * 2);
      ctx.fillStyle = fireGrad;
      ctx.fill();

      // Fire sparks
      for (let i = 0; i < 5; i++) {
        const sx = -80 - i * 18 + Math.sin(t * 8 + i) * 4;
        const sy = (Math.random() - 0.5) * 12;
        ctx.beginPath();
        ctx.arc(sx, sy, 2 - i * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, ${150 + i * 20}, 0, ${alpha * (0.8 - i * 0.15)})`;
        ctx.fill();
      }
    }

    // Dragon body (serpentine)
    const bodySegments = 8;
    for (let i = bodySegments; i >= 0; i--) {
      const bx = -i * 12 + Math.sin(t * 3 + i * 0.4) * 4;
      const by = Math.sin(t * 3 + i * 0.5) * (3 + i * 0.5);
      const br = (8 - i * 0.7) * scale;
      const bodyGrad = ctx.createRadialGradient(bx, by, 0, bx, by, br);
      bodyGrad.addColorStop(0, `rgba(255, 100, 20, ${alpha * 0.95})`);
      bodyGrad.addColorStop(0.6, `rgba(180, 50, 10, ${alpha * 0.8})`);
      bodyGrad.addColorStop(1, `rgba(80, 20, 5, ${alpha * 0.4})`);
      ctx.beginPath();
      ctx.arc(bx, by, br, 0, Math.PI * 2);
      ctx.fillStyle = bodyGrad;
      ctx.fill();
    }

    // Tail
    ctx.beginPath();
    ctx.moveTo(-bodySegments * 12, Math.sin(t * 3 + bodySegments * 0.5) * 5);
    for (let i = 1; i <= 5; i++) {
      const tx = -(bodySegments * 12) - i * 10;
      const ty = Math.sin(t * 3 + (bodySegments + i) * 0.5) * (5 + i * 2);
      ctx.lineTo(tx, ty);
    }
    ctx.strokeStyle = `rgba(180, 50, 10, ${alpha * 0.7})`;
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();

    // Head
    const headX = 10;
    const headY = Math.sin(t * 3) * 2;
    const headGrad = ctx.createRadialGradient(headX, headY, 0, headX, headY, 14);
    headGrad.addColorStop(0, `rgba(255, 140, 40, ${alpha})`);
    headGrad.addColorStop(0.5, `rgba(220, 70, 15, ${alpha})`);
    headGrad.addColorStop(1, `rgba(120, 30, 5, ${alpha})`);
    ctx.beginPath();
    ctx.ellipse(headX, headY, 14, 10, 0, 0, Math.PI * 2);
    ctx.fillStyle = headGrad;
    ctx.fill();

    // Snout
    ctx.beginPath();
    ctx.ellipse(headX + 16, headY + 1, 8, 5, 0.1, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(200, 70, 15, ${alpha})`;
    ctx.fill();

    // Eye glow
    ctx.beginPath();
    ctx.arc(headX + 6, headY - 3, 3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 220, 0, ${alpha})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(headX + 6, headY - 3, 1.5, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 80, 0, ${alpha})`;
    ctx.fill();

    // Wings
    const wingUp = Math.sin(wingAnim) * 0.7;
    const wingX = -10;
    const wingY = -2;

    // Upper wing
    ctx.beginPath();
    ctx.moveTo(wingX, wingY);
    ctx.bezierCurveTo(wingX + 10, wingY - 20 - wingUp * 25, wingX + 40, wingY - 30 - wingUp * 30, wingX + 50, wingY - 5 + wingUp * 5);
    ctx.bezierCurveTo(wingX + 35, wingY + 8, wingX + 10, wingY + 5, wingX, wingY);
    const wingGrad = ctx.createLinearGradient(wingX, wingY - 30, wingX + 50, wingY);
    wingGrad.addColorStop(0, `rgba(255, 80, 10, ${alpha * 0.9})`);
    wingGrad.addColorStop(0.5, `rgba(180, 40, 5, ${alpha * 0.7})`);
    wingGrad.addColorStop(1, `rgba(80, 15, 3, ${alpha * 0.4})`);
    ctx.fillStyle = wingGrad;
    ctx.fill();

    // Wing membrane lines
    for (let wi = 1; wi <= 3; wi++) {
      ctx.beginPath();
      ctx.moveTo(wingX + 2, wingY);
      const wx = wingX + wi * 12;
      const wy = wingY - (15 + wingUp * 20) * (wi / 3);
      ctx.lineTo(wx, wy);
      ctx.strokeStyle = `rgba(255, 120, 20, ${alpha * 0.5})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Lower wing (mirror, smaller)
    ctx.beginPath();
    ctx.moveTo(wingX, wingY);
    ctx.bezierCurveTo(wingX + 8, wingY + 15 - wingUp * 10, wingX + 30, wingY + 20 - wingUp * 8, wingX + 35, wingY + 8 - wingUp * 4);
    ctx.bezierCurveTo(wingX + 22, wingY + 2, wingX + 8, wingY + 3, wingX, wingY);
    const lWingGrad = ctx.createLinearGradient(wingX, wingY + 22, wingX + 35, wingY);
    lWingGrad.addColorStop(0, `rgba(140, 30, 5, ${alpha * 0.6})`);
    lWingGrad.addColorStop(1, `rgba(80, 15, 3, ${alpha * 0.3})`);
    ctx.fillStyle = lWingGrad;
    ctx.fill();

    // Horns
    ctx.beginPath();
    ctx.moveTo(headX - 2, headY - 8);
    ctx.lineTo(headX + 2, headY - 18);
    ctx.lineTo(headX + 6, headY - 8);
    ctx.fillStyle = `rgba(255, 180, 50, ${alpha * 0.9})`;
    ctx.fill();

    ctx.restore();
  }

  function drawFireTrail() {
    if (dragon.trail.length < 2) return;
    for (let i = 1; i < dragon.trail.length; i++) {
      const prev = dragon.trail[i - 1];
      const curr = dragon.trail[i];
      const age = i / dragon.trail.length;
      ctx.beginPath();
      ctx.moveTo(prev.x, prev.y);
      ctx.lineTo(curr.x, curr.y);
      ctx.strokeStyle = `rgba(255, ${Math.floor(80 + age * 120)}, 0, ${age * 0.25})`;
      ctx.lineWidth = age * 6;
      ctx.lineCap = "round";
      ctx.stroke();
    }
  }

  function loop() {
    ctx.clearRect(0, 0, width, height);
    t += 0.016;

    if (!currentPath) {
      waitTimer++;
      if (waitTimer > 80) { startNewPath(); waitTimer = 0; }
      rafId = requestAnimationFrame(loop);
      return;
    }

    // Quadratic bezier path
    const midX = (currentPath.sx + currentPath.ex) / 2;
    const midY = Math.min(currentPath.sy, currentPath.ey) + currentPath.controlY;
    const inv = 1 - pathProgress;
    const bx = inv * inv * currentPath.sx + 2 * inv * pathProgress * midX + pathProgress * pathProgress * currentPath.ex;
    const by = inv * inv * currentPath.sy + 2 * inv * pathProgress * midY + pathProgress * pathProgress * currentPath.ey;

    dragon.x = bx;
    dragon.y = by;
    pathProgress += currentPath.speed / 500;

    dragon.trail.push({ x: dragon.x, y: dragon.y });
    if (dragon.trail.length > 30) dragon.trail.shift();

    drawFireTrail();
    dragon.wingPhase += 0.15;
    drawDragonBody(dragon.x, dragon.y, dragon.direction, dragon.wingPhase, 1.2);

    if (pathProgress >= 1) {
      currentPath = null;
      dragon.trail = [];
      waitTimer = 0;
    }

    rafId = requestAnimationFrame(loop);
  }

  startNewPath();
  rafId = requestAnimationFrame(loop);
}

/* ================================================================
   6. PARTICLE SYSTEM
================================================================= */
function initHeroParticles() {
  const canvas = document.getElementById("particle-canvas");
  const ctx = canvas.getContext("2d");
  let particles = [], width, height, rafId;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function resize() {
    const hero = canvas.closest(".hero");
    width = canvas.width = hero.offsetWidth;
    height = canvas.height = hero.offsetHeight;
  }

  function makeParticle() {
    return { x: Math.random() * width, y: height + Math.random() * 100, r: Math.random() * 2 + 0.3, speed: Math.random() * 0.5 + 0.15, drift: (Math.random() - 0.5) * 0.3, alpha: Math.random() * 0.5 + 0.1, hue: Math.random() > 0.7 ? "255, 107, 26" : "0, 212, 255" };
  }

  function init() {
    resize();
    const count = Math.min(80, Math.floor((width * height) / 12000));
    particles = Array.from({ length: count }, makeParticle);
  }

  function step() {
    ctx.clearRect(0, 0, width, height);
    particles.forEach(p => {
      p.y -= p.speed; p.x += p.drift;
      if (p.y < -10) Object.assign(p, makeParticle(), { y: height + 10 });
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.hue}, ${p.alpha})`; ctx.fill();
    });
    rafId = requestAnimationFrame(step);
  }

  init();
  if (!reduceMotion) step();
  window.addEventListener("resize", () => { cancelAnimationFrame(rafId); init(); if (!reduceMotion) step(); });
}

/* ================================================================
   7. INTERACTIVITY
================================================================= */
function initScrollSpy() {
  const sections = [...document.querySelectorAll("main > section, main")].filter(s => s.id);
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => link.classList.toggle("is-active", link.dataset.section === id));
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px", threshold: 0 });
  sections.forEach(s => observer.observe(s));
}

function initRevealAnimations() {
  const targets = document.querySelectorAll(".section, .reveal");
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  targets.forEach(t => { t.classList.add("reveal"); observer.observe(t); });
}

function observeNewReveals(container) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); obs.unobserve(entry.target); }
    });
  }, { threshold: 0.08 });
  container.querySelectorAll(".reveal:not(.is-visible)").forEach(el => observer.observe(el));
}

function initHamburger() {
  const btn = document.getElementById("hamburger");
  const menu = document.getElementById("mobile-menu");
  btn.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", isOpen);
  });
  menu.querySelectorAll(".mobile-link").forEach(link => {
    link.addEventListener("click", () => { menu.classList.remove("is-open"); btn.setAttribute("aria-expanded", "false"); });
  });
}

function initMemberFilters() {
  ["member-search", "member-role-filter", "member-country-filter", "member-sort"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
      renderMembers(); observeNewReveals(document.getElementById("member-grid"));
    });
  });
}

function initEventTabs() {
  const upcomingTab = document.getElementById("tab-upcoming");
  const completedTab = document.getElementById("tab-completed");
  const upcomingPanel = document.getElementById("panel-upcoming");
  const completedPanel = document.getElementById("panel-completed");
  function activate(tab) {
    const showUpcoming = tab === "upcoming";
    upcomingTab.classList.toggle("is-active", showUpcoming);
    completedTab.classList.toggle("is-active", !showUpcoming);
    upcomingTab.setAttribute("aria-selected", showUpcoming);
    completedTab.setAttribute("aria-selected", !showUpcoming);
    upcomingPanel.hidden = !showUpcoming;
    completedPanel.hidden = showUpcoming;
  }
  upcomingTab.addEventListener("click", () => activate("upcoming"));
  completedTab.addEventListener("click", () => activate("completed"));
}

function initCounterAnimation() {
  const statNumbers = document.querySelectorAll(".stat-number");
  const duration = 1600;
  function animate(el) {
    const startTarget = parseInt(el.textContent, 10) || 0;
    const start = performance.now();
    function tick(now) {
      const target = parseInt(el.dataset.target, 10) || 0;
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(startTarget + (target - startTarget) * eased);
      if (progress < 1) requestAnimationFrame(tick); else el.textContent = target;
    }
    requestAnimationFrame(tick);
  }
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => { if (entry.isIntersecting) { animate(entry.target); obs.unobserve(entry.target); } });
  }, { threshold: 0.5 });
  statNumbers.forEach(el => observer.observe(el));
}

function initMotionEnhancements() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cards = document.querySelectorAll(".feature-card, .announcement-card, .person-card, .game-card, .event-card");
  const updateScrollProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);
  };

  updateScrollProgress();
  window.addEventListener("scroll", updateScrollProgress, { passive: true });

  if (reduceMotion || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  cards.forEach(card => {
    card.addEventListener("pointermove", event => {
      const rect = card.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      const rotateY = (x - 50) * 0.08;
      const rotateX = (50 - y) * 0.06;
      card.style.setProperty("--pointer-x", `${x}%`);
      card.style.setProperty("--pointer-y", `${y}%`);
      card.style.setProperty("--card-rotate-x", `${rotateX}deg`);
      card.style.setProperty("--card-rotate-y", `${rotateY}deg`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--card-rotate-x", "0deg");
      card.style.setProperty("--card-rotate-y", "0deg");
      card.style.setProperty("--pointer-x", "50%");
      card.style.setProperty("--pointer-y", "50%");
    });
  });
}

/* ================================================================
   8. INIT
================================================================= */
document.addEventListener("DOMContentLoaded", () => {
  setStatTargets();
  renderAnnouncements();
  populateMemberFilterOptions();
  renderMembers();
  renderStaff();
  renderGames();
  renderLeaderboard();
  renderEvents();
  renderRecruitment();
  renderRules();
  renderDiscordLinks();

  initHamburger();
  initMemberFilters();
  initEventTabs();
  initScrollSpy();
  initRevealAnimations();
  initCounterAnimation();
  initHeroParticles();
  initDragon();
  initMotionEnhancements();

  observeNewReveals(document.body);
  loadDiscordMemberCount();
  window.setInterval(loadDiscordMemberCount, 5 * 60 * 1000);
});
