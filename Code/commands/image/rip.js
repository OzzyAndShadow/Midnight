const canvacord = require('canvacord')

module.exports = {
    name: 'rip',
    description: 'F in the chat.',
    category: 'image',
    args: '(@user)',
    deletes: true,
    async execute(msg, args, client) {
        msg.delete()
        const user = msg.mentions.users.first() || msg.author
        const avatar = await user.displayAvatarURL({ format: 'png', dynamic: false })
        if(!avatar)
            return msg.channel.send('```diff\n- Avatar not found.\n```')
        let image = await canvacord.Canvas.rip(avatar)
        msg.channel.send({ files: [{
            attachment: image,
            name: 'jail.png',
            description: 'They do be in jail doe'
        }]})
    }
}