const beautify = require('beautify')

module.exports = {
    name: 'js',
    description: 'Executes javascript. This is obviously locked to only you. Should ONLY be used if you know js.',
    category: 'dev',
    aliases: ['javascript'],
    args: '<code>',
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {
            msg.channel.send('```diff\n- You do not have permission to do that. Nice try.\n```')
            return
        }
        
        let code = args.join(' ')

        if(code.toLowerCase().includes('token')) {
            msg.channel.send('```diff\n- You cannot have the word \'token\' in code for safety reasons.\n```')
            return
        }

        if(code == '') {
            msg.channel.send('```diff\n- You cannot execute blank code.\n```')
            return
        }

        try {
            msg.channel.send(`\`Code:\`
\`\`\`js
${beautify(code, { format: 'js' })}
\`\`\`

\`Output:\`
\`\`\`
${eval(code)}
\`\`\``)
        } catch(e) {
            msg.channel.send(`\`Code:\`
\`\`\`js
${beautify(code, { format: 'js' })}
\`\`\`

\`Output:\`
\`\`\`
${e}
\`\`\``)
        }
    }
}