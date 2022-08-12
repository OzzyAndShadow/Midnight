const config = require('../../config.json')

module.exports = {
    name: 'help',
    description: 'Sends this message! If you choose to search, it will search the commands.',
    aliases: ['cmds', 'commands'],
    category: 'main',
    args: '(search)',
    deletes: false,
    execute(msg, args, client) {
        if(args[0]) {
            let m = '```ini\n[ Midnight ]\n<> Required\n() Optional\n\n'+client.commands.filter(cmd => cmd.name.includes(args[0])).map(cmd => `[ ${config.prefix}${cmd.name}${hasArgs(cmd.args)} ] ${cmd.description}`).join('\n')
            if(m.length > 1995)
                return msg.channel.send('```diff\n- Too many commands found. Please be more specific.\n```')
            if(m !== '```ini\n[ Midnight ]\n<> Required\n() Optional\n\n' && m.length < 1995)
                    msg.channel.send(`${m}\n\`\`\``)
            if(m == '```ini\n[ Midnight ]\n<> Required\n() Optional\n\n')
                msg.channel.send('```diff\n- Could not find command. Try again.\n```')
            return
        }
        let m = `\`\`\`ini
[ Midnight ]
<> Required
() Optional
        
${client.commands.filter(cmd => cmd.category === 'main').map(cmd => `[ ${client.prefix}${cmd.name}${hasArgs(cmd.args)} ] ${cmd.description}`).join('\n')}
\`\`\``
        msg.channel.send(m)
    }
}

function hasArgs(a) {
    if(a)
        return ` ${a}`
    if(!a)
        return ''
}