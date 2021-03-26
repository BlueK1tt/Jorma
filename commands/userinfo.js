const Discord = require('discord.js');
const botname = 'Jorma';
module.exports = {
    name: "userinfo",
    description: "prints out basic user info",
    excecute(message, args){
        const UsrInfo = new Discord.MessageEmbed()
            .setTitle('User information')
            .addField('Player name', message.author.username, true)
            .addField('Current server', message.guild.name, true)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.displayAvatarURL())
            .setFooter(botname)
    }
}