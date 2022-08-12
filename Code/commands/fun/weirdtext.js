const replacements = {
    'H': '#',
    'B': '8',
    'A': '@',
    'E': '3',
    'I': '1',
    'O': '0',
    'S': '$',
    'G': '6',
    'Z': '2',
}

module.exports = {
    name: 'weirdtext',
    description: 'Makes the text weird.',
    category: 'fun',
    aliases: ['weirdtxt','weird'],
    args: '<text>',
    deletes: false,
    async execute(msg, args, client) {
        let con = String(args.join(' ').toUpperCase())
        let text

        for(var i in replacements) {
            text = con.replaceAll(i,replacements[i])
            con = text
        }
        msg.channel.send(`\`${text}\``)
    }
}