module.exports = {
    name: 'orange',
    description: 'Sends a orange colored message',
    category: 'color',
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        let m = args.join(' ')
        msg.delete()
        msg.channel.send(`\`\`\`arm\n${m}\n\`\`\``)
    }
}