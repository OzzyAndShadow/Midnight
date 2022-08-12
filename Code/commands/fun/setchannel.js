module.exports = {
    name: 'setchannel',
    description: 'Lets other people execute commands in the channel.',
    category: 'fun',
    aliases: ['setc'],
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        client.globalChannel = msg.channel.id
        msg.channel.send(`\`\`\`ini
[Channel] set to [${client.globalChannel}]
Other people can now do commands in this channel.
\`\`\``)
    }
}