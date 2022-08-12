const canvacord = require('canvacord')

module.exports = {
    name: 'rainbow',
    description: 'ITS NOT A FLAG ISTG',
    category: 'image',
    aliases: ['rbw'],
    args: '(@user)',
    deletes: true,
    async execute(msg, args, client) {
        msg.delete()
        const user = msg.mentions.users.first() || msg.author
        const avatar = await user.displayAvatarURL({ format: 'png', dynamic: false })
        if(!avatar)
            return msg.channel.send('```diff\n- Avatar not found.\n```')
        let image = await canvacord.Canvas.rainbow(avatar)
        msg.channel.send({ files: [{
            attachment: image,
            name: 'rainbow.png',
            description: 'Someone is Rainbow'
        }]})
    }
}