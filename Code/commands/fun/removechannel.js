module.exports = {
    name: 'removechannel',
    description: 'Disables other people executing commands.',
    category: 'fun',
    aliases: ['nochannel','noc'],
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        client.globalChannel = ''
        msg.channel.send(`\`\`\`ini
[Channel] set to [${client.globalChannel}]
Other people can now do commands in this channel.
\`\`\``)
    }
}