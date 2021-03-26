module.exports = {
    name: 'website',
    description: "Gives out specified website",
    excecute(message, args){
        message.channel.send('https://www.twitch.tv/michaelreeves/');
        console.log(`${args}`, message.author.username)
    }
}