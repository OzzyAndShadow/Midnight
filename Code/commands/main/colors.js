module.exports = {
    name: 'colors',
    description: 'Shows the color commands',
    category: 'main',
    aliases: ['color'],
    deletes: false,
    execute(msg, args, client) {
        msg.channel.send(`\`\`\`ini
        ${client.commands.filter(cmd => cmd.category === 'color').map(cmd => `[ ${client.prefix}${cmd.name} ${cmd.args} ] ${cmd.description}`).join('\n')}
\`\`\``)
    }
}