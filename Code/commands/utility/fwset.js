module.exports = {
    name: 'fwset',
    description: 'Sets the forward to the latest message',
    category: 'utility',
    aliases: ['forwardset'],
    deletes: true,
    execute(msg, args, client) {
        msg.delete().then(() => {
            msg.channel.messages.fetch({ limit: 1 }).then(messages => {
                let lastMessage = messages.first();
                fwmsg = `>>> \`FW: Message from ${lastMessage.author.tag}\`\n> ${lastMessage.content}`
            })
        })
    }
}