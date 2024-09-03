//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348026492446";
global.owner = process.env.OWNER_NUMBER || "2348026492446";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUhXNjU1cmJVdUdhbEtCMW1JWjQ1WE1GNG81czJlQml0ZTA2Tzh4QitYOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkpMSUQ5YzBPZDR1VU51Z0puQmdoQTBDbG9FVzB5V1dGcmNiYXdEOWxsST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTUt5UGNzTW9WeG5IakZUQ2s2RUtwM285aXRVZ0c5K1VOdndwbGIrT213PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSlN3cENUUVYxNExaTEtvcmVJVnowaDhsWmFyME56R3lOTHRERkRGeDJZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtJbXlhMk9IRC9EV3RSaUpMUzB4NTdVaHU3NTB1OTcvYXMrK2t0Y091VUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBmK2NqdFpSRTdHT1ZIdVBndFNacTVwenppWmhVbFEyWUgvTTVoelNrSGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0hBTWJSb1lnM2xEcGUvUHlhN0ovVm02NFF5d3RHdmJHWDJXeTBHSGkwcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYkQ2QjV6ZDFkb3B3T2dlUm9iL0UxdjcycUwyTC8xS2tScFpWVTNBMS9IUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNPMi96OGdibkFLaEhLZlpCTFlBNVRlYXBGZWxhNUNCRlRZd2dBajNld2E1TitUOWVlZWd1QnVWZmlMU0JFWmsrejlVU282bnJvSE5nL2JPcWw2ZGl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ0LCJhZHZTZWNyZXRLZXkiOiIvL3ZRUGMrL0JPSGFzazNDTFAxN2YxRWJjV0tWd0ZVekxCSEF1MkN4ZElzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgwMjY0OTI0NDZAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUNGMTk0Q0I4OUI3QjM4NjlDOEEyMEFGNTI5MzE2Q0YifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM2MzkzMX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODAyNjQ5MjQ0NkBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwMkE3MTQ2MUVDMzY1QzNCMzhFOTJDNEQ2RjRGNTMxNSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MzYzOTMxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI5N3UxT1RQdlFCcUs2TVdXMHZjZlNBIiwicGhvbmVJZCI6ImMzNjRiNjZjLTE0MmYtNDJjYS04ODQwLTg4YmRjYTE2NzZiNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBU1BqV0hEZWVsMEtWQnhiQ1lTQ0Y3WGV1dG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUmFQUjJIU0N3a0wzYmhqb2R0Si80Mjc4ZmpjPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkxSNkpBNEVEIiwibWUiOnsiaWQiOiIyMzQ4MDI2NDkyNDQ2OjRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQ29kZXgifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01mczNXTVF5KzNidGdZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik1KM0ZKcHhWOFJBRjBSd3dFdEpkVDh5dG5zKzB0WklDbXZCamhDMXNWeEk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Imp2Z29iYS9yenhGSXhtc2dvMmlpN3FiQWtRaDYvb2JmY0tJOGlaeVVYRHA1cmVDTzdnZXBwTmNXVTluTEgxcXA3SERyVjlyaXpkQ0srcWw4QW9iZEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIzOFpJbndMV0xqWHdZbGVwTm1zZlpjVzJLT251ODJsT0ZJbldoOGVORDFzQUY5WEpobXRreU5qWlRieDZKdjA2c2ZvanBoUFRvbExxL1hpcTNKamJoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjY0OTI0NDY6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUQ2R4U2FjVmZFUUJkRWNNQkxTWFUvTXJaN1B0TFdTQXByd1k0UXRiRmNTIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzYzOTI4LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVBHOSJ9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
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
