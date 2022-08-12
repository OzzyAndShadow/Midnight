module.exports = {
    name: 'clap',
    description: 'Puts a little clap in between each word.',
    category: 'fun',
    aliases: ['clapping'],
    args: '<on|off>',
    deletes: true,
    execute(msg, args, client) {
        if(args[0] == 'on') {
            client.clap = true
        } else if(args[0] == 'off') {
            client.clap = false
        }
        if(msg.author == client.user) {
            msg.delete()
        }
    }
}