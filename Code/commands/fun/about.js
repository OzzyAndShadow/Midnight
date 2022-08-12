module.exports = {
    name: 'about',
    description: 'Shows some info about the mentioned user',
    category: 'fun',
    aliases: ['aboutme','aboutyou','who','whois'],
    args: '<@user>',
    execute(msg, args, client) {
        const user = msg.mentions.users.first()
        if(user.roles) {
            msg.channel.send(`\`\`\`ini
[ Midnight User Info ]

[ Tag ] ${user.tag}
[ Id ] ${user.id}
[ Nick-Name ] ${user.displayName == null ? 'None' : user.displayName}
[ Join Date ] ${String(user.createdAt).split(' ').slice(0,4).join(' ')}

[ Roles ]
${user.roles.join('\n')}
\`\`\``)
            return
        }
        msg.channel.send(`\`\`\`ini
[ Midnight User Info ]

[ Tag ] ${user.tag}
[ Id ] ${user.id}
[ Nick-Name ] ${user.displayName == null ? 'None' : user.displayName}
[ Join Date ] ${String(user.createdAt).split(' ').slice(0,4).join(' ')}
\`\`\``)
    }
}