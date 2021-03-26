module.exports = {
    name: 'document',
    description: "Gives the website for DC api",
    excecute(message, args){
        message.channel.send('https://discord.js.org/#/');
        console.log(`${args}`, message.author.username)
    }
}