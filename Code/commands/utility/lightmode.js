module.exports = {
    name: 'lightmode',
    description: 'Turns on Pain/Light Mode',
    category: 'utility',
    aliases: ['light'],
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        client.setting.setTheme('light')
    }
}