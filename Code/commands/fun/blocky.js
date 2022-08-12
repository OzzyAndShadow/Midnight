module.exports = {
    name: 'blocky',
    description: 'Turns blocky characters on/off',
    category: 'fun',
    aliases: ['block'],
    args: '<on|off>',
    deletes: true,
    execute(msg, args, client) {
        if(args[0] == 'on') {
            client.blocky = true
        } else if(args[0] == 'off') {
            client.blocky = false
        }
        if(msg.author == client.user) {
            msg.delete()
        }
    }
}