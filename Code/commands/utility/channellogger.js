const fs = require('fs')

module.exports = {
    name: 'channellogger',
    description: 'Logs all the messages to the console. Optional file.',
    category: 'utility',
    aliases: ['channellog','clogger','clog'],
    args: '<on|off> (file name)',
    deletes: false,
    execute(msg, args, client) {
        if(args[0] == 'on') {
            msg.channel.send(`\`\`\`ini\n[ Midnight ]\nThis channel will now be logged. All messages here will be saved to the console.\n\`\`\``)
            client.logchannel = msg.channel.id
        } else if(args[0] == 'off') {
            msg.channel.send(`\`\`\`ini\n[ Midnight ]\nThis channel will no longer be logged. All messages that have been sent here have been saved to the console.\n\`\`\``)
            client.logchannel = 0
            client.logfile = ''
            try {
                if(client.stream) {
                    client.stream.end()
                }
            } catch(e) {
                if(e) throw e
            }
        }
        if(args[1]) {
            args.shift()
            client.logfile = String(args.join(' '))
            try {
                client.stream = fs.createWriteStream(`./Logs/${client.logfile}.txt`, {flags: 'a'})
            } catch(err) {
                throw err
            }
        }
    }
}