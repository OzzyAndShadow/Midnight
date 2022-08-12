const { LoremIpsum } = require("lorem-ipsum")

module.exports = {
    name: 'lorem',
    description: 'Generates some lorem. (Does NOT start with Lorem ipsum.)',
    category: 'fun',
    aliases: ['loremipsum'],
    args: '<num>',
    deletes: true,
    execute(msg, args, client) {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4
            },
            wordsPerSentence: {
                max: 16,
                min: 4
            }
        })
        msg.delete().then(() => {
            msg.channel.send(lorem.generateWords(parseInt(args[0])))
        })
    }
}