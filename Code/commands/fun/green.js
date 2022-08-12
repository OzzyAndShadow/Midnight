module.exports = {
    name: 'green',
    description: 'Sends a yellowish-green colored message',
    category: 'color',
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        let m = args.join(' ')
        msg.delete()
        msg.channel.send(`\`\`\`diff\n+ ${m}\n\`\`\``)
    }
}