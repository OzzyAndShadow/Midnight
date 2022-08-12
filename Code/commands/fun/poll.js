module.exports = {
    name: 'poll',
    description: 'Makes a poll.',
    category: 'fun',
    args: '<t/f> <question> *OR* [<1>] [<2>] [<3 .. 9>] *OR* [q:<Question>] [<1>] [<2>] [<3 .. 9>]',
    deletes: true,
    async execute(msg, args, client) {
        if(args[0].toLowerCase() == 't/f') {
            if(msg.author == client.user) {
                msg.delete()
            }
            args.shift()
            const message = await msg.channel.send(args.join(' '))
            message.react('✅')
            message.react('❌')
        } else {
            if(msg.author == client.user) {
                msg.delete()
            }
            msgCon = msg.content.replace(`${prefix}poll `, '')
            let isq = false
            if(args[0].toLowerCase().startsWith('[q:')) {
                mes = `> ${msgCon.substring(3,msgCon.indexOf(']'))}\n\n`
                msgCon = msgCon.replace(msgCon.substring(3,msgCon.indexOf(']')))
                isq = true
            } else {
                mes = ''
            }
            let ques = msgCon.split(' ')
            if(isq) {ques.shift()}
            ques = ques.join(' ').split('] [')
            ques[0] = ques[0].replace('[', '')
            ques[ques.length-1] = ques[ques.length-1].replace(']', '')
            for(let i = 0; i < ques.length; i++) {
                mes += `${emojiNum[i+1]} ${ques[i]}`
                mes += '\n'
            }
            const message = await msg.channel.send(mes)
            for(let j = 0; j < ques.length; j++) {
                message.react(emojiNum[j+1])
            }
        }
    }
}