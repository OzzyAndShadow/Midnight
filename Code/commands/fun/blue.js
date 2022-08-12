module.exports = {
    name: 'blue',
    description: 'Sends a blue colored message',
    category: 'color',
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        let m = args.join(' ')
        msg.delete()
        msg.channel.send(`\`\`\`md\n# ${m}\n\`\`\``)
    }
}