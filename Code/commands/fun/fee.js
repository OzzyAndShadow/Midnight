module.exports = {
    name: 'fee',
    description: 'Turns the fee automated message on or off *OR* Whitelists/Blacklists someone from the message.\nSends a message to people who aren\'t whitelisted. 100% can get you banned. Use at your own risk.',
    category: 'abusive',
    args: '<on|off> *OR* <whitelist|blacklist> <user id>',
    deletes: false,
    execute(msg, args, client) {
        if(args[0] == 'on') {
            msg.channel.send('```diff\n+ Fee enabled\n```')
            client.fee = true
        } else if(args[0] == 'off') {
            msg.channel.send('```diff\n- Fee disabled\n```')
            client.fee = false
        } else if(args[0] == 'whitelist') {
            msg.channel.send(`\`\`\`diff\n+ Whitelisted ${args[1]}\n\`\`\``)
            whitelistedPeople.push(args[1])
            fs.writeFile('../whitelist.json', JSON.stringify(whitelistedPeople), (error) => {
                if (error) {
                    throw error;
                }
            });
        } else if(args[0] == 'blacklist') {
            msg.channel.send(`\`\`\`diff\n- Blacklisted ${args[1]}\n\`\`\``)
            let index = whitelistedPeople.indexOf(args[1])
            if(index > -1) {
                whitelistedPeople.splice(index,1)
            }
            fs.writeFile('../whitelist.json', JSON.stringify(whitelistedPeople), (error) => {
                if (error) {
                    throw error;
                }
            })
        }
    }
}