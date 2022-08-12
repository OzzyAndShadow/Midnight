module.exports = {
    name: 'howtocookanegg',
    description: 'Lists all 59 ways to cook an egg. ;)',
    category: 'fun',
    aliases: ['htcae'],
    args: '',
    deletes: true,
    execute(msg, args, client) {
        let howToCookAnEgg

        fs.readFile('./Code/assets/egg.txt', (err, data) => {
            if (err) throw err;
            howToCookAnEgg = data
        });
        msg.delete().then(() => {
            for(let m of howToCookAnEgg.match(/.{1,2000}/g)) {
                msg.channel.send(m)
            }
        })
    }
}