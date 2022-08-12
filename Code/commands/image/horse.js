module.exports = {
    name: 'horse',
    description: 'Why did I make this??',
    category: 'image',
    aliases: ['outofcontexthorse','outofcontxthorse'],
    deletes: false,
    async execute(msg, args, client) {
        msg.channel.send('https://tenor.com/view/horse-smile-hungry-feed-me-gif-10862144')
    }
}