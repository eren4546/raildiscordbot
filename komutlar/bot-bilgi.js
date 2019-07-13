const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async(client, message, args) => {
  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('İstatistik;')
    .addField(':timer: Gecikme: ', client.ping + 'ms')
    .addField(':construction_worker: Çalışma Süresi: ', `${duration}`)
    .addField(':busts_in_silhouette: Kullanıcılar:', client.guilds.reduce((a, b) => a + b.memberCount, 0))
    .addField(':tv: Kanallar:', client.channels.size)
    .addField(':clipboard: Sunucular:', client.guilds.size)
    .addField(':desktop: Bellek kullanımı:', (process.memoryUsage().heapUsed / 2048 / 2048).toFixed(2))
    .addField(':book: Kütüphanesi;', `Discord.js`)
    .addField(`Discord.js sürümü:`, Discord.version)
      .addField(':spy: Yapımcım:', '<@460888953625640960> \n `RaiL Design`')
      .addField(':paperclip: Botun Başlanma Zamanı:', "Bot **11.07.2019**'de yapılmaya başlanmıştır")
  .addField(`Davet Et`, `[Tıkla](http://bit.ly/2HcXAwV)`, true)
    .setFooter('RaiL Bot', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
}
exports.conf = {
  enabled: true,
    guildOnly: true,
  aliases: ['istatistik', 'botbilgi', 'bot-bilgi', 'i'],
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'Bot Hakkında Bilgi Verir',
  usage: 'bot-bilgi'
};
