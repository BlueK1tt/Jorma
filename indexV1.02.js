const Discord = require('discord.js');
const bot = new Discord.Client();
var constas = require('./consts.js');
const token = '';
var fs = require('fs');
const { resolveAny, resolveTxt } = require('dns');
const { PassThrough } = require('stream');
const PREFIX = '!';
const botname = 'Jorma'
var version = '1.0.2';

bot.on('ready', () =>{
    console.log(botname, 'Bot online');
    bot.channels.cache.get("726591333443174523").send("hello");
});

var text = fs.readFileSync("./dewords.txt").toString('utf-8').split("\n");
var textByLine = text.join(' ');
var str = textByLine;

dwords = text;
console.log(text);
bot.on('message', message=>{


    console.log(textByLine);
    const dwords = textByLine;
    console.log(dwords);
    console.log(typeof dwords);


    var msg = message.content
    console.log(message.content.includes(dwords));

    let args = message.content.substring(PREFIX.length).split(" ");

/*    if(message.content.includes(dwords)){
        message.delete()
            .then(msg => console.log("Deleted message from" , message.author.username))
            .catch(console.error)
    };*/

    switch(args[0]){
        case 'Mitäs_jorma':
            return message.reply('oot perkeleen jonne')
            break;
        case 'website':
            message.channel.send(constas.stream)
            break;
        case 'DcDocument':
            message.channel.send(constas.dcapi)
            break;
        case 'info':
            if(args[1] === 'version'){
                message.channel.send('version '+ version);
            }
            if(args[1] === 'me'){
                const embed = new Discord.MessageEmbed()
                .setTitle('User information')
                .addField('Player name', message.author.username, true)
                .addField('Version', version, true)
                .addField('Current server', message.guild.name, true)
                .setColor(0xF1C40F)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter(botname)
            message.channel.send(embed);
            }
            break;
        case 'clear':
            if(!args[1]) return message.reply('Error, please define second arg')
            break;
    }
});

bot.login(token);
