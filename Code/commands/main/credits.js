module.exports = {
    name: 'credits',
    description: 'Shows the credits',
    category: 'main',
    aliases: ['creds'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send('```ini\n[Ozzy] Made the bot\n```')
    }
}