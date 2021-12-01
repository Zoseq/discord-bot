const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log(`connecté ${bot.user.tag}!`);
});

/*#############################################*/
/*#              DELETE MESSAGE               #*/
/*#############################################*/



/*#############################################*/
/*#              PHOTO DE PROFIL              #*/
/*#############################################*/


/*#############################################*/
/*#                  FUN                      #*/
/*#############################################*/



/*#############################################*/
/*#               ACTIVITE BOT                #*/
/*#############################################*/

  bot.on('ready', () => {
  console.log("Koweit joue à NationsGlory")
  bot.user.setActivity("NationsGlory");
});

/*#############################################*/
/*#                  PREFIX                   #*/
/*#############################################*/

const prefix = "!";
bot.on("message", (message) => {
  if (!message.content.startsWith(prefix)) return;
});



/*#############################################*/
/*#              EMBEDS BANK                  #*/
/*#############################################*/

bot.on('message', message => {
  if (message.content === prefix + "bank") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Banque Info')
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/915595039219015681/915595676858073118/argent-billets-sac-banque.png')
    .setDescription('`Historique de la banque`\n**Totale**:`0$`')
    message.channel.send(embed);
  }
})

bot.on('message', message => {
  if (message.content === prefix + "bank1") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Banque Info')
    .setColor('RANDOM')
    .setThumbnail('https://cdn.discordapp.com/attachments/915595039219015681/915595676858073118/argent-billets-sac-banque.png')
    .setDescription('`Historique de la banque`\n\n\n+ 150,000 (Echaxx)\n\n\n**Totale**: ``150,000 $`` ')
    message.channel.send(embed);
  }
})

/*#############################################*/
/*#              EMBEDS BOTK                  #*/
/*#############################################*/

bot.on('message', message => {
  if (message.content === prefix + "achat") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Pour faire une annonce veuillez respecter le shéma ci-dessous')
    .setColor('RED')
    .setDescription('-`PRODUIT`\n-`QUANTITE`\n-`PRIX`')
    message.channel.send(embed);
  }
})

bot.on('message', message => {
  if (message.content === prefix + "vente") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Pour faire une annonce veuillez respecter le shéma ci-dessous')
    .setColor('GREEN')
    .setDescription('-`PRODUIT`\n-`QUANTITE`\n-`PRIX`')
    message.channel.send(embed);
  }
})

bot.on('message', message => {
  if (message.content === prefix + "recrue") {
    const embed = new Discord.MessageEmbed()
    .setTitle('LE KOWEIT RECRUTE')
    .setDescription('`Envoie ton pseudo, le chef ou un officier vous invitera`')
    message.channel.send(embed);
  }
})

bot.on('message', message => {
  if (message.content === prefix + "regle") {
    const embed = new Discord.MessageEmbed()
    .setTitle('Règlement')
    .setDescription('\n**Chat Textuel**✍️\n - Le spam, le flood, les insultes sont interdites.\n- Les propos de type raciste, religieux, ect... sont complètement interdit.\n- Tout type de menaces se verra dun bannissement définitif et non-négociable.\n- Merci de respecter les sujets des différents salons sous peine de sanction.\n- Merci de respecter les membres et le staff du serveur.\n- Toute provocation envers un utilisateur sera sanctionnée.\n- Toute menace envers un utilisateur sera sanctionnée.\n- Tout utilisateur ayant un comportement visant à nuire à une personne ou une entité sera exclu.\n- Veuillez vous exprimer avec un langage correct sans propos déplacés.\n- Le spoil est punis dun kick\n**Chat Vocal**🔊\n- Les sound-board, les modificateurs de voix sont interdit.\n- Merci de ne pas quitter / rejoindre un salon en boucle.\n- Les enregistrements de conversation sans laccord de toute personne présente dans le canal est strictement interdit et est désormais banni à vie sans possibilité de négociation.')
    .setThumbnail('https://cdn.discordapp.com/attachments/915606601208066098/915607836040495144/1200px-Gtk-dialog-warning.svg.png')
    message.channel.send(embed);
  }
})


bot.login(process.env.TOKEN);