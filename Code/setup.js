let fs = require('fs')

const args = process.argv.slice(2)
const token = args[0]
const key = args[1]
const prefix = args[2]

const conInfo = {
    'token': token,
    'key': key,
    'prefix': prefix,
}

fs.writeFileSync('Code/config.json', JSON.stringify(conInfo))

console.log('Run MidnightSelfBot.bat now, your settings have been saved.')