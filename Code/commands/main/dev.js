module.exports = {
    name: 'dev',
    description: 'Lists commands that should only be used by people who know how to code.',
    category: 'main',
    aliases: ['development','developer'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(`\`\`\`ini
[ Midnight ]
<> Required
() Optional

${client.commands.filter(cmd => cmd.category === 'dev').map(cmd => `[ ${client.prefix}${cmd.name} ${cmd.args} ] ${cmd.description}`).join('\n')}
\`\`\``)
    }
}