module.exports = {
    name: 'setlayout',
    description: 'Sets the layout.',
    category: 'utility',
    aliases: ['layout'],
    args: '<normal|compact>',
    deletes: false,
    execute(msg, args, client) {
        if(args[0].toLowerCase() == 'compact') {
            client.setting.setDisplayCompactMode(true)
        } else if(args[0].toLowerCase() == 'normal') {
            client.setting.setDisplayCompactMode(false)
        }
    }
}