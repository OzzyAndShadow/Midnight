module.exports = {
    name: 'qreact',
    description: 'Reacts to the latest message in the channel with msg. Duped letters are avoided.',
    category: 'fun',
    aliases: ['qr','quickr'],
    args: '<msg>',
    deletes: true,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        let reactions = []
        let t = args[0].replace(' ', '').split('')
        for(let i = 0; i < t.length; i++) {
            if(t[i] == 'n' && t[i+1] == 'g') {
                reactions[i] = '🆖'
                t.splice(i+1,i+1)
            } else if(t[i] == 'v' && t[i+1] == 's') {
                reactions[i] = '🆚'
                t.splice(i+1,i+1)
            } else {
                reactions[i] = emojis[t[i].charCodeAt(0)-97]
            }
        }
        msg.delete()
            .then(() => {
                msg.channel.messages.fetch({ limit: 1 }).then(messages => {
                let lastMessage = messages.first();
            
                for(let emoji of reactions) {
                    lastMessage.react(emoji)
                }
            })
        })
          .catch(console.error);
    }
}