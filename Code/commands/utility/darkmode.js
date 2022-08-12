module.exports = {
    name: 'darkmode',
    description: 'Turns on Dark Mode',
    category: 'utility',
    aliases: ['dark'],
    deletes: false,
    execute(msg, args, client) {
        if(msg.author !== client.user) {permDenied(msg); return}
        client.setting.setTheme('dark')
    }
}