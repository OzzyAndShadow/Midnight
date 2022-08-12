module.exports = {
    name: 'setstatus',
    description: 'Sets your status! (make sure to follow the args)',
    category: 'utility',
    aliases: ['setstat','status'],
    args: '<online|idle|dnd|invisible> <{emoji}|null> <status|bio>',
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        let sta = args.shift()
        let emoj = args.shift()
        client.setting.setCustomStatus({
            status: sta,
            emoji: emoj,
            text: args.join(' '),
            expires: null
        })
    }
}