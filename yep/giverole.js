module.exports = {
    commands: 'giverole',
    minArgs: 2,
    excpectedArgs: "<Target user's @> <the role name>",
    permissions: "ADMINISTRATOR",
    callback: (message, arguments) => {
        const targetUser = message.mentions.users.first()
        if (!targetUser) {
            message.reply('Please sepecify someone to give role to')
            return
        }
        arguments.shift()

        const roleName = arguments.join('')
        const { guild } = message

        const role = guild.roles.cache.find((role) => {
            return role.name === roleName
        }) 
        if (!role) {
            message.reply(`There is no role with the name "${roleName} `)
            return
        }
        console.log('Made it this far')
        const member = guild.members.cache.get(targetUser.id)
        console.log(member)
    }
}