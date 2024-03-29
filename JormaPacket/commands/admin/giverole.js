module.exports = {
    name: 'giverole',
    MODcommand: true,
    minArgs: 2,
    expectedArgs: "<Target user's @> <The role name>",
    permissions: 'Administrator',
    callback: (message, arguments) => {
      console.log(message.content)
      const targetUser = message.mentions.users.first()
      if (!targetUser) {
        message.reply('Please specify someone to give a role to.')
        return
      }
      
      arguments.shift()
      arguments.shift()
      
      const roleName = arguments.join(" ")
      const { guild } = message
      
      const role = guild.roles.cache.find((role) => {
        return role.name === roleName
      })
      if (!role) {
        message.reply(`There is no role with the name "${roleName}"`)
        return
      }
      
      const member = guild.members.cache.get(targetUser.id)
      member.roles.add(role)
      message.reply(`"${targetUser}"now has the "${roleName}" role`)
    },
  }