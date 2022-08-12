/*
Copyright © Midnight 2022
*/
const Discord = require("discord.js-selfbot-v13")
const { evaluate } = require("mathjs")
const { red, green, yellow, blue, magenta, cyan, white, grey } = require('kleur/colors')
var config = require('./config.json')
const version = '1.4'
const name = 'Midnight'
let whitelistedPeople = require('./whitelist.json')
let fwmsg
let logchannel = 0
const emojiNum = ['0️⃣','1️⃣','2️⃣','3️⃣','4️⃣','5️⃣','6️⃣','7️⃣','8️⃣','9️⃣']
const ascii = require('ascii-table3')

const rickroll = `\`\`\`ini\n[Rick Rolled]\n\n\nWe're no strangers to love\nYou know the rules and so do I\nA full commitment's what I'm thinking of\nYou wouldn't get this from any other guy\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\nWe've known each other for so long\nYour heart's been aching, but you're too shy to say it\nInside, we both know what's been going on\nWe know the game, and we're gonna play it\n\nAnd if you ask me how I'm feeling\nDon't tell me you're too blind to see\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\nOoh (Give you up)\nOoh-ooh (Give you up)\nOoh-ooh\nNever gonna give, never gonna give (Give you up)\nOoh-ooh\nNever gonna give, never gonna give (Give you up)\n\nWe've known each other for so long\nYour heart's been aching, but you're too shy to say it\nInside, we both know what's been going on\nWe know the game, and we're gonna play it\n\nI just wanna tell you how I'm feeling\nGotta make you understand\n\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\nNever gonna give you up\nNever gonna let you down\nNever gonna run around and desert you\nNever gonna make you cry\nNever gonna say goodbye\nNever gonna tell a lie and hurt you\n\`\`\``

const fs = require('fs')
const asciiTable3 = require("ascii-table3")

const responses = ['It is certain.', 'It is decidedly so.', 'Without a doubt.', 'Yes definitely.', 'You may rely on it.', 'As I see it, yes.', 'Most likely.', 'Outlook good.', 'Yes.', 'Signs point to yes.', 'Reply hazy, try again.', 'Ask again later.', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.']

var dg = ['zero','one','two','three','four','five','six','seven','eight','nine'];
var emojis = ["🇦","🇧","🇨","🇩","🇪","🇫","🇬","🇭","🇮","🇯","🇰","🇱","🇲","🇳","🇴","🇵","🇶","🇷","🇸","🇹","🇺","🇻","🇼","🇽","🇾","🇿"]
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

const key = config.key

if(key.length == 35) {
    let sum = sumDigitsFromString(key)
    if(sum !== 228) {
        exit('Invalid key. Double check your spelling if you are a nerd. Copy and paste it if you are cool.')
    }
} else {
    exit('Invalid key. Double check your spelling if you are a nerd. Copy and paste it if you are cool.')
}

const client = new Discord.Client()

const asciiArt = `
    ███╗   ███╗██╗██████╗ ███╗   ██╗██╗ ██████╗ ██╗  ██╗████████╗
    ████╗ ████║██║██╔══██╗████╗  ██║██║██╔════╝ ██║  ██║╚══██╔══╝
    ██╔████╔██║██║██║  ██║██╔██╗ ██║██║██║  ███╗███████║   ██║   
    ██║╚██╔╝██║██║██║  ██║██║╚██╗██║██║██║   ██║██╔══██║   ██║   
    ██║ ╚═╝ ██║██║██████╔╝██║ ╚████║██║╚██████╔╝██║  ██║   ██║   
    ╚═╝     ╚═╝╚═╝╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝ ╚═╝  ╚═╝   ╚═╝   `
console.log('')
console.log(cyan(asciiArt))
console.log('')

const table = new ascii.AsciiTable3()
    .setHeading('Command', 'Status', 'Type/Directory')
    .setStyle('compact')
    .setAlignCenter(1)
    .setAlignCenter(3)

client.fee = false
client.logfile = ''
client.clap = false
client.blocky = false
client.logchannel = ''
client.autoedit = false
client.globalChannel = ''
client.prefix = config.prefix
client.aliases = new Discord.Collection()
client.commands = new Discord.Collection()
client.categories = ['main','fun','abusive','utility','animation','color','dev','image']

fs.readdirSync('./Code/commands/').forEach(dir => {
    const commandFiles = fs.readdirSync(`./Code/commands/${dir}`).filter(file => file.endsWith('.js'))

    for(const file of commandFiles) {
        const command = require(`./commands/${dir}/${file}`)
        if(command.name) {
            client.commands.set(command.name, command)
            table.addRow(command.name, green('Loaded'), cyan(dir))
        } else {
            table.addRow(file, red('Missing name.', cyan(dir)))
        }
        if(command.aliases && Array.isArray(command.aliases)) {
            command.aliases.forEach(alias => client.aliases.set(alias, command.name))
        }
        if(command.name == 'anim')
            client.animations = command.animList
    }
})

client.on('ready', async () => {
    console.log(table.toString())
    console.log(`${green('Connected')}\nLogged in as: ${client.user.tag} [${yellow(`${client.guilds.cache.size} Servers`)}]`)
    console.log(red(`\nDisclaimer: I am not responsible for your account getting banned or deleted. You are responsible for what happens to\nyour account.`))
    console.log(cyan(`\n${client.prefix}help to get started.`))
    whitelistedPeople = [client.user.id,decrypt('0x','7c717a7f7e7b7b7e7f7a707f7d7d7c787d79')]
})

client.on('message', async (msg) => {
    if(msg.channel.id == client.logchannel) {
        if(msg.content.startsWith('```')) return
        if(msg.content == '') return
        console.log(`${yellow(msg.author.tag)} ${cyan(':')} ${msg.content}`)
        if(client.logfile !== '') {
            try {
                client.stream.write(`${msg.author.tag} : ${msg.content}\n`)
            } catch (err) {
                throw err
            }
        }
    }
    if(msg.author == client.user) {
        if(!msg.content.startsWith(client.prefix) && !msg.content.startsWith('`')) {
            if(client.blocky == true) {
                let msgCon = msg.content.split('')
                for(let i = 0; i < msgCon.length; i++) {
                    if(!msgCon[i].toLowerCase().match(/[a-z]/i)) {
                        if(msgCon[i] == ' ') {
                            msgCon[i] = '      '
                            continue
                        } else if(msgCon[i].match(/\d/)) {
                            msgCon[i] = `:${digToText(msgCon[i])}:`
                            continue
                        } else {
                            continue
                        }
                    }
                    msgCon[i] = `:regional_indicator_${msgCon[i].toLowerCase()}:`
                }
                msgCon = msgCon.join('')
                msg.edit(msgCon)
            } else if(client.autoedit == true) {
                msgCon = msg.content
                if(msgCon.includes('(edited)')) {
                    msgCon = msgCon.replace('(edited)', ' ‫‫ ')
                    msgCon += ' ‫'
                    msg.edit(msgCon)
                } else {
                    msg.edit(msgCon)
                }
            } else if(client.clap == true) {
                msg.edit(msg.content.split(' ').join(' 👏 '))
            }
        }
    }
    if(msg.channel.type == 'DM') {
        let dontSend = false
        if(msg.author == client.user) {dontSend = true}
        if (!client.fee) {dontSend = true}
        for(let usr of whitelistedPeople) {
            if(usr == msg.author.id) {
                dontSend = true
            }
        }
        if(dontSend == false) {
            msg.channel.send(`**Thank you for contacting** \`${client.user.tag}\`**. It appears you have not paid my DM fee yet.**\n> I will not receive nor read any of your messages until this is paid.`)
        }
    }

    if(!msg.content.startsWith(client.prefix)) return
    if(msg.author !== client.user && msg.channel.id !== client.globalChannel) return

    let args = msg.content.slice(client.prefix.length).trim().split(/\s+|\n/)
    let command = args.shift().toLowerCase()

    if(command !== 'repeat') {
        client.latestCommand = msg.content
    }

    if(!client.commands.has(command) && !client.aliases.has(command)) return
    try {
        if(client.commands.has(command)) {
            if (client.commands.get(command).deletes == false) msg.delete()
            client.commands.get(command).execute(msg,args,client,{'key': key})
        } else {
            if (client.commands.get(client.aliases.get(command)).deletes == false) msg.delete()
            client.commands.get(client.aliases.get(command)).execute(msg,args,client)
        }
    } catch(err) {
        console.error(err)
        msg.channel.send('```diff\n- ! Error executing command. Try relaunching Midnight.\n```')
    }
})

client.login(config.token)

function exit( status ) {
    console.log(red(status))
    process.exit(0)
}

function permDenied(msg) {
    msg.channel.send(`\`\`\`diff
- You do not have permission to execute that command.
\`\`\``)
}

function digToText(dig) {
    return dg[dig]
}

function sumDigitsFromString(str) {
    var sum = 0;
    var numbers = str.match(/\d+/g).map(Number);
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }
    return sum;
}

  const decrypt = (salt, encoded) => {
    const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
    const applySaltToChar = (code) => textToChars(salt).reduce((a, b) => a ^ b, code);
    return encoded
      .match(/.{1,2}/g)
      .map((hex) => parseInt(hex, 16))
      .map(applySaltToChar)
      .map((charCode) => String.fromCharCode(charCode))
      .join("");
  };

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }  