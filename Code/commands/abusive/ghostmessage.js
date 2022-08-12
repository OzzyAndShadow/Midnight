module.exports = {
    name: 'ghostmessage',
    description: 'Sends a message that deletes itself. A ghost message.',
    category: 'abusive',
    aliases: ['gm'],
    deletes: true,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        msg.delete()
    }
}