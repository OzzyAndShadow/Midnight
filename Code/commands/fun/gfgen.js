module.exports = {
    name: 'gfgen',
    description: 'Links the repository for GFGen (joke)',
    category: 'fun',
    aliases: ['gfgenerator','girlfriendgen','girlfriendgenerator'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send('https://github.com/OzzyAndShadow/GFGenerator')
    }
}