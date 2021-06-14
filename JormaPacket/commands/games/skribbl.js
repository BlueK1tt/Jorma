module.exports = {
    name: 'scribbl',
    description: "Gives out specified website",
    callback(message, args){
        message.channel.send('https://skribbl.io/');
        console.log(`${args}`, message.author.username)
    }
}