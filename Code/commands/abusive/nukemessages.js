module.exports = {
    name: 'nukemessages',
    description: 'Nukes the messages in the channel.',
    category: 'abusive',
    aliases: ['nuke'],
    deletes: true,
    execute(msg, args, client) {
        let purgeHackText = '‎'

        for(let i = 0; i < 1998; i++) {
           purgeHackText += '\n'
        }
        purgeHackText += '‎'
        msg.delete()
        msg.channel.send('e')
        for(let i = 0; i < 3; i++) {
            msg.channel.send(purgeHackText)
        }
    }
}