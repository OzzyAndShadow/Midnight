const config = require('../../config.json')

module.exports = {
    name: 'fun',
    description: 'Lists the fun commands.',
    category: 'main',
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(`\`\`\`ini
[ Midnight ]
<> Required
() Optional

${client.commands.filter(cmd => cmd.category === 'fun').map(cmd => `[ ${client.prefix}${cmd.name} ${cmd.args} ] ${cmd.description}`).join('\n')}
\`\`\``)
    }
}