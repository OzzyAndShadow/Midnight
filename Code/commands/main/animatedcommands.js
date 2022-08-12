const config = require('../../config.json')

module.exports = {
    name: 'animated',
    description: 'Lists the animated message commands.',
    category: 'main',
    deletes: false,
    execute(msg,args,client) {
        client.animations = `[ ${client.prefix}anim midnight ] Animates Midnight
[ ${client.prefix}anim slide ] <text>Shows the text one character at a time.
[ ${client.prefix}anim abc ] a b c d e f g ...
[ ${client.prefix}anim from10 ] counts down from 10
[ ${client.prefix}anim bomb ] Lights a bomb on fire (in dms of course)
[ ${client.prefix}anim spinner <text> ] Puts a spinner at the start of your message.
[ ${client.prefix}anim loading ] Shows a loading bar.
[ ${client.prefix}anim wave ] Waves to the channel!`
        msg.channel.send(`\`\`\`ini
[ Midnight ]
<> Required
() Optional

${client.animations}
\`\`\``)
    }
}