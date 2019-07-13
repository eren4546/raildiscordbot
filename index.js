const Discord = require("discord.js");
const bot = new Discord.Client();
const moment = require('moment');
const client = new Discord.Client();
const db = require('quick.db');
require('moment-duration-format');


let prefix = "r!";//botun ön eki 
let owner = "460888953625640960";// sizin id'niz

bot.on("ready", guild => {
    bot.user.setActivity('r!yardım', { type: 'WATCHING'  })
  .then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Şu an ` + bot.channels.size + ` adet kanala, ` + bot.guilds.size + ` adet sunucuya ve ` + bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
    console.log("Bağlandım!")
});

bot.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("RANDOM"));
   }
});

bot.login(process.env.TOKEN);