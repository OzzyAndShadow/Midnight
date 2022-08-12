var config = require('../../config.json')

module.exports = {
    name: 'prefix',
    description: 'Sets the prefix',
    category: 'utility',
    args: '<prefix>',
    deletes: false,
    execute(msg, args, client, auth) {
        if(msg.author !== client.user) {permDenied(msg); return}
        p = args[0]
        newjson = {
            "token": config.token,
            "key": auth.key,
            "prefix": p
        }
        require('fs').writeFile('./Code/config.json', JSON.stringify(newjson,null,4), (error) => {
            if (error) {
                throw error;
            }
        });
        client.prefix = p
        msg.channel.send(`\`\`\`ini
[Prefix] set to [${client.prefix}]
\`\`\``)
    }
}