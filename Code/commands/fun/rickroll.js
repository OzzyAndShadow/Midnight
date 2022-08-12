module.exports = {
    name: 'rickroll',
    description: 'NEVER GONNA GIVE YOU UP',
    category: 'fun',
    aliases: ['rick'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(rickroll)
    }
}