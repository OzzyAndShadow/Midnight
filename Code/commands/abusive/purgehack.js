module.exports = {
    name: 'purgehack',
    description: 'Sends a blank ~2000 line message',
    category: 'abusive',
    aliases: ['purge'],
    deletes: true,
    execute(msg, args, client) {
        let purgeHackText = '‎'

        for(let i = 0; i < 1998; i++) {
           purgeHackText += '\n'
        }
        purgeHackText += '‎'
        if(msg.author !== client.user) {permDenied(msg); return}
        msg.delete()
        msg.channel.send('e')
        msg.channel.send(purgeHackText)
    }
}