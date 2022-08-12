module.exports = {
    name: 'fwto',
    description: 'Forwards the message you set with fwset to the current channel.',
    category: 'utility',
    aliases: ['forwardto','fw'],
    deletes: true,
    execute(msg, args, client) {
        msg.delete()
        msg.channel.send(fwmsg)
    }
}