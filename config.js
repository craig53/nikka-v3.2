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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUxsWm53Z1gxdGpVcTlzYVlOc3RxZkRFVUFOekdodTY3KzlTYmJQdWRYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicnVETE5FV1N2STVPRVQrRFZ6SjJ0WkVkNkRGdHhPTzhUTnFjUTF2eDFHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTmxhMlpiMFpyMTc3THhoVjlsZGprUjJjaWR1WUwwOUVINU56TEtTK0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3Vm0zeWpnenl5aEkyZVNyb0F5Q254RXVZSlZOc0V5OGlZaXhVTzFwd1VJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFHNUQvNDBzei9nMWJGeXNDcXdEeWt4QU82MXlNeVRTa0NPMkJCdUdQSHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNNbHQ2cGMyUFhSUThIUldjUitod1JYY1phdHRBRnc4QndqdnJrdVQ3VFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieU5Cd09US2FOSmVMSnl5dU1qYURPMm9lbkw5TmgzTm1JLzVna3VqTDUzZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWo4L3lqSTZGeVpkOW5id0xUNm9MSUV4Y3d3bWRBNGo4VzVaNUNpNGppaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im40MFBXMkdlNXlkT3NLWmhxMWJJbkoxWDBvakxzM1NTSlBLaGJJR2pmZW0wdzJkM0VHQnFUV3VRQTgrU3ZKbDdTMnpaODlqelRoMjRkZGlFc29hOUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTc3LCJhZHZTZWNyZXRLZXkiOiJCUEd0N3dUa1dldytWUzE3MXU2VFkyNXNQZ2E5cE1vRStQMThnUGgvTjlZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJvcDl3emtPS1NKQ0Zhb0RNNWpuUV9nIiwicGhvbmVJZCI6ImE0YmFhMzllLWEwNWMtNGQwYi1iMWQxLWU0MGE3ZmZkYTM2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJycUFkODJpak9PREpiQ3BVMUJSd295U2puSXM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTXcwOHE3QTdOZ25rVUc1b08xUkVVb2dyOGcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlpGU0s4RU5BIiwibWUiOnsiaWQiOiIyNjM3NzY4MjE3NjY6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJSaWRkbGVyIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPWEJ6bndRbFpiTnVBWVlBeUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJnN2Z0Z2NJUnYwVHVTeUYyTGczbnh3SVVZZm1xUHFuR2hOdFNJWkJkT1Y4PSIsImFjY291bnRTaWduYXR1cmUiOiJZTk9zclFsZlVQZFlYZ2hpbFJ6N2lMZU4weS9tL1p2cmFQVWR3OGxuSElhU0RMUTVGYVYrQlFVUUNBcmE1QlljTWVCOFozRnNNcGErMnRXS2pFQlJEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWnRzSlhqL2E4VEQzM1ZFd1BzQVhtemNpWDMwcEM0OCs5bllRWEgwMStlMXVraHNmTmVGbjNLVFBWUmFQVU9kaTZSTTVzNWxaejBHV0doUUN1WjdTQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3NzY4MjE3NjY6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZTzM3WUhDRWI5RTdrc2hkaTRONThjQ0ZHSDVxajZweG9UYlVpR1FYVGxmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI5MzE3NjY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1lVyJ9" // session id here
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
