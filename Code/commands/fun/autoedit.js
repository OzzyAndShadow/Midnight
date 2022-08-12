module.exports = {
    name: 'autoedit',
    description: 'Puts the little (edited) character at the end. Also replaces (edited) with the glitch.',
    category: 'fun',
    aliases: ['autoediting'],
    args: '<on|off>',
    deletes: true,
    execute(msg, args, client) {
        if(args[0] == 'on') {
            client.autoedit = true
        } else if(args[0] == 'off') {
            client.autoedit = false
        }
        if(msg.author == client.user) {
            msg.delete()
        }
    }
}