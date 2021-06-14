module.exports = {
    name: "ban",
    MODcommand: true,
    exprectedArgs: "<Target user's @>",
    premissions: 'Administrator',
    callback: (message) => {

    
        if (message.member.hasPermission("BAN_MEMBERS")) {
            if (message.mentions.users.first()) {
                try {
                    message.mentions.users.first().ban();
                } catch {
                    message.reply("I do not have permissions to ban" + message.mentions.users.first());
                }
            } else {
                message.reply("You do not have permissions to ban" + message.mentions.users.first());
            }
        }
    }
}