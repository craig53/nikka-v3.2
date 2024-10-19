//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "maxwellexcel2@gmail.com";
global.location = "Imo, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/hakisolos/Nikka-v3";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/bh2fpj.jpg";
global.devs = "2348121373516";
global.sudo = process.env.SUDO || "263776821766";
global.owner = process.env.OWNER_NUMBER || "263776821766";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/zdD9xsf.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://nikkapair.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpxRVFjWTEzZGlXYVhJUStCTTNmY2F1eGVHc2duMlNQK0x1dGtsMUxYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1drYUJSYThkT2JiUXppZVBuWlU3U2RyY3hlTkJuSTJoQzltWjNaNm1ndz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSEtOeGF5MmQwYm83ZDJsa2E4MFQwYVdNS2VmeFBSV0x5ZmRtZ1BLVlVzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpSzFxVHZkNHR2b3MyVlNmTUpvOUVMNEVvcVJuYUZWZkZKTU5zYkdaVFQ4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9BZnFqZ0xRaUcrNVNvQ0RFZ0xPNU1URC9Way9TMXJpNk9wZFJoNVp6MW89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit1N1ExZGg4RWtlRzlHYllGOEtoV0wwWnRpQUM1R0FDbER2NnhCVGsxd009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUpPSFZ0Z3F1d2w5M3Q2aFFJeWNxN3FVeGhCUEtSb0ZXTlQ5clMxbCttMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUtEN2I1SjVaZy9qRUh6SWd1elJLWUpGQ0JrNkpFLzFtaFozQlRIeU1DQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRZQkpFdlJteDNxYTRUU1M1R3BnODFvcHhqdVlMeVBHNUJmY3I5cWEreGkwR2VCaTJsQ3kySEtjVzN0WW1rSEUzd0NzMjJKMmI4a0l3bW1OSkgrK2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTM0LCJhZHZTZWNyZXRLZXkiOiJla3VzQTBLeHNnRUxhVlgwS2tQc2JkaGNVVytFUWZXRmkwckg0cmgxbG84PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI2VklBWGViT1NEeWtJQVh0bkJYeWV3IiwicGhvbmVJZCI6IjYxN2NjMWY2LWJjZTUtNGNiZS04MzA1LWQxNmY3N2YyZmI1MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbC95ZTJFdW5BMWRBZXRqc0E0ZmxjNW5jeDg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS2V6RmtYRzdIMnNreTNBQm9qdlNOcVpJTFhvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkgxQzhTTEFUIiwibWUiOnsiaWQiOiIyMzQ5MTEyMTcxMDc4OjMxQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IktpbmcgSGFraSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSmZ0Nzl3RkVJZUN5cmdHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiNHc3MHZRODVadTIvelg2Z1FVa0Q3S0d1ZThsRjJSU29KTTliRVJvR3JGYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoic1RhZ1VrOXFMODhDYmlXUUJKYlZiZ3k5c0l0ZUdGQUlrRjdxcHNFOVZwZE1EV2NEV2U1VmMxYm5BZytTbHRvTnVLdVFtbHM1NjZyWXA2TisxRGRCQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6IktXL2QwTlo4TSs3bkMvNDFNOCtkYmhySEg5YXhoMnZQWmdIbWtvUTczR0FhVGJFQUdWNFFEK3lHYjhkcjdGZHBGTVo4RVZxaDJOalc1bHlKckhKY2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTExMjE3MTA3ODozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJlTU85TDBQT1didHY4MStvRUZKQSt5aHJudkpSZGtVcUNUUFd4RWFCcXhYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MjY1OTQwLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUh1eiJ9" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`NIKKA™`",
  author: process.env.PACK_AUTHER || "HAKI",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "NIKKA-V3",
  ownername: process.env.OWNER_NAME || "RIDDLER",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "N I K K A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
