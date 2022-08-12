module.exports = {
    name: 'yellow',
    description: 'Sends a yellow colored message',
    category: 'color',
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        let m = args.join(' ')
        msg.delete()
        msg.channel.send(`\`\`\`fix\n${m}\n\`\`\``)
    }
}