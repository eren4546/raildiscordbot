const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = (client, message, params) => {

  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);
    message.author.sendCode('asciidoc', `= Komut Listesi =\n\n ⇝ Kişisel komutlar | Not: Komutların Başında "r!" Olması Lazım.
        • Moderasyon Komutları        
• ban : Belirtilen kişiyi banlar.
• kick : Belirtilen Kişiyi Kickler.    
• mute : Belirtilen Kişiyi Susturur.
• unmute : Belirtilen Kişinin Susturmasını Açar.
• sayac : Sunucuya Giren Kişilerin Kaç Kişi Olduğunu Sayar.
• temizle : Chati Belirtilen Sayı Kadar Siler.
• link-engelle <aç/kapat> : Link/Reklam Engel Sistemini Aktif Eder.

        • Eğlence Komutlari        
• nahçek : Etiketle.
• brilliance : Fotoğrafına Çerçeve Ekler.
• slot : Slot oyunu oynatır.
• winner : Fotoğrafına Çerçeve Ekler
• öp : Etiketlediğin kişiyi öper.
• öldür : Etiketlediğiniz Kişiyi Öldürürsünüz. 
• espri : Espri yapar.
• atamınsözleri : Ulu Önder Mustafa Kemal Atatürk'ün Sözlerinden Atar.
• kbakışma : Belirtilen Kişiyle Kız Göz Göze Gelir.
• sigara : Sigara Yakarsınız.
• hava-durumu : Belirtilen Yerdeki hava durumunu gösterir.
        
         • Bot Komutlari        
• davet : Botun davet linklerini atar.        
• istatistik : Bot istatistiğini gösterir.
• otorol : Ayarladığını rolü otomatik olarak verir.
• canlıdestek : Yetkililer İle Bot Hakkında Konuşun.
• yardım : Bot komutlarını gösterir.
• bug-bildir : Botun Geliştirilmesine Yardımcı Olursunuz.
• öneri : Bot İle İlgili Önerilerinizi Bildirirsiniz.
        
         •Sunucu Komutları 
• emojiler : Sunucudaki emojileri gösterir.
• roller : Sunucudaki rolleri gösterir.
• sunucu-bilgi : Sunucunun bilgilerini gösterir.
• talep : Sizin için talep açar.
                      
         •Müzik Komutlar(BAKIMDA)
• oynat : Müzik Oynatır.
• durdur : Müziği durdurur.
• geç : Müziği geçer.
• duraklat : Müziği duraklatır.
• devam : Müziği devam ettirir.

    Sayfa 1 / 1 | Yapımcı: @RaiL Design#0324`);
  if (message.channel.type !== 'dm') {
    const ozelmesajkontrol = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setDescription('Özel mesajlarını kontrol et. :postbox:');
    message.channel.sendEmbed(ozelmesajkontrol) }
  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);
      message.author.sendCode('asciidoc', `= ${command.help.name} = \n${command.help.description}\nDoğru kullanım: ` + prefix + `${command.help.usage}`);
    }
  }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp', 'help', 'y'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım [komut]'
};
