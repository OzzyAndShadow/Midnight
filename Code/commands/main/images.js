const config = require('../../config.json')

module.exports = {
    name: 'images',
    description: 'Lists the image commands.',
    category: 'main',
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(`\`\`\`ini
[ Midnight ]
<> Required
() Optional

${client.commands.filter(cmd => cmd.category === 'image').map(cmd => `[ ${client.prefix}${cmd.name} ${cmd.args} ] ${cmd.description}`).join('\n')}
\`\`\``)
    }
}