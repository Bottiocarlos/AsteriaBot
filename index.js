const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  MessageOptions,
  Mimetype,
  MimetypeMap,
  WALocationMessage,
  ChatModification,
  WA_MESSAGE_STUB_TYPES,
  WA_DEFAULT_EPHEMERAL,
  ReclientectMode,
  ProxyAgent,
  GroupSettingChange,
  waChatKey,
  mentionedJid,
  processTime,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const { virtex, vipi } = require("./lib/virtex.js"); 
const { Toxic } = require('./lib/Toxic.js')
const hx = require("hxz-api");
const qrcode = require("qrcode-terminal");
const moment = require("moment-timezone");
const speed = require("performance-now");
const request = require("request");
const { spawn, exec, execSync } = require("child_process");
const fs = require("fs");
const axios = require("axios");
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require("fluent-ffmpeg");
ffmpeg.setFfmpegPath(ffmpegPath);
const { EmojiAPI } = require("emoji-api");
const ig = require("insta-fetcher");
const emoji = new EmojiAPI();
const fetch = require("node-fetch");
const xa = require("xfarr-api");
const FormData = require("form-data");
const { mediafireDl } = require('./lib/mediafire.js')
const phoneNum = require("awesome-phonenumber");
const gis = require("g-i-s");
const got = require("got");
const imageToBase64 = require("image-to-base64");
const ID3Writer = require("browser-id3-writer");
const crypto = require('crypto')
const yts = require("yt-search");
const ms = require("parse-ms");
const os = require('os');
const toMs = require("ms");
const { error } = require("qrcode-terminal");
const {
  getBuffer,
  h2k,
  generateMessageID,
  getGroupAdmins,
  getRandom,
  banner,
  start,
  info,
  success,
  close,
} = require("./lib/functions");
const { color, bgcolor } = require("./lib/color");
const { fetchJson, getBase64, kyun, createExif } = require("./lib/fetcher");
const { yta, ytv, igdl, upload, formatDate } = require("./lib/ytdl");
const { webp2mp4File } = require("./lib/webp2mp4");
const time = moment().tz("America/Bogota").format("HH:mm:ss");
const afk = JSON.parse(fs.readFileSync("./lib/off.json"));
const { sleep, isAfk, cekafk, addafk } = require("./lib/offline");
const { cmdadd } = require("./lib/totalcmd.js");
const voting = JSON.parse(fs.readFileSync("./lib/voting.json"));
const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage');
const { addVote, delVote } = require("./lib/vote");
const reminder = require("./lib/reminder");
const { jadibot, stopjadibot, listjadibot } = require("./lib/jadibot");
const _reminder = JSON.parse(fs.readFileSync("./database/reminder.json"));
let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const {convertSticker} = require("./lib/swm.js")
const { addFilter } = require('./lib/antispam')
const truth = JSON.parse(fs.readFileSync('./database/truth.json'))
const dare = JSON.parse(fs.readFileSync('./database/dare.json'))
const banned = JSON.parse(fs.readFileSync('./database/user/banned.json'))

//IMAGENES //
const iye = fs.readFileSync('./Logoa.jpeg')
const mena1 = fs.readFileSync('./stik/mena-compressed.jpeg')
const lopl = fs.readFileSync('./stik/Logopl-compressed.jpg')
const ameClient = require("amethyste-api")

const ameApi = new ameClient("1f486b04b157f12adf0b1fe0bd83c92a28ce768683871d2a390e25614150d0c8fa404fd01b82a5ebf5b82cbfa22e365e611c8501225a93d5d1e87f9f420eb91b")
//// IMAGEN ///
const time2 = moment().tz("America/Bogota").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Buenas Noches🌃";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Buenas Noches🌞";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Buenas Tardes🌄";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Buenas Tardes☀️";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Buenos Días🌅  ";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Buenas Tardes🌄";
    }
 // BATAS \\
menusimpel = false
banChats = false;
offline = false;
antidel = false;
welcom = true;
antical = true;
readGc = true; 
readPc = true;
autovn = false;
multi = true
harga = 0
matauang = 'USD'
nopref = false
numbernye = '0'
autoketik = false;
prefixStatus = true;
targetpc = "573225236629"; 
owner = "573225236629"; 
fakeyoi = "Abadon"; 
HunterApi = "Ikyy69", 
xchillds = 'XChillDs' 
hardi = 'hardianto', 
valkey = "rivalgans", 
zeksapi = "vallganz5",
dapapi = "anakasu",
ApiZeks = "https://api.zeks.xyz",
zeksApikey = "Alphabott",
nomorowner1 = "@573225236629"; 
fake = `𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : ${fakeyoi}\n︎𝗣𝗿𝗲𝗳𝗶𝘅 : ❂ ${prefixStatus ? "Multi Prefix" : "No Prefix"}  ❂ `;
thumb = fs.readFileSync("./stik/thumb.jpeg"); 
numbernye = "0"; 
waktu = "-";
alasan = "-"; 
autojoin = false;
cmhit = []
hit_today = [];
//=================================================//
let _scommand = JSON.parse(fs.readFileSync("./database/scommand.json"));

// 𝗙𝘂𝗻𝗰𝗶𝗼𝗻 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗼𝗺𝗺𝗮𝗻𝗱︎
const addCmd = (id, command) => {
  const obj = { id: id, chats: command };
  _scommand.push(obj);
  fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
};
const getCommandPosition = (id) => {
  let position = null;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      position = i;
    }
  });
  if (position !== null) {
    return position;
  }
};

const apis1 = ['7c6c9a9e1138b473e6c64388','ff8508e71c332b870c1e8a1b','b57c69801b7b3e63b3b3e94c','e07d2ff8ff95d995809ec7b3','99ae3d189586081a2be37357','8cd8a7918eab2510afd496c0']
const lolh = apis1[Math.floor(Math.random() * apis1.length)]

const getCmd = (id) => {
let position = null;
Object.keys(_scommand).forEach((i) => {
  if (_scommand[i].id === id) {
    position = i;
  }
});
if (position !== null) {
  return _scommand[position].chats;
}
};

const checkSCommand = (id) => {
  let status = false;
  Object.keys(_scommand).forEach((i) => {
    if (_scommand[i].id === id) {
      status = true;
    }
  });
  return status;
};
function monospace(string) {
return '```' + string + '```'
}   
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dia, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Hora, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minuto, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundo") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
module.exports = cnf = async (cnf, mek) => {
  try {
    if (!mek.hasNewMessage) return;
    mek = mek.messages.all()[0];
    if (!mek.message) return;
    if (mek.key && mek.key.remoteJid == "status@broadcast") return;
    global.blocked;
    mek.message =
      Object.keys(mek.message)[0] === "ephemeralMessage"
        ? mek.message.ephemeralMessage.message
        : mek.message;
const typei = Object.keys(mek.message)[0]
const type = Object.keys(mek.message)[0]
let _chats =
      type === "conversation" && mek.message.conversation
        ? mek.message.conversation
        : type == "imageMessage" && mek.message.imageMessage.caption
        ? mek.message.imageMessage.caption
        : type == "videoMessage" && mek.message.videoMessage.caption
        ? mek.message.videoMessage.caption
        : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
        ? mek.message.extendedTextMessage.text
        : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
        ? mek.message[type].selectedButtonId
        : type == "stickerMessage" &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== null &&
          getCmd(mek.message[type].fileSha256.toString("base64")) !== undefined
        ? getCmd(mek.message[type].fileSha256.toString("base64"))
        : "";
const isImage = (type === 'imageMessage')
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : "".slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
		    var prefix = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα¦|/\\©^]/.test(cmd) ? cmd.match(/^[°zZ#$@*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        } else {
            if (nopref){
                prefix = ''
            } else {
                prefix = prefa
            }
        }
    const content = JSON.stringify(mek.message);
    const from = mek.key.remoteJid;
    const {
      text,
      extendedText,
      contact,
      location,
      contactsArray,
      liveLocation,
      image,
      video,
      sticker,
      document,
      audio,
      product,
    } = MessageType;
const body = (type === 'listResponseMessage' && mek.message.listResponseMessage.title) ? mek.message.listResponseMessage.title : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
		const budo = (typei === 'conversation') ? mek.message.conversation : (typei === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
    const q = args.join(" ");
		var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
		const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
    const botNumber = cnf.user.jid;
    
    const botNumberss = cnf.user.jid + "@c.us";
    const isGroup = from.endsWith("@g.us");

    const antilink = JSON.parse(fs.readFileSync("./database/antilink.json"));
    const antivirtex = JSON.parse(
      fs.readFileSync("./database/antivirtex.json")
    );
    
    const kickarea = JSON.parse(fs.readFileSync("./database/antibule.json"));
    const nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
    const bancht = JSON.parse(fs.readFileSync('./database/banchat.json'));
    const antivo = JSON.parse(fs.readFileSync("./database/antivo.json"));
    const antihidetg = JSON.parse(
      fs.readFileSync("./database/antihidetag.json")
    );
    const isAntihidetag = isGroup ? antihidetg.includes(from) : false;
    const isAntiviewonce = isGroup ? antivo.includes(from) : false;
    const isKickarea = isGroup ? kickarea.includes(from) : false;
    const isNsfw = isGroup ? nsfww.includes(from) : false
    const isAntivirtex = isGroup ? antivirtex.includes(from) : false;
    const isAntilink = isGroup ? antilink.includes(from) : false;
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝙂𝗿𝘂𝗽𝗼𝘀
var ampun = await cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
ampun.map( async ({ jid }) => {
if (readGc === false) return
await cnf.chatRead(jid)
})
// 𝗟𝗲𝗰𝘁𝘂𝗿𝗮 𝗮𝘂𝘁𝗼𝗺𝗮𝘁𝗶𝗰𝗮 𝗲𝗻 𝗣𝘃
var chatss = await cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readPc === false) return
await cnf.chatRead(jid)
})
// 𝘼𝙪𝙩𝙤 𝗩𝗡
if (autovn) {
	if (autovn === false) return
await cnf.updatePresence(from, Presence.recording)
} else if (autoketik) {
	if (autoketik === false) return
await cnf.updatePresence(from, Presence.composing)
}
const createSerial = (size) => {
            return crypto.randomBytes(size).toString('hex').slice(0, size)
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
    const sender = mek.key.fromMe
      ? cnf.user.jid
      : isGroup
      ? mek.participant
      : mek.key.remoteJid;
    let senderr = mek.key.fromMe
      ? cnf.user.jid
      : mek.key.remoteJid.endsWith("@g.us")
      ? mek.participant
      : mek.key.remoteJid;
    const totalchat = await cnf.chats.all();
    const ownerNumber = [`573225236629@s.whatsapp.net`]
	  const senderNumber = sender.split("@")[0] 
    const m = simple.smsg(cnf, mek);
    const groupMetadata = isGroup ? await cnf.groupMetadata(from) : "";
    const groupName = isGroup ? groupMetadata.subject : "";
    /*const groupId = isGroup ? groupMetadata.jid : "";*/
    const itsMe = mek.key.fromMe ? true : false
    const isRegistered = checkRegisteredUser(sender)
   const isRegister = register.includes(sender)
    const groupMembers = isGroup ? groupMetadata.participants : "";
    const groupDesc = isGroup ? groupMetadata.desc : "";
    const isOwner = ownerNumber.includes(sender)
    const groupOwner = isGroup ? groupMetadata.owner : "";
    const hour_now = moment().format('HH:mm:ss')
const isBanned = banned.includes(sender)
    const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : "";
    const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
    const isGroupAdmins = groupAdmins.includes(sender) || false;
    const isBanchat = isGroup ? bancht.includes(from) : false
    const isVote = isGroup ? voting.includes(from) : false;
    const conts = mek.key.fromMe
      ? cnf.user.jid
      : cnf.contacts[sender] || { notify: jid.replace(/@.+/, "") };
    const pushname = mek.key.fromMe
      ? cnf.user.name
      : conts.notify || conts.vname || conts.name || "-";
    const readmore = "͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏";
    if (prefix && command) cmdadd();
    const totalhit = JSON.parse(fs.readFileSync("./lib/totalcmd.json"))[0]
      .totalcmd;
const daftar1 = `Hola ${pushname} ${ucapanWaktu}\n\nAntes de usar el bot, verifiquese primero`
       const daftar2 = '```Si no ves el botón escribe #verify```'
       const daftar3 = [
          {
            buttonId: `verify`,
            buttonText: {
              displayText: `Verify`,
            },
            type: 1,
          },]
var hayuk0 = '[⚠ NO VERIFICADO]'
		if (isRegistered) {
		hayuk0 = '[✓ VERIFICADO]'
		}
    //Y
const timeWib = moment.tz('America/Bogota').format('DD/MM HH:mm:ss')
		const timeWita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const timeWit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
    const time = moment.tz("America/Bogota").format("DD/MM HH:mm:ss");
    const jam = moment().tz("America/Bogota").format("HH:mm:ss");
    const wita = moment.tz("Asia/Makassar").format("HH:mm:ss");
    const wit = moment.tz("Asia/Jayapura").format("HH:mm:ss");
    let locale = "id";
    let d = new Date();
    let gmt = new Date(0).getTime() - new Date("1 January 1970").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
    ];
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let waktu = d.toLocaleDateString(locale, {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
cmhit.push(command)
    //MESS
    mess = {
      wait: "🎗️ 𝗣𝗼𝗿 𝗳𝗮𝘃𝗼𝗿 𝗲𝘀𝗽𝗲𝗿𝗲 𝘂𝗻 𝗺𝗶𝗻𝘂𝘁𝗼︎ 🎗️",
      success: "『 𝗟𝗶𝘀𝘁𝗼 』",
      banned: '☣ 〔Lo siento usted ha sido baneado y por ello ya no puedes utilizarme por ordenes de mi creador, porfavor comuniquese con el para poder arreglar el baneo〕 ☣',
      wrongFormat: "❗Formato incorrecto, inténtalo de nuevo en el menú❗",
      error: {
        stick: "❗No es un sticker❗",
        apiz: "Error!, tal vez porque la apikey ha caducado",
        Iv: "Link inválido :v",
      },
      only: {
        group: "❌𝗦𝗼𝗹𝗼 𝗽𝘂𝗲𝗱𝗲 𝘀𝗲𝗿 𝘂𝘁𝗶𝗹𝗶𝘇𝗮𝗱𝗼 𝗲𝗻 𝗴𝗿𝘂𝗽𝗼𝘀.❌",
      },
    };

    const isUrl = (url) => {
      return url.match(
        new RegExp(
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/,
          "gi"
        )
      );
    };
  const reply = (teks) => {
      cnf.sendMessage(from, teks, text, { quoted: mek });
    };
    const textImg = (teks) => {
           return ikyy.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./abad.jpg')})
        }
const math = (teks) => {
           return Math.floor(teks)
       }
/*const reply = (teks) => {
			cnf.sendMessage(from, teks, text, { thumbnail: iye, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `${jam} - ${week} ${weton} - ${date}`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/573225236629?text=ola%20UwU`}}})
		}*/
    const sendMess = (hehe, teks) => {
      cnf.sendMessage(hehe, teks, text);
    };

    const mentions = (teks, memberr, id) => {
      id == null || id == undefined || id == false
        ? cnf.sendMessage(from, teks.trim(), extendedText, {
            contextInfo: { mentionedJid: memberr },
          })
        : cnf.sendMessage(from, teks.trim(), extendedText, {
            quoted: mek,
            contextInfo: { mentionedJid: memberr },
          });
    };
// Fake Reply:)
    const ftroli = {
      key: {
        fromMe: false,
        participant: "0@s.whatsapp.net",
        remoteJid: "6289523258649-1604595598@g.us",
      },
      message: {
        orderMessage: {
          itemCount: 10,
          status: 200,
          thumbnail: iye,
          surface: 200,
          message: iye,
          orderTitle: "♥ AsteriaBot ♥",
          sellerJid: "0@s.whatsapp.net",
        },
      },
      contextInfo: { forwardingScore: 999, isForwarded: true },
      sendEphemeral: true,
    };
const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('./abad.jpg')
        }}}
const freply7 = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '1595603042@s.whatsapp.net' } : {}) }, message: { "productMessage":{"product": {"productImage": {"mimetype":'image/jpeg',"jpegThumbnail": iye, "title": `${ucapanWaktu} ${pushname}`, "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
}
 const fkontak = { 
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./stik/thumb.jpeg')}}}
            //FAKE STICKER
            const fsticker = {
                  key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},"message": {"stickerMessage": { "url": "https://mmg.whatsapp.net/d/f/Am6FBfNf-E2f1VoGBXkPaNAy7L6Tw_HMavKrHEt48QM4.enc","fileSha256": "Yfj8SW7liSEnDakvyVlXVZQ1LJBC9idn09X7KHe8HTc=","fileEncSha256": "F854aUrzgAkBTOVULpne4oSIi6S04Jo56pjZEo+p+9U=","mediaKey": "Z3nA2asclAAwWHngNO/vJ81qxOE2/0gkEnXak+NxPV4=","mimetype": "image/webp","height": 64,"width": 64,"directPath": "/v/t62.15575-24/12097272_1193895144391295_8973688483514349023_n.enc?ccb=11-4&oh=5a9d7147627a8355569f1a641b9ebee3&oe=60C65E73","fileLength": "7186","mediaKeyTimestamp": "1622815545","isAnimated": false}}}
            //FAKE VN
const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: iye, 
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const ftroli2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 123,
                            status: 1,
                            surface : 1,
                            message: `${ucapanWaktu} ${pushname}`,
                            orderTitle: `${ucapanWaktu} ${pushname}`,
                            thumbnail: fake,
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `${ucapanWaktu} ${pushname}`,
			"groupName": `${ucapanWaktu} ${pushname}`, 
            "caption": `${ucapanWaktu} ${pushname}`, 
            'jpegThumbnail': fake
		}
	}
}
    const fdoc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { documentMessage: { title: fake, jpegThumbnail: thumb } },
    };
    const fvn = {
      key: {
        participant: `573225236629@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        audioMessage: {
          mimetype: "audio/ogg; codecs=opus",
          seconds: 999999,
          ptt: "true",
        },
      },
    };
    const fgif = {
      key: {
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}),
      },
      message: {
        videoMessage: {
          title: fake,
          h: `Hmm`,
          seconds: "99999",
          gifPlayback: "true",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "5b017c6ac1fb953c7bd21034d2fca5fad75ef2da4c3b2c2877ef49fa544e74bf",
		"pngThumbnail": iye,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "0418",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "Pendiente"
  }
// STICKER

    const fgclink = {
      key: { participant: "0@s.whatsapp.net", remoteJid: "0@s.whatsapp.net" },
      message: {
        groupInviteMessage: {
          groupJid: "6288213840883-1616169743@g.us",
          inviteCode: "m",
          groupName: "P",
          caption: fake,
          jpegThumbnail: thumb,
        },
      },
    };
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `573225236629@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${ucapanWaktu} ${pushname}`,
                 "h": `${ucapanWaktu} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
                       }
	                  }
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${ucapanWaktu} ${pushname}`,
                 "title": `${ucapanWaktu} ${pushname}`,
                 'jpegThumbnail': iye
                        }
	                  } 
                     }
    const floc = {
      key: { participant: "0@s.whatsapp.net" },
      message: { locationMessage: { name: fake, jpegThumbnail: thumb } },
    };
    const fakestatus = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "status@broadcast" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const fakethumb = (teks, yes) => {
      cnf.sendMessage(from, teks, image, {
        thumbnail: fs.readFileSync("./stik/fake.jpeg"),
        quoted: mek,
        caption: yes,
      });
    };
    const fakegroup = (teks) => {
      cnf.sendMessage(from, teks, text, {
        quoted: {
          key: {
            fromMe: false,
            participant: `0@s.whatsapp.net`,
            ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {}),
          },
          message: {
            imageMessage: {
              url: "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
              mimetype: "image/jpeg",
              caption: fake,
              fileSha256: "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
              fileLength: "28777",
              height: 1080,
              width: 1079,
              mediaKey: "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
              fileEncSha256: "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
              directPath:
                "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
              mediaKeyTimestamp: "1610993486",
              jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
              scansSidecar:
                "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==",
            },
          },
        },
      });
    };
    const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
cnf.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
	   global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
        if (json[2][0][1].live == 'true') charging = true
       if (json[2][0][1].live == 'false') charging = false
        console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel+'%')
	})
	global.batrei = global.batrei ? global.batrei : []
		cnf.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
		}) 
download(url, "./stik" + names + ".png", async function () {
        console.log("done");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            cnf.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };
if (budy.toLowerCase() === `8473`){
		if (isRegister) return 
		    register.push(sender)
		    fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))
		    teks = `✔ Verificacion completada ✔\n\n♻ Porfavor Escribe *#menu* para ver mi menu`
		    cnf.sendMessage(from, teks, text, {quoted: fkontak })
}          /*if (!mek.key.fromMe && banChats === false) return*/
	              
           
const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, age, time, serials) => {
            const obj = { id: userid, name: sender, age: age, time: time, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
        }
        
   
//******************* 》banchat《 ********************\\
if (isBanchat){
if (!itsMe && !isOwner)return 
}
    const ftokoo = {
      key: {
        fromMe: false,
        participant: `0@s.whatsapp.net`,
        ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {}),
      },
      message: {
        productMessage: {
          product: {
            productImage: {
              mimetype: "image/jpeg",
              jpegThumbnail: fs.readFileSync(`./stik/thumb.jpeg`),
            },
            title: "♥ AsteriaBot ♥",
            description: "Bot24/7",
            currencyCode: "USD",
            priceAmount1000: "2000",
            retailerId: "By Asteria Inc",
            productImageCount: 1,
          },
          businessOwnerJid: `0@s.whatsapp.net`,
        },
      },
    };
 const ftok = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": iye 
					},
					"title": `${ucapanWaktu} ${pushname}`,
					"description": `${ucapanWaktu} ${pushname}`, 
					"currencyCode": "USD",
					"priceAmount1000": "2000",
					"retailerId": `${ucapanWaktu} ${pushname}`,
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
    const sendMediaURL = async (to, url, text = "", mids = []) => {
      if (mids.length > 0) {
        text = normalizeMention(to, text, mids);
      }
      const fn = Date.now() / 10000;
      const filename = fn.toString();
      let mime = "";
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          mime = res.headers["content-type"];
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, filename, async function () {
        console.log("done");
        let media = fs.readFileSync(filename);
        let type = mime.split("/")[0] + "Message";
        if (mime === "image/gif") {
          type = MessageType.video;
          mime = Mimetype.gif;
        }
        if (mime.split("/")[0] === "audio") {
          mime = Mimetype.mp4Audio;
        }
        cnf.sendMessage(to, media, type, {
          quoted: mek,
          mimetype: mime,
          caption: text,
          contextInfo: { mentionedJid: mids },
        });

        fs.unlinkSync(filename);
      });
    };
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
///Boton de Texto

const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
cnf.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
///Boton con Imagen
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton con Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await cnf.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
///Boton de Localización
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await cnf.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
cnf.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
    const kick = function (from, orangnya) {
      for (let i of orangnya) {
        cnf.groupRemove(from, [i]);
      }
    };
    const add = function (from, orangnya) {
      cnf.groupAdd(from, orangnya);
    };
        const grupinv = (teks) => {
        	grup = cnf.prepareMessageFromContent(from, { "groupInviteMessage": { "groupJid": '6288213840883-1616169743@g.us', "inviteCode": 'https://chat.whatsapp.com/Dgt6', "groupName": `Asteria Inc.`, "footerText": "*_Bot 24/7_*", "jpegThumbnail": iye, "caption": teks}}, {quoted:mek})
            cnf.relayWAMessage(grup)
        }
const fakeitem = (teks) => {
            cnf.sendMessage(from, teks, text, {
                quoted: {
        key:{
        	fromMe:false,
        participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289523258649-1604595598@g.us" }: {})
                    },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync(`./stik/thumb.jpeg`),"itemCount":10,"status":"CONSULTA","surface":"CATALOG","message":`Asteria Inc`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}
// Catalogo
/*const reply = (teks) => {
             res = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 111119999, "message": teks, "footerText": "*Asteria Inc*", "thumbnail": bgg, "surface": 'CATALOG' }}, {quoted:ftrol})
             cnf.relayWAMessage(res)
        }*/
const fakewa = (teks) => {        
cnf.sendMessage(from, teks, text, { thumbnail: fake, sendEphemeral: true, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `♥ AsteriaBot ♥`,body:"",previewType:"PHOTO",thumbnail:iye,sourceUrl:`https://wa.me/573225236629?text=💌Hola%20Abadon`}}})
		}
const replyfakelink = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `♥ AsteriaBot ♥\n•Instagram (@anxo2077)`,
                "body": "",
                "previewType": "PHOTO",
                "thumbnailUrl": "https://i.ibb.co/sy78RgG/img.png",
                "thumbnail": fake,
                "sourceUrl": 'https://www.youtube.com/channel/UCDbYHpkLNRmwNKHFXqFmYUQ'
},mentionedJid:[sender]}, quoted : fgif})
};
const replywa = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
                "title": `WhatsApp`,
                "body": `wa.me/573225236629`,
                "mediaType": "10",
                "mediaUrl": `wa.me/573225236629`,
                "thumbnailUrl": "https://i.ibb.co/sy78RgG/img.png",
                "thumbnail": iye,
                "sourceUrl": `wa.me/573225236629`,
},mentionedJid:[sender]}, quoted : mek})
};
const fakeyt = (teks) => {
cnf.sendMessage(from, teks, text,{contextInfo :{text: 'Hola',
"forwardingScore": 1000000000,
isForwarded: false,
sendEphemeral: false,
"externalAdReply": {
"title": `Hola ${pushname}` ,
"body": `${ucapanWaktu}`,
"mediaType": "2",
"thumbnailUrl": "https://i.ibb.co/sy78RgG/img.png",
"mediaUrl": "https://www.youtube.com/channel/UCDbYHpkLNRmwNKHFXqFmYUQ",
"thumbnail": fs.readFileSync('./stik/thumb.jpeg'),
"sourceUrl": "",
},mentionedJid:[sender]}, quoted : fgif})
};
// Support
    const sendBug = async (target, teks) => {
      if (!teks) teks = ".";
      await cnf.relayWAMessage(
        cnf.prepareMessageFromContent(
          target,
          cnf.prepareDisappearingMessageSettingContent(0),
          {}
        ),
        { waitForAck: true }
      );
      cnf.sendMessage(target, teks, "conversation");
    };

    //FUNCION
    function clockString(ms) {
      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
    }

    cekafk(afk);

    if (mek.key.remoteJid.endsWith("@g.us") && offline) {
      if (!mek.key.fromMe) {
        if (mek.message.extendedTextMessage != undefined) {
          if (mek.message.extendedTextMessage.contextInfo != undefined) {
            if (
              mek.message.extendedTextMessage.contextInfo.mentionedJid !=
              undefined
            ) {
              for (let ment of mek.message.extendedTextMessage.contextInfo
                .mentionedJid) {
                if (ment === `${owner}@s.whatsapp.net`) {
                  if (isAfk(mek.key.remoteJid)) return;
                  addafk(mek.key.remoteJid);
                  heheh = ms(Date.now() - waktu);
                  cnf.sendMessage(
                    mek.key.remoteJid,
                    `@${owner} Esta Offline!\n\n *Razon :* ${alasan}\n *Desde :* ${heheh.hours} Hora, ${heheh.minutes} Minutos, ${heheh.seconds} Segundos\n\nVuelva a intentar mas tarde`,
                    MessageType.text,
                    {
                      contextInfo: {
                        mentionedJid: [`${owner}@s.whatsapp.net`],
                        stanzaId: "B826873620DD5947E683E3ABE663F263",
                        participant: "0@s.whatsapp.net",
                        remoteJid: "status@broadcast",
                        quotedMessage: {
                          imageMessage: {
                            caption: "*OFFLINE*",
                            jpegThumbnail: fs.readFileSync("./stik/thumb.jpeg"),
                          },
                        },
                      },
                    }
                  );
                }
              }
            }
          }
        }
      }
    }

    //========================================================================================================================//
    colors = ["red", "white", "black", "blue", "yellow", "green"];
    const isMedia = type === "imageMessage" || type === "videoMessage";
    const isQuotedImage =
      type === "extendedTextMessage" && content.includes("imageMessage");
    const isQuotedVideo =
      type === "extendedTextMessage" && content.includes("videoMessage");
    const isQuotedAudio =
      type === "extendedTextMessage" && content.includes("audioMessage");
    const isQuotedSticker =
      type === "extendedTextMessage" && content.includes("stickerMessage");

/*if (listbut) console.log("[",color("command","lime"),"]",time2,color(listbut,"lime"),"from",color(sender.split("@")[0],"gold"))*/
//list command

async function sendFileFromUrl(from, url, caption, msg, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return cnf.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
    if (!isGroup && prefix && command)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "args :",
        color(args.length)
      );
    //if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
    if (prefix && command && isGroup)
      console.log(
        "\x1b[1;31m~\x1b[1;37m>",
        "[\x1b[1;32mEXEC\x1b[1;37m]",
        time,
        color(command),
        "from",
        color(sender.split("@")[0]),
        "in",
        color(groupName),
        "args :",
        color(args.length)
      );
    //if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))

    const sendKontak = (from, nomor, nama, org = "") => {
      const vcard =
        "BEGIN:VCARD\n" +
        "VERSION:3.0\n" +
        "FN:" +
        nama +
        "\n" +
        "ORG:" +
        org +
        "\n" +
        "TEL;type=CELL;type=VOICE;waid=" +
        nomor +
        ":+" +
        nomor +
        "\n" +
        "END:VCARD";
      cnf.sendMessage(
        from,
        { displayname: nama, vcard: vcard },
        MessageType.contact,
        { quoted: mek }
      );
    };
    
    if (isGroup && isAntilink && !mek.key.fromMe) {
      if (budy.includes("://chat.whatsapp.com/")) {
        if (isGroupAdmins) return
        reply("ANTILINK!! LO SENTIMOS NO SE PERMITEN VE A HACER SPAM A TU CASA ₪");
        cnf.groupRemove(from, [sender]);
      }
    }

    if (isGroup && isAntivirtex && !mek.key.fromMe) {
      if (budy.length > 500000) {
        if (isGroupAdmins) return
        reply("ANTIVIRTEX DETECTADO!! LO SENTIMOS SERÁS ELIMINADO ₪");
        cnf.groupRemove(from, sender);
      }
    }
    if (isGroup && autojoin == true) {
      if (budy.includes("://chat.whatsapp.com/")) {
        console.log(
          color("[AUTO-JOIN]", "red"),
          color("Listo", "white")
        );
        cnf.query({
          json: [
            "action",
            "invite",
            `${budy.replace("https://chat.whatsapp.com/", "")}`,
          ],
        });
      }
    }

    // Runtime🧡\\
    let settingstatus = 0;
    if (new Date() * 1 - settingstatus > 1000) {
      let _uptime = process.uptime() * 1000;
      let uptime = clockString(_uptime);

await cnf.setStatus(`₪ AsteriaBot │ V 1.0 ₪`).catch((_) => _);
      settingstatus = new Date() * 1;
    }
    if (!mek.key.fromMe && banChats === true) return;
switch (command) {
case 'verify':  
if (isBanned) return  reply(mess.banned)            
if (isRegistered) return reply('◈ Tu cuenta está verificada ◈')
const serialUser = createSerial(18)
	         try {
								ppimg = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
								} catch {
								ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
							}
	        veri = sender
	        _registered.push(sender)
	        fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))
	        addRegisteredUser(sender, serialUser)
	         const anuu = ` ❂ *REGISTRO DE USUARIO* ❂ 
*Gracias por Usar Asteria Inc*

*➥ Nombre :* ${pushname}
*➥ Numero :* +${sender.split('@')[0]}
*➥ Serial:* ${serialUser}
*➥ ︎Total:* ${_registered.length} Usuarios

* ❂ AsteriaBot ❂ *`
         haitod = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)
             buttons = [{buttonId: `menu`,buttonText:{displayText: `⚝ MENU ⚝`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(haitod, "imageMessage", { thumbnail: haitod, })).imageMessage
              buttonsMessage = {footerText:'Asteria Inc', imageMessage: imageMsg,
              contentText:`${anuu}`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
              cnf.relayWAMessage(prep)
	         console.log(color('[REGISTRO]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'gold'), 'en', color(sender || groupName))
	    // console.log(e)
            setTimeout( () => {
			cnf.updatePresence(from, Presence.composing)
			reply(`*Gracias por registrarse en AsteriaBot*`)
		}, 2000)
        break
      
        case 'explicacion':
          if (isBanned) return  reply(mess.banned)
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
           
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await cnf.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
       txtt =`Hola! ${pushname} 👋\n\n┏━━⦿ _*INFO*_
┃ 🎗️${prefix}creador (Numero del creador)
┃ 🎗️${prefix}team (Miembros del team Asteria)
┃ 🎗️${prefix}creditos (Colaboradores del bot)
┃ 🎗️${prefix}iggw (Instagram del creador)
┃ 🎗️${prefix}estado (Estado del bot)
┃ 🎗️${prefix}donar (Info donar)
┃ 🎗️${prefix}speed (Velocidad)
┃ 🎗️${prefix}runtime (Tiempo activo)
┗⦿
┏━━⦿ _*FUN*_
┃ 🎗️${prefix}asteria (Hablar con Asteria)
┃ 🎗️${prefix}topgay (Lista gays del grupo)
┃ 🎗️${prefix}tophetero (Lista heteros del grupo)
┃ 🎗️${prefix}match (Foto perfil parejas)
┗⦿
┏━━⦿ _*STICKER*_
┃ 🎗️${prefix}sticker (Crear sticker)
┃ 🎗️${prefix}robar (Robar sticker)
┃ 🎗️${prefix}dado (Sticker dado al azar)
┃ 🎗️${prefix}toimg (sticker a imagen)
┃ 🎗️${prefix}colores (Sticker rgb)
┃ 🎗️${prefix}emoji (Emoji grande)
┗⦿
┏━━⦿ _*IMAGENES*_
┃ 🎗️${prefix}badgirl (Foto badgirl)
┃ 🎗️${prefix}muslos (Foto muslos)
┃ 🎗️${prefix}brasil (Foto brasilgirl)
┃ 🎗️${prefix}china (Foto chinagirl)
┃ 🎗️${prefix}vietnam (Foto vietnamgirl)
┃ 🎗️${prefix}tailandia (Foto tailandiagirl)
┃ 🎗️${prefix}indonesia (Foto indonesiagirl)
┃ 🎗️${prefix}corea (Foto coreagirl)
┃ 🎗️${prefix}japon (Foto japongirl)
┃ 🎗️${prefix}megumin (Foto megumin)
┃ 🎗️${prefix}anime (Foto anime)
┃ 🎗️${prefix}loli (Foto loli)
┃ 🎗️${prefix}doge (Foto doge)
┃ 🎗️${prefix}waifu (Foto waifu)
┃ 🎗️${prefix}husbu (Foto husbando)
┃ 🎗️${prefix}milf (Foto milf)
┃ 🎗️${prefix}cosplay (Foto cosplay)
┃ 🎗️${prefix}wallml (Foto wallpaper)
┗⦿
┏━━⦿ _*DESCARGA*_
┃ 🎗️${prefix}play (Descarga musica o video)
┃ 🎗️${prefix}tiktokdl (Descargar video de tiktok)
┃ 🎗️${prefix}igdl (Descargar video de instagram)
┃ 🎗️${prefix}lyrics (Letra de cancion)
┃ 🎗️${prefix}pinterest (Imagen pinterest)
┃ 🎗️${prefix}playstore (Apps de playstore en link)
┃ 🎗️${prefix}imagen (Imagen en google)
┃ 🎗️${prefix}ytsearch (Buscador de youtube)
┗⦿
┏━━⦿ _*CREADOR*_
┃ 🎗️${prefix}phcomment (Foto comentario en pornhub)
┃ 🎗️${prefix}wolf (Logo lobo)
┃ 🎗️${prefix}tfire (Logo en fuego)
┃ 🎗️${prefix}ytgold (Logo youtube placa oro)
┃ 🎗️${prefix}ytsilver (Logo youtube placa plata)
┃ 🎗️${prefix}t3d (Logo 3d)
┃ 🎗️${prefix}logoa (Logo avengers)
┃ 🎗️${prefix}phlogo (Logo pornhub)
┃ 🎗️${prefix}marvel (Logo marvel)
┃ 🎗️${prefix}leavest (Logo en hojas)
┃ 🎗️${prefix}notewrite (Texto en cuaderno)
┃ 🎗️${prefix}neon2 (Logo neon)
┃ 🎗️${prefix}wall(Logo coolxd)
┗⦿
┏━━⦿ _*CONVERTIDOR*_
┃ 🎗️${prefix}tomp4 (Sticker a video)
┃ 🎗️${prefix}tourl (Media a url)
┃ 🎗️${prefix}tomp3 (Video a mp3)
┃ 🎗️${prefix}fast (Video rapido)
┃ 🎗️${prefix}slow (Video lento)
┃ 🎗️${prefix}reverse (Video reversa)
┃ 🎗️${prefix}vnsecond (Cambiar segundo de audio)
┃ 🎗️${prefix}vidsecond (cambiar segundos de video)
┗⦿
┏━━⦿ _*GRUPO*_
┃ 🎗️${prefix}tagall (Menciona a todos los miembros)
┃ 🎗️${prefix}antilink (Antilink)
┃ 🎗️${prefix}listonline (Miembros online de grupo)
┃ 🎗️${prefix}q (Mensaje respondido)
┃ 🎗️${prefix}kick (Eliminar miembro)
┃ 🎗️${prefix}add (Añadir miembro a grupo)
┃ 🎗️${prefix}getbio (Descripcion de usuario)
┃ 🎗️${prefix}getname (Nombre de usuario)
┃ 🎗️${prefix}infogrupo (Informacion del grupo)
┃ 🎗️${prefix}grupo (Opciones de grupo)
┃ 🎗️${prefix}nsfw (Activa fotos +18)
┃ 🎗️${prefix}sticktag (Sticker menciona a miembros)
┃ 🎗️${prefix}totag (Media menciona a miembros)
┃ 🎗️${prefix}hidetag (Mencion de usuarios en texto)
┃ 🎗️${prefix}contag (Contacto meciona a miembros)
┗⦿
┏━━⦿ _*nsfw*_
┃ 🎗️${prefix}awoo (Foto furry)
┃ 🎗️${prefix}blowjob (Foto cumshot)
┃ 🎗️${prefix}hentai (Foto hentai)
┃ 🎗️${prefix}neko (Foto neko)
┃ 🎗️${prefix}trapnime (Foto trapo)
┗⦿
┏━━⦿ _*OWNER*_
┃ 🎗️${prefix}bc (Mensaje a usuarios)
┃ 🎗️${prefix}ban (Ban usuario)
┃ 🎗️${prefix}unban (Desbanear usuario)
┃ 🎗️${prefix}banchat (Banea al bot de un grupo)
┃ 🎗️${prefix}unbanchat (Desbanea al bot de un grupo)
┃ 🎗️${prefix}listbanchat (Lista de baneados)
┃ 🎗️${prefix}addcmd (Añadir sticker comando)
┃ 🎗️${prefix}delcmd (Eliminar stticker comando)
┃ 🎗️${prefix}listcmd (Lista de cmd activos)
┃ 🎗️${prefix}modo (Modo opciones)
┃ 🎗️${prefix}anticall (anticall)
┃ 🎗️${prefix}setprefix (Elejir prefijo)
┃ 🎗️${prefix}antidelete (Sin eliminacion)
┃ 🎗️${prefix}welcome (Bienvenida)
┃ 🎗️${prefix}restart (Reinicia el bot)
┃ 🎗️${prefix}join (Ingresar bot a grupo)
┃ 🎗️${prefix}inspect (Revisar un grupo)
┗⦿`

               buttons = [
               {buttonId:`owner`,buttonText:{displayText:'⚝ CREADOR ⚝'},type:1},
               {buttonId:`donar`,buttonText:{displayText:'⚝ DONACION ⚝'},type:1}]


               imageMsg = (await cnf.prepareMessageMedia(fs.readFileSync(`./stik/Logoa.jpeg`), 'imageMessage', {thumbnail: fs.readFileSync(`./stik/Logoa.jpeg`)})).imageMessage

               buttonsMessage = {
               contentText: `${txtt}`,
               footerText: `⚝ 𝙀𝙨𝙩𝙖𝙙𝙤 ⚝
               
 𝐆𝐫𝐮𝐩𝐨𝐬 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 
 𝐏𝐫𝐢𝐯𝐚𝐝𝐨𝐬 𝐂𝐡𝐚𝐭𝐬 : ${privat.length}
 𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length}
 𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${latensie.toFixed(4)} _Segundos_
 𝐀𝐜𝐭𝐢𝐯𝐨 : ∞
 𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐚 : ${os.platform()}`, imageMessage: imageMsg,
               buttons: buttons,
               headerType: 4
}
prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: fkontak})
               cnf.relayWAMessage(prep)
             
               break

        case 'allmenu':
        case 'menuall':
        case 'all':
        case 'help':
        case 'menu':
          if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
groups = cnf.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = cnf.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await cnf.chats.all()
              latensie = speed() - timestampe
              total = math(`${groups.length}*${privat.length}`)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
try {
  imgpict = await cnf.getProfilePicture(`${sender.split('@')[0]}@c.us`)
  } catch {
  imgpict = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
        ptod = "573225236629@s.whatsapp.net"
        dtod = '573225236629'
        stod = `${sender}`
        uwuu = '```'
        yoii = '*'
       stst = await cnf.getStatus(`${sender.split('@')[0]}@c.us`)
				stst = stst.status == 401 ? '' : stst.status
menu = `
🎡〔𝐆𝐫𝐮𝐩𝐨𝐬 𝐂𝐡𝐚𝐭𝐬 : ${groups.length} 〕
🎡〔𝐏𝐫𝐢𝐯𝐚𝐝𝐨𝐬 𝐂𝐡𝐚𝐭𝐬 : ${privat.length} 〕
🎡〔𝐓𝐨𝐭𝐚𝐥 𝐂𝐡𝐚𝐭𝐬 : ${totalChat.length} 〕
🎡〔𝐕𝐞𝐥𝐨𝐜𝐢𝐝𝐚𝐝 : ${latensie.toFixed(4)} _Segundos_ 〕
🎡〔𝐀𝐜𝐭𝐢𝐯𝐨 : ∞
🎡〔𝐏𝐥𝐚𝐭𝐟𝐨𝐫𝐦𝐚 : ${os.platform()} 〕
🎡〔Grupo de soporte: https://chat.whatsapp.com/JMvX2fc0z2VGLSVOmQ8btI

Un placer @${sender.split("@")[0]}, si no puedes ver los botones el algun whatsapp mod, haz el siguiente cambio:
*Privilegios > Pantalla de conversación > Fotos > desactivas fotos del participante*

_*🍃Para ver el menu dale aqui abajo en leer mas🍃*_
${readmore}
_*⛩️Si quieres un menu con explicacion de cada uno de los comandos usa el comando: !explicacion⛩️*_

~~~~~~~~~~≪ °𖥸° ≫~~~~~~~~~

┏━━⦿ _*INFO*_
┃ 🎗️${prefix}creador
┃ 🎗️${prefix}team
┃ 🎗️${prefix}creditos
┃ 🎗️${prefix}iggw
┃ 🎗️${prefix}estado
┃ 🎗️${prefix}donar
┃ 🎗️${prefix}speed
┃ 🎗️${prefix}runtime
┗⦿
┏━━⦿ _*FUN*_
┃ 🎗️${prefix}asteria
┃ 🎗️${prefix}topgay
┃ 🎗️${prefix}tophetero
┃ 🎗️${prefix}match
┗⦿
┏━━⦿ _*STICKER*_
┃ 🎗️${prefix}sticker
┃ 🎗️${prefix}robar [Texto|Texto]
┃ 🎗️${prefix}dado
┃ 🎗️${prefix}toimg
┃ 🎗️${prefix}colores
┃ 🎗️${prefix}emoji
┗⦿
┏━━⦿ _*IMAGENES*_
┃ 🎗️${prefix}badgirl
┃ 🎗️${prefix}muslos
┃ 🎗️${prefix}brasil
┃ 🎗️${prefix}china
┃ 🎗️${prefix}vietnam
┃ 🎗️${prefix}tailandia
┃ 🎗️${prefix}indonesia
┃ 🎗️${prefix}corea
┃ 🎗️${prefix}japon
┃ 🎗️${prefix}megumin
┃ 🎗️${prefix}anime
┃ 🎗️${prefix}loli
┃ 🎗️${prefix}doge
┃ 🎗️${prefix}waifu 
┃ 🎗️${prefix}husbu
┃ 🎗️${prefix}milf
┃ 🎗️${prefix}cosplay
┃ 🎗️${prefix}wallml
┗⦿
┏━━⦿ _*DESCARGA*_
┃ 🎗️${prefix}play
┃ 🎗️${prefix}tiktokdl [link]
┃ 🎗️${prefix}igdl [link]
┃ 🎗️${prefix}lyrics
┃ 🎗️${prefix}pinterest
┃ 🎗️${prefix}playstore
┃ 🎗️${prefix}imagen
┃ 🎗️${prefix}ytsearch
┗⦿
┏━━⦿ _*CREADOR*_
┃ 🎗️${prefix}phcomment [Texto|Texto]
┃ 🎗️${prefix}wolf
┃ 🎗️${prefix}tfire
┃ 🎗️${prefix}ytgold
┃ 🎗️${prefix}ytsilver
┃ 🎗️${prefix}t3d
┃ 🎗️${prefix}logoa [Texto|Texto]
┃ 🎗️${prefix}phlogo [Texto|Texto]
┃ 🎗️${prefix}marvel [Texto|Texto]
┃ 🎗️${prefix}leavest
┃ 🎗️${prefix}notewrite
┃ 🎗️${prefix}neon2
┃ 🎗️${prefix}wall
┗⦿
┏━━⦿ _*CONVERTIDOR*_
┃ 🎗️${prefix}tomp4
┃ 🎗️${prefix}tourl
┃ 🎗️${prefix}tomp3
┃ 🎗️${prefix}fast
┃ 🎗️${prefix}slow
┃ 🎗️${prefix}reverse
┃ 🎗️${prefix}vnsecond
┃ 🎗️${prefix}vidsecond
┗⦿
┏━━⦿ _*GRUPO*_
┃ 🎗️${prefix}tagall
┃ 🎗️${prefix}antilink
┃ 🎗️${prefix}listonline
┃ 🎗️${prefix}q
┃ 🎗️${prefix}kick
┃ 🎗️${prefix}add [57322xxx]
┃ 🎗️${prefix}getbio
┃ 🎗️${prefix}getname
┃ 🎗️${prefix}infogrupo
┃ 🎗️${prefix}grupo
┃ 🎗️${prefix}nsfw [1 o 0]
┃ 🎗️${prefix}sticktag
┃ 🎗️${prefix}totag
┃ 🎗️${prefix}hidetag
┃ 🎗️${prefix}contag
┗⦿
┏━━⦿ _*nsfw*_
┃ 🎗️${prefix}awoo
┃ 🎗️${prefix}blowjob
┃ 🎗️${prefix}hentai
┃ 🎗️${prefix}neko
┃ 🎗️${prefix}trapnime
┗⦿
┏━━⦿ _*OWNER*_
┃ 🎗️${prefix}bc
┃ 🎗️${prefix}ban
┃ 🎗️${prefix}unban
┃ 🎗️${prefix}banchat
┃ 🎗️${prefix}unbanchat
┃ 🎗️${prefix}listbanchat
┃ 🎗️${prefix}addcmd
┃ 🎗️${prefix}delcmd
┃ 🎗️${prefix}listcmd
┃ 🎗️${prefix}modo
┃ 🎗️${prefix}anticall
┃ 🎗️${prefix}setprefix
┃ 🎗️${prefix}antidelete
┃ 🎗️${prefix}welcome
┃ 🎗️${prefix}restart
┃ 🎗️${prefix}join
┃ 🎗️${prefix}inspect
┗⦿
`
sendButLocation(from, `${menu}`,`𝘽𝙤𝙩 𝘽𝙮 @${dtod.split("@")[0]}`, {jpegThumbnail:mena1}, [{buttonId:`creador`,buttonText:{displayText:'⚝ CREADOR ⚝'},type:1},{buttonId:`donar`,buttonText:{displayText:'⚝ DONACION ⚝'},type:1}], {contextInfo: { mentionedJid: [ptod,stod]}})

break

case 'creditos':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
   dtod = '573225236629'
   var yez = `
[ 𝐶𝑟𝑒𝑑𝑖𝑡𝑜𝑠 ] :
   
⎔  Se agradece la ayuda de todos los miembros del team, los cuales hacen que el bot este en actualizacion y funcionamiento.

⎔ Para ver los miembros del team Asteria usa el comando !team
 `
     credit = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1, "message": `${yez}`, "footerText": "By Asteria Inc", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
            cnf.relayWAMessage(credit)
        break

case 'restart':
  if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
             if (!isOwner) return reply('Solo mi creador puede utilizar este comando')
             reply(mess.wait)
             exec(`node main`)
             reply('_Bot reiniciado con éxito_')
break       

case 'isbaileys': 
case 'bail': 
case 'baileys':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
reply(`${mek.quoted.isBaileys}`)
break
case 'getcaption':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!mek.key.fromMe) return;
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
case 'iggw':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
  reply('◉―――――――◉ *_AsteriaInstagram_* ◉―――――――◉\n┊ https://www.instagram.com/anxo2077 \n◉―――――――――――――――――――――――――◉')
break
   
case 'owner':
           case 'creator':
           case 'creador': 
               sendKontak(from, `${owner}`, `${fakeyoi}`, '🤍 𝙿𝚞𝚙𝚙𝚢𝚂𝚘𝚞𝚕 🤍')
               await sleep(1000)
               haibg =`🥰Hola ${pushname}\nEse es mi dueño, ¡NO SPAM!\n👉Si deseas añadir el bot a uno de tus grupos comunicate con el\n\n◎ *Importante:* El no es un bot porfavor ten modales y saluda`
               buttons = [{buttonId:`iggw`,buttonText:{displayText:'⚝ INSTAGRAM ⚝'},type:1},{buttonId:`team`,buttonText:{displayText:'⚝ TEAM ⚝'},type:1}]
               buttonsMessage = { contentText: `${haibg}`, footerText: `Creado por ${fakeyoi} 🧡`, buttons: buttons, headerType: 1 }
               prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{})
               cnf.relayWAMessage(prep)
               break  
          case "ytmp3":		  
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  playi = args.join(" ")
  anu = await fetchJson(`https://api-alc.herokuapp.com/api/download/play?query=${playi}&apikey=ConfuMods`)  
   if (anu.error) return reply(anu.error)
  buffer = await getBuffer(anu.imagen)
  lagu = await getBuffer(anu.link)
  cnf.sendMessage(from, buffer, image, {
quoted: mek})
  cnf.sendMessage(from, lagu, audio, {
mimetype: 'audio/mp4', filename: `${anu.titulo}.mp3`, quoted: mek})
break
case "ytmp4":		  
  if (args.length < 1) return reply('Escribe el nombre')
  reply(mess.wait)
  playi = args.join(" ")
  anu = await fetchJson(`https://api-alc.herokuapp.com/api/download/ytmp4?url=${playi}&apikey=ConfuMods`)  
   if (anu.error) return reply(anu.error)
  lagu = await getBuffer(anu.link)
  cnf.sendMessage(from, lagu, video, {
mimetype: 'video/mp4', filename: `${anu.titulo}.mp4`, quoted: mek})
break
case 'play':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			if (args.length === 0) return reply(`Ejemplo: ${prefix}play Happier`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				xa.Youtube(mulaikah).then(async (data) => {
						const captions = `◉――――――◉ *_AsteriaPlay_* ◉――――――◉
┊• Titulo : ${aramas.videos[0].title}
┊• ID : ${aramas.videos[0].videoId}
┊• Vistas: ${aramas.videos[0].views} 
┊• Duracion : ${aramas.videos[0].timestamp}
┊• Link : ${aramas.videos[0].url}
◉―――――――――――――――――――――◉`
sendButLocation(from, captions, '© AsteriaBot', {jpegThumbnail:mena1}, [{buttonId: `ytmp4 ${mulaikah}`, buttonText: {displayText: '⚝ Video ⚝'}, type: 1},{buttonId: `ytmp3 ${mulaikah}`, buttonText:{displayText: '⚝ Audio ⚝'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Error')
					}
			break
              case 'dado':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./sticker/${random}.webp`)
			cnf.sendMessage(from, damdu, sticker, {quoted: mek})
			break

      //------------------< Sticker Cmd >-------------------
      case "addcmd":
      case "setcmd":
if (isBanned) return  reply(mess.banned)
        if (isQuotedSticker) {
          if (!q)
            return reply(`Use : ${command}comando`);
          var kodenya =
            mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
              "base64"
            );
          addCmd(kodenya, q);
          fakestatus("Listo!");
        } else {
          reply("Etiqueta un sticker");
        }
        break;

      case "delcmd":
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker)
          return reply(`Usar : ${command} etiqueta un sticker`);
        var kodenya =
          mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString(
            "base64"
          );
        _scommand.splice(getCommandPosition(kodenya), 1);
        fs.writeFileSync("./database/scommand.json", JSON.stringify(_scommand));
        fakestatus("Listo!");
        break;
      case "listcmd":
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        teksnyee = `\`\`\` ❂ LISTA De CMD STICKER  ❂ \`\`\``;
        cemde = [];
        for (let i of _scommand) {
          cemde.push(i.id);
          teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`;
        }
        mentions(teksnyee, cemde, true);
        break;
        // banchat
case 'banchat':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!itsMe && !isOwner)return mentions(`*Esta función es especialmente para el propietario. @${ownerN}!*`, [`${ownerN}@s.whatsapp.net`], true)
//if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isBanchat) return reply(`Ya Baneado`)
bancht.push(from)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`Ban exitoso en este grupo`)
break

case 'unbanchat':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!itsMe && !isOwner)return reply('Solo el propietario puede usar esta función')
if (!isBanchat) return reply(`Ya habia sido desbaneado`)
let ubc = bancht.indexOf(from)
bancht.splice(ubc, 1)
fs.writeFileSync('./database/banchat.json', JSON.stringify(bancht))
reply(`El bot ha sido Desbaneado aca`)
break

case 'listbanchat': case 'listbc':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
 if (!itsMe && !isOwner)return reply('Solo el propietario puede usar esta función')
 teks = `*Lista de Chats baneados!*\n_Total : ${bancht.length}_\n\n`
for(let i of bancht){
met = await cnf.groupMetadata(i)
teks += 'Id : ' + i + '\n'
teks += 'Nombre : ' + met.subject + '\n\n'
}
reply(teks)
break

					case 'tagall':
            if (isBanned) return  reply(mess.banned)
					if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply('esta función es solo para grupos')
					if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `📍@${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break
					//by Asteria Inc
					          case 'phcomment':
                      if (isBanned) return  reply(mess.banned)
                      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria|xd*`)
                   var F = body.slice(10)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phub?apikey=${zeksApikey}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara%2Bbuat%2Bfoto%2Bprofil%2Bdi%2Bwhatsapp%2Bmenjadi%2Bunik.jpg&username=${F1}&msg=${F2}`)
                  cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
                           case 'wolf':
                            if (isBanned) return  reply(mess.banned)
                            if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=Asteria Inc&text2=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
         case 'tfire':  
         if (isBanned) return  reply(mess.banned)
         if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/tfire?text=${F}&apikey=${zeksApikey}`)                   
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break             
       case 'ytgold':  
       if (isBanned) return  reply(mess.banned)
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(8)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/gplaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'ytsilver':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(10)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/splaybutton?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 't3d':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'logoa':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria|xd*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'phlogo': 
       if (isBanned) return  reply(mess.banned)
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria|xd*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'marvel':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria|xd*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'leavest':  
       if (isBanned) return  reply(mess.banned)
       if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break                   
       case 'notewrite':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break
       case 'neon2':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo `, quoted: mek})
                   break  
                                    
       case 'wall':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
                   if (args.length < 1) return reply(`[  ×  ] Ejemplo :\n*${prefix}${command} Asteria*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anu = await getBuffer(`${ApiZeks}/api/breakwall?apikey=${zeksApikey}&text=${F}`)
                   cnf.sendMessage(from, anu, image, {thumbnail: Buffer.alloc(0),caption: `Listo`, quoted: mek})
                   break
      case "antilink":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroup) return reply("Solo puede ser utilizado en Grupos");
        if (!isGroupAdmins && !mek.key.fromMe) return reply("Solo puede ser utilizado por un administrador");
        if (args[0] == "on") {
          if (isAntilink) return reply("Activado!!");
          antilink.push(from);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("¡Activar con éxito el antienlace!");
        } else if (args[0] == "off") {
          antilink.splice(from, 1);
          fs.writeFileSync(
            "./database/antilink.json",
            JSON.stringify(antilink)
          );
          reply("¡Desactive con éxito el antienlace!");
        } else if (!q) {
          sendButMessage(from, `MODO ANTILINK`, `Por favor elige uno`, [
            {    
              buttonId: `antilink on`,
              buttonText: {
                displayText: `⚝ on ⚝`,
              },
              type: 1,
            },
            {
              buttonId: `antilink off`,
              buttonText: {
                displayText: `⚝ off ⚝`,
              },
              type: 1,
            },
          ]);
        }
        break;
       case 'autotype':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isOwner && !mek.key.fromMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if (autoketik === true) return
autoketik = true
reply(`Activar autotype con éxito`)
} else if (args[0] === "off") {
if (autoketik === false) return
autoketik = false
reply(`Exitó al apagar el autotype`)
} else {
reply(`on/off`)
}
break
case 'anticall':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(antical)return reply('Ha sido activado antes!')
antical = true
reply(`Anti llamadas activado con éxito`)
} else if (args[0] === "off") {
if(!antical)return reply('Ha sido desactivado antes!')
antical = false
reply(`Apagado con éxito la función anti llamadas`)
} else {
reply(`on/off`)
}
break

      case "autojoin":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroup) return reply("Solo puede ser utilizado en grupos");
        if (!mek.key.fromMe) return reply("Esta función es solo para el propietario.");
        if (args[0] == "on") {
          if (autojoin == true) return reply("Activada!!");
          autojoin = true;
          reply("Unión automática activada con éxito!");
        } else if (args[0] == "off") {
          autojoin = false;
          reply("Se desactivó la unión automática con éxito!");
        } else if (!q) {
          sendButMessage(from, `MODO DE ENTRADA A GRUPOS AUTOMÁTICA`, `Por favor elige uno`, [
            {
              buttonId: `autojoin on`,
              buttonText: {
                displayText: `⚝ on ⚝`,
              },
              type: 1,
            },
            {
              buttonId: `autojoin off`,
              buttonText: {
                displayText: `⚝ off ⚝`,
              },
              type: 1,
            },
          ]);
        }
        break;

      //------------------< Fitur Grup >-------------------
      case 'listonline': 
      if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply(`*Solo puede ser utilizado en grupos*`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(cnf.chats.get(ido).presences), cnf.user.jid]
             cnf.sendMessage(from, '*Lista de activos:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
      case "q":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!m.quoted) return reply("Etiqueta un mensaje!");
        let qse = cnf.serializeM(await m.getQuotedObj());
        if (!qse.quoted)
          return reply("el mensaje que respondió no contiene una respuesta!");
        await qse.quoted.copyNForward(m.chat, true);
        break;
      case "kick":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroup) return reply('esta función es solo para grupos');
        if (!isGroupAdmins && !mek.key.fromMe && !isOwner) return reply('Solo puede ser utilizado por un administrador');
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (
          mek.message.extendedTextMessage === undefined ||
          mek.message.extendedTextMessage === null
        )
          return reply("Etiqueta el objetivo que quieres eliminar!");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        if (mentioned.length > 1) {
          cnf.groupRemove(from, mentioned);
          reply(mess.success);
        } else if (mentioned.length < 1) {
          anu = mek.message.extendedTextMessage.contextInfo.participant;
          cnf.groupRemove(from, [anu]);
          reply(mess.success);
        } else {
          cnf.groupRemove(from, mentioned);
          reply(mess.success);
        }
        break;
					
						case 'add':
              if (isBanned) return  reply(mess.banned)
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
									try {
										if (!isGroup) return reply(mess.only.group)
										if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return reply(mess.only.admin)  
										if (!isBotGroupAdmins) return reply(`Necesito ser admin!`)
										if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) {
											entah = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
											response = await cnf.groupAdd(from, [entah])
											o = response.participants[0]
											let inv = (Object.values(o))
											if(inv[0].code == 409) return reply('El objetivo ya está en el grupo!')
											if(inv[0].code == 403) return reply('Error, usuario con anticarcel')
											if(inv[0].code == 408) return reply('Error, el usuario acaba de cerrar la sesión')
											if(inv[0].code == 401) return reply('Error, porque el bot está bloqueado por el objetivo')
												} else {
													entah = mek.message.extendedTextMessage.contextInfo.participant
													response = await cnf.groupAdd(from, [entah])
													o = response.participants[0]
													let inv = (Object.values(o))
													if(inv[0].code == 409) return reply('El objetivo ya está en el grupo!')
													if(inv[0].code == 403) return reply('Error, usuario con anticarcel')
													if(inv[0].code == 408) return reply('Falló, porque el objetivo acaba de salir')
													if(inv[0].code == 401) return reply('Falló, porque el bot está bloqueado por el objetivo')
												}
											} catch {
												return 
											}
									break
					
      case "getbio":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        var yy = mek.message.extendedTextMessage.contextInfo.participant;
        var p = await cnf.getStatus(`${yy}`, MessageType.text);
        reply(p.status);
        if (p.status == 401) {
          reply("Perfil de estado no encontrado");
        }
        break;
      // Get Name
      case "getname":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        var ambl = mek.message.extendedTextMessage.contextInfo.participant;
        const sname =
          cnf.contacts[ambl] != undefined
            ? cnf.contacts[ambl].sname || cnf.contacts[ambl].notify
            : undefined;
        reply(sname);
        break;

      // Info
      case "infogrupo":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroup) return;
        ppUrl = await cnf.getProfilePicture(from); 
        buffergbl = await getBuffer(ppUrl);
        cnf.sendMessage(from, buffergbl, image, {
          quoted: mek,
          caption: `\`\`\` ❂ INFO  ❂ \`\`\`\n*•> Nombre* : ${groupName}\n*•> Miembros* : ${groupMembers.length}\n*•> Admins* : ${groupAdmins.length}\n*•> Descripción* : \n\n${groupDesc}`,
        });
        break;
      // Demote Admins
      case "closegc":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("No soy administrador");
        if (!isGroup) return;
        reply(`*GRUPO CERRADO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break;
      case "anular":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("No soy admin");
        if (!isGroup) return;
        cnf.revokeInvite(from);
        reply("```El link de el grupo ah sido renovado```");
        break;
      case "opengc":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply("Solo puede ser utilizado por un administrador");
        if (!isBotGroupAdmins) return reply("Bot no es administrador");
        if (!isGroup) return;
        reply(`*GRUPO ABIERTO*`);
        cnf.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break;
      case "rentbot":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (mek.key.fromMe) return reply("No puede ser un bot el alquiler en un bot");
        jadibot(reply, cnf, from);
        break;
      case "stoprentbot":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!mek.key.fromMe)
          return reply("no puedo dejar de ser bot excepto que el dueño me ordene");
        stopjadibot(reply);
        break;
      case "listbot":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        let tekss = " ❂ *LISTA USUARIO RENT*  ❂ \n";
        for (let i of listjadibot) {
          tekss += `*Numero* : ${i.jid.split("@")[0]}
*Nombre* : ${i.name}
*Dispositivo* : ${i.phone.device_manufacturer}
*Modelo* : ${i.phone.device_model}\n\n`;
        }
        reply(tekss);
        break;

      //------------------< Funciones que usan botones >-------------------
      
	case 'chat':
    if (isBanned) return  reply(mess.banned)
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
			if (args.length < 1) return reply(`Usar ${prefix}chat 598#### | text`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            cnf.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Enviar chat con éxito:\n${org},@${nomor}`)
            break
// debug
			
              
                 break
			      case "modo":
              if (isBanned) return  reply(mess.banned)
              if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!owner) return;
        sendButMessage(from, `MODO PRIVADO/PUBLICO`, `Por favor elige uno`, [
          {
            buttonId: `self`,
            buttonText: {
              displayText: `MODO-PRIVADO`,
            },
            type: 1,
          },
          {
            buttonId: `public`,
            buttonText: {
              displayText: `MODO-PUBLICO`,
            },
            type: 1,
          },
        ]);
        break;

      case "grupo":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
        sendButMessage(from, `AJUSTES DE GRUPO`, `Por favor elige uno`, [
          {
            buttonId: `opengc`,
            buttonText: {
              displayText: `Abrir Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `closegc`,
            buttonText: {
              displayText: `Cerrar Grupo`,
            },
            type: 1,
          },
          {
            buttonId: `anular`,
            buttonText: {
              displayText: `Anular Link`,
            },
            type: 1,
          },
        ]);
        break;
      //Fin
      //------------------< Descargas >-------------------
case 'setprefix':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
      if (!isOwner && !mek.key.fromMe) return reply('Solo el propietario puede usar esta función')
       if (args.length < 1) return reply(`Opciones :\n=> multi\n=> nopref`)
           if (c === 'multi'){
              multi = true
                    reply(`Prefix cambiado exitosamente a ${c}`)
                } else if (c === 'nopref'){
                    multi = false
                    nopref = true
                    reply(`Prefix cambiado exitosamente a ${c}`)
                } else {
                    multi = false
                    nopref = false
                    prefa = `${c}`
                    reply(`Prefix cambiado exitosamente a ${c}`)
                }
                break
                   
   case 'bc':
      case 'broadcast':  
      if (isBanned) return  reply(mess.banned)    
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak}) 
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('Donde esta el texto?')
             anu = await cnf.chats.all()
             if (isMedia && !mek.message.videoMessage || isQuotedImage) {
             const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
             bc = await cnf.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             cnf.sendMessage(_.jid, bc, image, {quoted:fkontak,caption: `*❂ DIFUSIÓN  ❂*\n\n${body.slice(4)}`})
}
             reply('Listo')
             } else {
             for (let _ of anu) {
cnf.sendMessage(_.jid, 
			{"contentText": `* ❂ DIFUSIÓN  ❂ *\n\n${body.slice(4)}`,
			"footerText": 'AsteriaBot',
			"buttons": [
			{"buttonId": `menu`,
			"buttonText": {"displayText": "CLICK PARA VER EL MENU"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Difusion completada')
}
             break
case  'awoo':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
case  'blowjob':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
case  'hentai': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/waifu`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
case  'megumin':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
case  'neko':
if (isBanned) return  reply(mess.banned)
if (!isGroup) return reply('esta función es solo para grupos')
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
case  'trapnime':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isGroup) return reply('esta función es solo para grupos')
if (!isNsfw) return reply(`La función nsfw aún no está activa en este grupo\nEscribe ${prefix}nsfw 1`)
reply(mess.wait)
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
cnf.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./abad.jpg')})
break
//Listo
case 'nsfw':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
	        if (!isGroup) return reply('esta función es solo para grupos')
			if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
					if (args.length < 1) return reply(`to activate type : ${prefix}nsfw 1`)
					if (Number(args[0]) === 1) {
						if (isNsfw) return reply('Ya activado')
						nsfww.push(from)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Activado con éxito la función nsfw')
						cnf.sendMessage(from, `Ya pueden pedir Hentai`, text)
					} else if (Number(args[0]) === 0) {
						if (!isNsfw) return reply('Está apagado')
						var ini = nsfww.indexOf(from)
						nsfww.splice(ini, 1)
						fs.writeFileSync('./database/nsfww.json', JSON.stringify(nsfww))
						reply('Desactive con éxito la función nsfw')
					} else {
						reply('1/0')
					}
					break
case 'vnsecond':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await cnf.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						cnf.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:fvn})
						fs.unlinkSync(mediam)
				break
				case 'vidsecond':
          if (isBanned) return  reply(mess.banned)
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await cnf.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						cnf.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: fvid})
						fs.unlinkSync(median)
				break
      case "lyrics":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!q) return reply("Que cancion es?");
        let song = await hx.lirik(q);
        sendMediaURL(from, song.thumb, song.lirik);
        break;
      case 'pinterest':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!q) return reply("Que buscas?");
        reply(mess.wait)
        let pin = await hx.pinterest(q);
        let ac = pin[Math.floor(Math.random() * pin.length)];
        let di = await getBuffer(ac);
buttons = [{buttonId: `pinterest ${q}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(di, "imageMessage", { thumbnail: di, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota : no hagan spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
              cnf.relayWAMessage(prep)
        break;
      case "playstore":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!q) return reply("qué estás buscando?");
        let play = await hx.playstore(q);
        let store = "❉─────────────────────❉\n";
        for (let i of play) {
          store += `\n* ❂ _PLAY STORE_  ❂ *\n
- *Nombre* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`;
        }
        reply(store);
        break;
      case "on":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!mek.key.fromMe) return;
        offline = false;
        fakestatus(" ```ONLINE``` ");
        break;
      case "status":
      case "estado":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        fakestatus(
          `*Estado*\n${offline ? "> OFFLINE" : "> ONLINE"}\n${
            banChats ? "> MODO-PRIVADO" : "> MODO-PUBLICO"
          }\n${prefixStatus ? "> MULTI-PREFIX" : "> NO-PREFIX"}`
        );
        break;
      case "off":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        offline = true;
        waktu = Date.now();
        anuu = q ? q : "-";
        alasan = anuu;
        fakestatus(" ```OFFLINE``` ");
        break;
      case "get":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!q) return reply("Donde esta el link?");
        fetch(`${args[0]}`)
          .then((res) => res.text())
          .then((bu) => {
            fakestatus(bu);
          });
        break;
      case "contag":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
        pe = args.join("");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Numero de teléfono inválido");
        members_ids = [];
        for (let mem of groupMembers) {
          members_ids.push(mem.jid);
        }
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact,
          { contextInfo: { mentionedJid: members_ids } }
        );
        break;
      case "sticktag":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins) return reply('solo el administrador puede usar esta función')
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else {
          reply(`*Etiqueta un sticker*`);
        }
        break;
      case "slander":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (args.length < 1)
          return reply(
            `Usar :\n${prefix}slander [@tag | mensaje1 | mensaje2]\n\nEjemplo : \n${prefix}slander @tag|hola|Hola como estás`
          );
        var gh = args.join("");
        mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
        var replace = gh.split("|")[0];
        var target = gh.split("|")[1];
        var bot = gh.split("|")[2];
        cnf.sendMessage(from, `${bot}`, text, {
          quoted: {
            key: {
              fromMe: false,
              participant: `${mentioned}`,
              ...(from ? { remoteJid: from } : {}),
            },
            message: { conversation: `${target}` },
          },
        });
        break;
      case "tomp3":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, audio, {
            mimetype: "audio/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;
      case "fast":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error : ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "slow":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedVideo) return fakegroup("Etiqueta un video");
        fakegroup(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(
          `ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`,
          (err) => {
            fs.unlinkSync(media);
            if (err) return fakegroup(`Error: ${err}`);
            buffer453 = fs.readFileSync(ran);
            cnf.sendMessage(from, buffer453, video, {
              mimetype: "video/mp4",
              quoted: mek,
            });
            fs.unlinkSync(ran);
          }
        );
        break;
      case "reverse":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedVideo) return fakegroup("Etiqueta un video!");
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".mp4");
        exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return fakegroup(`Error: ${err}`);
          buffer453 = fs.readFileSync(ran);
          cnf.sendMessage(from, buffer453, video, {
            mimetype: "video/mp4",
            quoted: mek,
          });
          fs.unlinkSync(ran);
        });
        break;

      case "anime":
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        reply(mess.wait);
        fetch(
          "https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt"
        )
          .then((res) => res.text())
          .then((body) => {
            let tod = body.split("\n");
            let pjr = tod[Math.floor(Math.random() * tod.length)];
            imageToBase64(pjr)
              .then((response) => {
                media = Buffer.from(response, "base64");
                cnf.sendMessage(from, media, image, {
                  quoted: mek,
                  caption: "Aca esta",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        break;

case 'waifu':
          case 'husbu':
          case 'milf':
          case 'cosplay':
          case 'wallml':
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `waifu`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = ( await cnf.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'No olvides donar☕', imageMessage: imageMsg,
              contentText:`Click Next`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
case "attp":
  case "colores":
    if (isBanned) return  reply(mess.banned)
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
              if (args.length == 0) return reply(`Ejemplo ${prefix + command} Asteria`)
              buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
              cnf.sendMessage(from, buffer, sticker, { quoted: freply })
              break 
      case "contact":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        pe = args.join(" ");
        entah = pe.split("|")[0];
        nah = pe.split("|")[1];
        if (isNaN(entah)) return reply("Número de teléfono inválido");
        vcard =
          "BEGIN:VCARD\n" +
          "VERSION:3.0\n" +
          `FN:${nah}\n` +
          `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum(
            "+" + entah
          ).getNumber("internasional")}\n` +
          "END:VCARD".trim();
        cnf.sendMessage(
          from,
          { displayName: `${nah}`, vcard: vcard },
          contact
        );
        break;
case 'antidelete':
  if (isBanned) return  reply(mess.banned)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(antidel)return reply('Ha sido activado antes!')
antidel = true
reply(`Anti-eliminación activado con éxito`)
} else if (args[0] === "off") {
if(!antidel)return reply('Ha sido desactivado antes!')
antidel = false
reply(`Desactivado con éxito antieliminar`)
} else {
reply(`on/off`)
}
break
      case 'welcome':
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
if (!isOwner && !itsMe) return
if (args.length < 1) return reply('on/off')
if (args[0] === "on") {
if(welcom)return reply('Ha sido activado antes!')
welcom = true
reply(`Bienvenida activada con éxito`)
} else if (args[0] === "off") {
if(!welcom)return reply('Ha sido desactivado antes!')
welcom = false
reply(`Bienvenida desactivada con éxito`)
} else {
reply(`on/off`)
}
break   
case 'asteria':       
case 'simi':
  case 'bot':
    if (isBanned) return  reply(mess.banned)
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
    if (args.length == 0) return reply(`Hola _*${pushname}*_ quieres charlar un rato?\n Responde con *${prefix + command}* (tu mensaje)\n ✳️Ejemplo ${prefix + command} Hola bot`)
    value = args.join(" ");
		anu = await fetchJson(`https://api-sv2.simsimi.net/v2/?text=${value}&lc=es&cf=false`)
                     simfg = (`${anu.success}`)      
                     m.reply(simfg)
                     break
case "robar":
      case "take":
        if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return reply("Y el sticker?");
        const encmediats = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
        var kls = q
        var pack = kls.split("|")[0];
        var author2 = kls.split("|")[1];
        if (!q) return reply('*Y el nombre de autor y paquete?*')
        if (!pack) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
        if (!author2) return reply(`*Porfavor escribe bien el formato: ${prefix + command} nombre|autor*`)
        const dlfile = await cnf.downloadMediaMessage(encmediats)
        reply(mess.wait)
        const bas64 = `data:image/jpeg;base64,${dlfile.toString('base64')}`
        var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
        var imageBuffer = new Buffer.from(mantap, 'base64');
        cnf.sendMessage(from, imageBuffer, sticker, {quoted: mek})
        addFilter(from)
        break
        case 'donar':
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
          var yez = `🍀 _Si deseas donar para el mantenimiento y funcionamiento del bot puedes hacerlo desde los siguietes metodos:_
       
[💙 𝔇𝔬𝔫𝔞𝔠𝔦𝔬𝔫𝔢𝔰 💙]
          
🌿 : *PAYPAL:*
🤍 : https://www.paypal.com/donate/?hosted_button_id=EJQQZT59GHNUU
       
🌿 : _*NEQUI(Colombia):*_
🤍 : 3225236629
        `
            credit = cnf.prepareMessageFromContent(from,{ "orderMessage": { "itemCount": 1, "message": `${yez}`, "footerText": "By Asteria Inc", "thumbnail": iye, "surface": 'CATALOG'}}, {quoted: mek})
                   cnf.relayWAMessage(credit)
               break

      case "public":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isOwner) return reply("Esta función es solo para el propietario..");
        if (banChats === false) return;
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = false;
        fakeyt(` ❂ *MODO-PUBLICO*  ❂ `);
        break;
      case "self":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isOwner) return reply("Esta función es solo para el propietario.");
        if (banChats === true) return;
        uptime = process.uptime();
        // var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
        banChats = true;
        fakeyt(` ❂ *MODO-PRIVADO*  ❂ `);
        break;
        case "hidetag":
          if (isBanned) return  reply(mess.banned)
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak});
          if (!isGroup) return reply('esta función es solo para grupos');
          if (!isOwner && !isGroupAdmins && !mek.key.fromMe) return reply('solo el administrador puede usar esta función');
          var value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var optionshidetag = {
            text: value,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          cnf.sendMessage(from, optionshidetag, text);
          break;
  
      case "sticker":
      case "stiker":
      case "sg":
      case "s":
      case "stickergif":
      case "sgif":
      case "stickgif":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          const encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "666.webp";
          await ffmpeg(`./${media}`)
            .input(media)
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              reply("error");
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else if (
          ((isMedia && mek.message.videoMessage.seconds < 11) ||
            (isQuotedVideo &&
              mek.message.extendedTextMessage.contextInfo.quotedMessage
                .videoMessage.seconds < 11)) &&
          args.length == 0
        ) {
          const encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          const media = await cnf.downloadAndSaveMediaMessage(encmedia);
          ran = "999.webp";
          reply(mess.wait);
          await ffmpeg(`./${media}`)
            .inputFormat(media.split(".")[1])
            .on("start", function (cmd) {
              console.log(`Iniciando : ${cmd}`);
            })
            .on("error", function (err) {
              console.log(`Error : ${err}`);
              fs.unlinkSync(media);
              tipe = media.endsWith(".mp4") ? "video" : "gif";
              reply(`Falló, en el momento de la conversión ${tipe} a stiker`);
            })
            .on("end", function () {
              console.log("Listo");
              cnf.sendMessage(from, fs.readFileSync(ran), sticker, {
                quoted: mek,
              });
              fs.unlinkSync(media);
              fs.unlinkSync(ran);
            })
            .addOutputOptions([
              `-vcodec`,
              `libwebp`,
              `-vf`,
              `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`,
            ])
            .toFormat("webp")
            .save(ran);
        } else {
          reply(
            `Envia una imagen oh video con la etiqueta ${prefix}sticker\nDuración de el vídeo máximo 1-9 Segundos`
          );
        }
        break;
      case "toimg":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isQuotedSticker) return reply("Envia h etiqueta un sticker !");
        reply(mess.wait);
        encmedia = JSON.parse(JSON.stringify(mek).replace("quotedM", "m"))
          .message.extendedTextMessage.contextInfo;
        media = await cnf.downloadAndSaveMediaMessage(encmedia);
        ran = getRandom(".png");
        exec(`ffmpeg -i ${media} ${ran}`, (err) => {
          fs.unlinkSync(media);
          if (err) return reply("Bueno, falló, inténtalo de nuevo ^^");
          buffer = fs.readFileSync(ran);
          fakethumb(buffer, `Listo ${pushname}`);
          fs.unlinkSync(ran);
        });
        break;
      case "ytsearch":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (args.length < 1) return reply("Que deseas buscar?");
        var srch = args.join("");
        try {
          var aramas = await yts(srch);
        } catch {
          return await cnf.sendMessage(
            from,
            "Error!",
            MessageType.text,
            dload
          );
        }
        aramat = aramas.all;
        var tbuff = await getBuffer(aramat[0].image);
        var ytresult = "";
        ytresult += " ❂ *YOUTUBE SEARCH*  ❂ ";
        ytresult += "\n________________________\n\n";
        aramas.all.map((video) => {
          ytresult += "❏ Titulo: " + video.title + "\n";
          ytresult += "❏ Link: " + video.url + "\n";
          ytresult += "❏ Duracion: " + video.timestamp + "\n";
          ytresult +=
            "❏ Subido: " + video.ago + "\n________________________\n\n";
        });
        ytresult += "◩ *AsteriaBot*";
        await fakethumb(tbuff, ytresult);
        break;
       case "emoji":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!q) return fakegroup("y el emoji?");
        qes = args.join(" ");
        emoji.get(`${qes}`).then((emoji) => {
          teks = `${emoji.images[4].url}`;
          sendStickerFromUrl(from, `${teks}`);
          console.log(teks);
        });
        break;
      case "image":
      case "imagen":
      case "gimage":
      case "googleimage":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (args.length < 1) return reply("¿Qué quieres buscar??");
        reply(mess.wait);
        teks = args.join(" ");
        res = await gis(teks, google);
        function google(error, result) {
          if (error) {
            return reply(
              "_[ ! ] Error, no encontrado"
            );
          } else {
            gugIm = result;
            random = gugIm[Math.floor(Math.random() * gugIm.length)].url;
            sendMediaURL(from, random);
          }
        }
        break;
      case "join":
        if (!isOwner) return  reply(mess.only.owner)
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          hen = args[0];
          if (!q) return reply("Donde esta el link");
          var codeInvite = hen.split("https://chat.whatsapp.com/")[1];
          if (!codeInvite) return fakegroup("asegúrese de que el enlace sea correcto!");
          var response = await cnf.acceptInvite(codeInvite);
          grupinv("LISTO");
        } catch {
          fakegroup("LINK INVÁLIDO!");
        }
        break;
      case "runtime":
      case "test":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        run = process.uptime();
        teks = `${kyun(run)}`;
        reply(teks);
        break;
      case "speed":
      case "ping":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        const timestamp = speed();
        const latensi = speed() - timestamp;
        exec(`neofetch --stdout`, (error, stdout, stderr) => {
          const child = stdout.toString("utf-8");
          const ssd = child.replace(/Memory:/, "Ram:");
          const pingnya = `*${ssd}Velocidad: ${latensi.toFixed(4)} Segundos*`;
          reply(pingnya);
        });
        break;
    
      case "totag":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (!isGroupAdmins && !isOwner) return reply('solo el administrador puede usar esta función')
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          encmedia = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, sticker, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedImage) &&
          args.length == 0
        ) {
          encmedia = isQuotedImage
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, image, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedAudio) &&
          args.length == 0
        ) {
          encmedia = isQuotedAudio
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "audio/mp4",
            ptt: true,
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, audio, options);
          fs.unlinkSync(file);
        } else if (
          ((isMedia && !mek.message.videoMessage) || isQuotedVideo) &&
          args.length == 0
        ) {
          encmedia = isQuotedVideo
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          file = await cnf.downloadAndSaveMediaMessage(
            encmedia,
            (filename = getRandom())
          );
          value = args.join(" ");
          var group = await cnf.groupMetadata(from);
          var member = group["participants"];
          var mem = [];
          member.map(async (adm) => {
            mem.push(adm.id.replace("c.us", "s.whatsapp.net"));
          });
          var options = {
            mimetype: "video/mp4",
            contextInfo: { mentionedJid: mem },
            quoted: mek,
          };
          ini_buffer = fs.readFileSync(file);
          cnf.sendMessage(from, ini_buffer, video, options);
          fs.unlinkSync(file);
        } else {
          reply(
            `Envia una imagen/sticker/audio/video con la etiqueta ${prefix}totag`
          );
        }
        break;
      case "tomp4":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (
          ((isMedia && !mek.message.videoMessage) || isQuotedSticker) &&
          args.length == 0
        ) {
          ger = isQuotedSticker
            ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                .extendedTextMessage.contextInfo
            : mek;
          owgi = await cnf.downloadAndSaveMediaMessage(ger);
          webp2mp4File(owgi).then((res) => {
            sendMediaURL(from, res.result, "Listo");
          });
        } else {
          reply("Envia un sticker");
        }
        fs.unlinkSync(owgi);
        break;
      case "tourl":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        if (
          ((isMedia && !mek.message.videoMessage) ||
            isQuotedImage ||
            isQuotedVideo) &&
          args.length == 0
        ) {
          boij =
            isQuotedImage || isQuotedVideo
              ? JSON.parse(JSON.stringify(mek).replace("quotedM", "m")).message
                  .extendedTextMessage.contextInfo
              : mek;
          owgi = await cnf.downloadMediaMessage(boij);
          res = await upload(owgi);
          reply(res);
        } else {
          reply("Envia Foto/Video");
        }
        break;
      case "inspect":
        if (isBanned) return  reply(mess.banned)
        if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
        try {
          if (!isUrl(args[0]) && !args[0].includes("whatsapp.com"))
            return reply(mess.Iv);
          if (!q) return reply("Falta el link de un grupo");
          cos = args[0];
          var net = cos.split("https://chat.whatsapp.com/")[1];
          if (!net) return reply("asegúrese de que sea un enlace https://whatsapp.com/");
          jids = [];
          let {
            id,
            owner,
            subject,
            subjectOwner,
            desc,
            descId,
            participants,
            size,
            descOwner,
            descTime,
            creation,
          } = await cnf.query({
            json: ["query", "invite", net],
            expect200: true,
          });
          let par = `*Id* : ${id}
${owner ? `*Creador* : @${owner.split("@")[0]}` : "*Creador* : -"}
*Nombre de el grupo* : ${subject}
*Fecha de creación de el grupo : ${formatDate(creation * 1000)}
*Número de miembros* : ${size}
${desc ? `*Desc* : ${desc}` : "*Desc *: no hay"}
*Id desc* : ${descId}
${
  descOwner
    ? `*Desc modificado por* : @${descOwner.split("@")[0]}`
    : "*Descripción modificada by* : -"
}\n*Datos* : ${
            descTime ? `${formatDate(descTime * 1000)}` : "-"
          }\n\n*Saved contacts*\n`;
          for (let y of participants) {
            par += `> @${y.id.split("@")[0]}\n*Admin* : ${
              y.isAdmin ? "Yes" : "No"
            }\n`;
            jids.push(`${y.id.replace(/@c.us/g, "@s.whatsapp.net")}`);
          }
          jids.push(
            `${owner ? `${owner.replace(/@c.us/g, "@s.whatsapp.net")}` : "-"}`
          );
          jids.push(
            `${
              descOwner
                ? `${descOwner.replace(/@c.us/g, "@s.whatsapp.net")}`
                : "-"
            }`
          );
          cnf.sendMessage(from, par, text, {
            quoted: mek,
            contextInfo: { mentionedJid: jids },
          });
        } catch {
          reply("Link inválido");
        }
        break;
 	  case 'ban': 
    case 'banned': 
    case 'block':
      if (isBanned) return  reply(mess.banned)
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
          if (!mek.key.fromMe && !isOwner) return reply('Solo mi creador puede usar esta función')
              if (isBanned) return  reply('Ya habia sido baneado antes.')
          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`
					banned.push(bnnd)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
					reply(`El numero ${bnnd} ah sido baneado`)
          break

     case 'unban': 
     case 'unbannned': 
     case 'unblock':    
     if (isBanned) return  reply(mess.banned)
     if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
          if (!mek.key.fromMe && !isOwner) return reply('Solo mi creador puede usar esta función')
          ya = `${args[0].replace('@', '')}@s.whatsapp.net`
					unb = banned.indexOf(ya)
					banned.splice(unb, 1)
					fs.writeFileSync('./database/user/banned.json', JSON.stringify(banned))
					reply(`El numero ${ya} ah sido desbaneado`)
          break
      case 'team':
//////////////Abadon		
    const vcAbadon = 'BEGIN:VCARD\n' 
                  + 'VERSION:3.0\n' 
                  + 'FN:Abadon\n' 
                  + 'ORG:Creador;\n' 
                  + 'TEL;type=CELL;type=VOICE;waid=573225236629:+573225236629\n' 
                  + 'END:VCARD' 
                  case 'developers':
	   
//////////////Alvarez		
const vcAlvarez = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Alvarez\n' 
+ 'ORG:Mod;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=573213006645:+573213006645\n' 
+ 'END:VCARD'

//////////////Ari		
const vcAri = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Ari\n' 
+ 'ORG:Mod;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=51923038185:+51923038185\n' 
+ 'END:VCARD'

//////////////Kriss		
const vcKriss = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Kriss\n' 
+ 'ORG:Mod;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=50379173751:+50379173751\n' 
+ 'END:VCARD'

//////////////Editor		
const vcEditor = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:Editor\n' 
+ 'ORG:Editor;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=5492634352381:+5492634352381\n' 
+ 'END:VCARD'

                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Abadon", vcard: vcAbadon}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Alvarez", vcard: vcAlvarez}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Ari", vcard: vcAri}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Kriss", vcard: vcKriss}, MessageType.contact, { quoted: mek})
                  cnf.sendMessage(`${sender.split('@')[0]}@s.whatsapp.net`, {displayname: "Editor", vcard: vcEditor}, MessageType.contact, { quoted: mek})

if(!isGroup) return
reply('He enviado los numeros de mis desarrolladores a tu priv!')
break
case 'topgay':
if (isBanned) return  reply(mess.banned)
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply('esta función es solo para grupos')
          members_id = []
          teks = '≡ 🏳️‍🌈 *TOP 10 GAYS*\n Está es una lista de los más gays del grupo\n┌──────────────\n' 
          for(i = 0; i < 10; i++) {
          r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
          teks += `▢ @${groupMembers[r].jid.split('@')[0]}\n`
          members_id.push(groupMembers[r].jid)
          }
          teks += `└──────────────`
          mentions(teks, members_id, true)
          break
          case 'tophetero':
          if (isBanned) return  reply(mess.banned)
          if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
					if (!isGroup) return reply('esta función es solo para grupos')
          members_id = []
          teks = '≡ 🩸 *TOP 10 HETEROS*\n Está es una lista de los más heteros del grupo\n┌──────────────\n' 
          for(i = 0; i < 10; i++) {
          r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
          teks += `▢ @${groupMembers[r].jid.split('@')[0]}\n`
          members_id.push(groupMembers[r].jid)
          }
          teks += `└──────────────`
          mentions(teks, members_id, true)
          break
          case 'reglas':
     case "tiktokdl":		  		  
          reply(mess.wait)
          playi = args.join(" ")
          anu = await fetchJson(`https://api-alc.herokuapp.com/api/download/tiktok?url=${playi}&apikey=T2FzaXNCT1Q=`)
          if (anu.error) return reply(anu.error)
          lagu = await getBuffer(anu.result.nowm)
          cnf.sendMessage(from, lagu, video, {
        mimetype: 'video/mp4', filename: `${anu.result.title}.mp4`, quoted: mek})
                  break
                  case  'badgirl': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/badgirl?&apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `badgirl`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'brasil': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/brasil?&apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `brasil`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'muslos': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/muslos?&apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `muslos`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'china': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/china?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `china`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'vietnam': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/vietnam?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `vietnam`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'tailandia': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/thailand?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `tailandia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'indonesia': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/indonesia?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `indonesia`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'corea': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/korea?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `corea`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'japon': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://api-alc.herokuapp.com/api/chicas/japan?apikey=T2FzaXNCT1Q=')
buttons = [{buttonId: `japon`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case "igdl":		  		  
          reply(mess.wait)
          playi = args.join(" ")
          anu = await fetchJson(`https://x-restapi.herokuapp.com/api/ig-dl?url=${playi}&apikey=BETA`)
          if (anu.error) return reply(anu.error)
          lagu = await getBuffer(anu.linkdownload)
          cnf.sendMessage(from, lagu, video, {
        mimetype: 'video/mp4', filename: `${anu.linkdownload}.mp4`, quoted: mek})
                  break
case  'doge': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://leyscoders-api.herokuapp.com/api/anjing?apikey=MIMINGANZ')
buttons = [{buttonId: `doge`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case  'loli': 
if (isBanned) return  reply(mess.banned)
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
reply(mess.wait)
buffer = await getBuffer('https://leyscoders-api.herokuapp.com/api/loli?apikey=MIMINGANZ')
buttons = [{buttonId: `loli`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await cnf.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage
              buttonsMessage = {footerText:'AsteriaBot', imageMessage: imageMsg,
              contentText:`Nota: No hacer spam`,buttons,headerType:4}
              prep = await cnf.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              cnf.relayWAMessage(prep)
break
case 'match':
    if (isBanned) return  reply(mess.banned)
    if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: fkontak})
      reply(mess.wait)
      anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ`)
      bufferf = await getBuffer(anu.result.female)
      buffer = await getBuffer(anu.result.male)
      cnf.sendMessage(from, buffer, image, { quoted: mek})
      cnf.sendMessage(from, bufferf, image, { quoted: mek})
break  
                    case 'delete':
					cnf.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
					break
if (!mek.key.fromMe) return;
if (_chats.startsWith('$')){
if (!isOwner)return
if (!q)return 
var itsme = `${sender}`
var split = `*AsteriaBot*`
const term = {
contextInfo: {
participant: itsme,
quotedMessage: {
extendedTextMessage: {
text: split,
}
}
}
}
exec(q, (err, stdout) => {
if (err) return cnf.sendMessage(from, ` ${err}`, text, { quoted: mek })
if (stdout) {
cnf.sendMessage(from, stdout, text, term)
}
})
}

      default:

     if (!isOwner) return;
        if (_chats.startsWith(">")) {
          try {
            return cnf.sendMessage(
              from,
              JSON.stringify(eval(budy.slice(2)), null, "\t"),
              text,
              { quoted: mek }
            );
          } catch (err) {
            e = String(err);
            reply(e);
          }
        }
    }

    if (isGroup && budy != undefined) {
    } else {
      console.log(
        color("[]♥ AsteriaBot ♥[]", "red"),
        "Asteria Inc",
        color(sender.split("@")[0])
      );
    }
   } catch (e) {
    e = String(e); 
    if (!e.includes("this.isZero") && !e.includes("jid") && !e.includes("Cannot read property 'fromMe' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined") && !e.includes("Cannot read property 'key' of undefined") && !e.includes("Cannot use 'in' operator to search for 'text' in undefined")) {
      console.log("Message : %s", color(e, "yellow"));
    }
    // console.log(e)
  }
};
