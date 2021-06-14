module.exports = {
    id: 1,
    MODcommand: true,
    name: 'ping',
    description: "this is is a ping command!",
    callback(message, args, arguments){
        message.channel.send('Pong!');
        console.log(`${message}`,message.author.username)
    }
}