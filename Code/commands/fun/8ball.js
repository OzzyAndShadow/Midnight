module.exports = {
    name: '8ball',
    description: 'Shakes an 8ball.',
    category: 'fun',
    aliases: ['eightball'],
    deletes: false,
    execute(msg, args, client) {
        const responses = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']
        const ran = Math.floor(Math.random() * responses.length)
        const response = responses[ran]
        if(ran > 9) {
            msg.channel.send(`\`\`\`diff${args[0] ? `\n${args.join(' ')}` : ''}\n- 🎱 ${response}\n\`\`\``)
        } else {
            msg.channel.send(`\`\`\`diff${args[0] ? `\n${args.join(' ')}` : ''}\n+ 🎱 ${response}\n\`\`\``)
        }
    }
}