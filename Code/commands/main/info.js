module.exports = {
    name: 'info',
    description: 'Gives info about Midnight',
    category: 'main',
    aliases: ['information'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(`\`\`\`ini
[ Midnight ]

[ Version ] Running Midnight Self Bot [ v2.0 ]
[ Ping ] ${Math.round((Date.now() - msg.createdTimestamp)/100)}ms
[ API Ping ] ${Math.round(client.ws.ping)}ms
\`\`\``)
    }
}