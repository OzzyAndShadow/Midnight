module.exports = {
    name: 'cyan',
    description: 'Sends a cyan colored message',
    category: 'color',
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        let m = args.join(' ')
        msg.delete()
        msg.channel.send(`\`\`\`yaml\n${m}\n\`\`\``)
    }
}