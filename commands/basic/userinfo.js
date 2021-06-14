const Discord = require('discord.js');
const botname = 'Jorma';
module.exports = {
    name: "userinfo",
    description: "prints out basic user info",
    callback(message, args){
        if(message.mentions.users.first() != null){
            const elseinfo = new Discord.MessageEmbed()
            .setTitle('User information')
            .addField('Player name', message.mentions.users.first(), true)
            .addField('Current server', message.guild.name, true)
            .addField('id', message.mentions.users.first().id, true )
            .setColor(0xF1C40F)
            .setThumbnail(message.mentions.users.first().displayAvatarURL())
            .setFooter(botname)
            message.reply(elseinfo);
        } else {
            
            const userinfo = new Discord.MessageEmbed()
                .setTitle('User information')
                .addField('Player name', message.author.username, true)
                .addField('Current server', message.guild.name, true)
                .addField('id', message.author.id, true )
                .setColor(0xF1C40F)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter(botname)
            message.reply(userinfo);
    }
}
}