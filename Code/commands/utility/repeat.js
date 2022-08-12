module.exports = {
    name: 'repeat',
    description: 'Repeats the last command you did (excluding repeat)',
    category: 'utility',
    aliases: ['r'],
    deletes: true,
    execute(msg, args, client) {
        msg.delete()
        msg.channel.send(client.latestCommand)
    }
}