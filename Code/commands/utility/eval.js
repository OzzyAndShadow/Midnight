const { evaluate } = require('mathjs')

module.exports = {
    name: 'eval',
    description: 'Calculates <exp>',
    category: 'utility',
    aliases: ['calc','calculate'],
    args: '<exp>',
    deletes: false,
    execute(msg, args, client) {
        strArgs = args.join('')
        evaledStr = String(evaluate(strArgs))
        msg.channel.send(`\`\`\`ini\n[ ${strArgs} ]\n${evaledStr}\n\`\`\``)
    }
}