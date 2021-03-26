const Discord = require('discord.js');
const bot = new Discord.Client();
var constas = require('./consts.js');
const token = 'NzI2NjA5MzI3MjA0NDY2Njk4.XvjXQg.nh13LwCuqo-LJkIB64ArXEbLA2w';
const fs = require('fs');
const { resolveAny, resolveTxt } = require('dns');
const { PassThrough } = require('stream');
const { title } = require('process');
const { userInfo } = require('os');
bot.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    bot.commands.set(command.name, command);
}

const PREFIX = '!';
const botname = 'Jorma'
var version = '1.0.2';

bot.on('ready', () =>{
    console.log(botname, 'Bot online'); //after online, post when last online, with info of how long was online, coudl store data in txt file
    bot.channels.cache.get("726591333443174523").send("`HERES JORMA!\nUse !komennot to interract with me`");//make command front botMessage to always have ``marks when bot sends message
});
//console log when someone asks command, log the command and who asked
bot.on('message', message=>{

    //Create bulk delete option for admins
    //make so i can send messages as jorma like from console or creating post request 
    //make so i can start, stop, restart jorma from remote

    //make another export that checks every message sent, if something deletes it

    let args = message.content.substring(PREFIX.length).split(" ");
    switch(args[0]){
    
        case 'ping':
            bot.commands.get('ping').callback(message, args)
            break;
        case 'giverole':
            bot.commands.get('giverole').callback(message, args);
            break;
        case 'komennot':
            message.channel.send('Usable commands:\n!Mitäs_jorma\n!website\n!DcDocument\n!info')
            break;
        case 'Mitäs_jorma':
            return message.reply('oot perkeleen jonne')
            //make jorma be able to respond if previous message replied sending message and @user
            break;
        case 'website':
            bot.commands.get('website').execute(message, args);
            break;
        case 'Docs':
            bot.commands.get('document').execute(message, args);
            break;
        case 'info':
                if(args[1] === 'version'){
                message.channel.send('version '+ version);
            }
            if(args[1] === 'me'){
                const UsrInfo = new Discord.MessageEmbed()
                .setTitle('User information')
                .addField('Player name', message.author.username, true)
                .addField('Version', version, true)
                .addField('Current server', message.guild.name, true)
                .setColor(0xF1C40F)
                .setThumbnail(message.author.displayAvatarURL())
                .setFooter(botname)
                message.channel.send(UsrInfo)
                console.log(`${args}`, message.author.username)
            break;
        }
            if(args[1] == 'Jorma'){
                const InfoJorma = new Discord.MessageEmbed()
                .setTitle('Jorma')
                .addField('Name:', botname, true)
                .addField('Version', version, true)
                .addField('owner:', bot.owner, true)
                message.channel.send(InfoJorma)
                console.log(`${args}`, message.author.username)
                break;
            }
            else{
                message.channel.send('Needs second argument\nUsable seconds arguments:\nversion\nme');
                console.log(`${args}`, message.author.username)
            }
            //help and if defined help dm, will send direct message instead in the chat
            //will delete the help message
        case 'clear':
            if(!args[1]) return message.reply('Error, please define second arg')
            break;
        case 'jorma':
            var mes = "!giverole " + "@" + message.author.id + " Bots"
            message.channel.send(mes)
            break;
      /*  case PREFIX, '':
            message.channel.send('Command not found\nplease use valid commands')
            //if last message is same as sent one, dont repeat
            */     
         
        } 
});

bot.login(token);