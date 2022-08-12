module.exports = {
    name: 'spam',
    description: 'Spams msg x times, delay is in seconds',
    category: 'abusive',
    args: '<x> <delay> <msg>',
    deletes: true,
    async execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        msg.delete()
        const n = args.shift()
        const del = args.shift()
        const m = args.join(' ')
        for(let i = 0; i < n; i++) {
            msg.channel.send(m)
            await sleep(del*1000)
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}