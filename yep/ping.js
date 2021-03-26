module.exports = {
    name: 'ping',
    description: "this is is a ping command!",
    excecute(message, args){
        message.channel.send('Pong!');
        console.log(`${args}`, message.author.username)
    }
}