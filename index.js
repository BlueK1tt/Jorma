const Discord = require('discord.js');
const config = require('./config.json'); //said file would contain key to discord server/channel
const bot = new Discord.Client();
var constas = require('./consts.js');
const fs = require('fs');
bot.commands = new Discord.Collection();


const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		bot.commands.set(command.name, command);
	}
}

  
  //in case of error or crash, send message to all admins/owner, about the crash
  //admins would have own team on discord where bot would get info about them
  const PREFIX = config.prefix
  const botname = 'Jorma'
  var version = '1.0.2';
  
  bot.on('ready', () =>{
	  console.log(botname, 'Bot online'); //after online, post when last online, with info of how long was online, coudl store data in txt file
	  bot.channels.cache.get(config.channel).send("`YO`");
	
	  const baseFile = 'command-base.js'
	  const commandBase = require(`./commands/${baseFile}`)
	
	  const readCommands = (dir) => {
		const files = fs.readdirSync(path.join(__dirname, dir))
		for (const file of files) {
		  const stat = fs.lstatSync(path.join(__dirname, dir, file))
		  if (stat.isDirectory()) {
			readCommands(path.join(dir, file))
		  } else if (file !== baseFile) {
			const option = require(path.join(__dirname, dir, file))
			commandBase(client, option)
		  }
		}
	  }
	
	  readCommands('commands')
	});
	//console log when someone asks command, log the command and who asked
	
bot.on('uncaughtException', err => {
    console.error('There was an uncaught error', err)
    process.exit(1) //mandatory (as per the Node.js docs)
})

var text = fs.readFileSync("./dewords.txt").toString('utf-8');
var textByLine = text.split("\n");
var textByLine = text.split(" ");
const BannedWords = textByLine;
console.log(BannedWords);

bot.on('message', message=>{
	
    console.log(message.content)
	//Create bulk delete option for admins
    //make so i can send messages as jorma like from console or creating post request 
    //make so i can start, stop, restart jorma from remote
	
    //make another export that checks every message sent, if something deletes it

    if (BannedWords.some(word => message.toString().toLowerCase().includes(word))) {message.delete().catch(e => console.error("Couldn't delete message.")); message.reply(`Please do not swear.`)};
	
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;
	
	const args = message.content.slice(PREFIX.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();
	
	if (!bot.commands.has(command)) return;
	
	try {
		bot.commands.get(command).callback(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
	
});

bot.login(config.token);
