module.exports = {
    name: 'anim',
    description: 'Text is required on some animations, on others it will do nothing.',
    category: 'non-listed',
    args: '<anim> (text)',
    deletes: true,
    async execute(msg, args, client) {
        if(args[0] == 'midnight') {
            msg.edit('M')
            await sleep(1000)
            msg.edit('Mi')
            await sleep(1000)
            msg.edit('Mid')
            await sleep(1000)
            msg.edit('Midn')
            await sleep(1000)
            msg.edit('Midni')
            await sleep(1000)
            msg.edit('Midnig')
            await sleep(1000)
            msg.edit('Midnigh')
            await sleep(1000)
            msg.edit('Midnight')
        } else if(args[0] == 'slide') {
            args.shift()
            let slideText = args.join(' ')
            for(let i = 0; i < slideText.length; i++) {
                msg.edit(slideText.slice(0, i+1))
                await sleep(1000)
            }
        } else if(args[0] == 'abc') {
            for(let i = 0; i < alphabet.length; i++) {
                msg.edit(alphabet[i])
                await sleep(2000)
            }
        } else if(args[0] == 'from10') {
            for(let i = 10; i > -1; i -= 1) {
                msg.edit(String(i))
                await sleep(1000)
            }
        } else if(args[0] == 'bomb') {
            msg.edit('💣-------🔥')
            await sleep(1000)
            msg.edit('💣------🔥')
            await sleep(1000)
            msg.edit('💣-----🔥')
            await sleep(1000)
            msg.edit('💣----🔥')
            await sleep(1000)
            msg.edit('💣---🔥')
            await sleep(1000)
            msg.edit('💣--🔥')
            await sleep(1000)
            msg.edit('💣-🔥')
            await sleep(1000)
            msg.edit('🏵️')
        } else if(args[0] == 'spinner') {
            args.shift()
            let text = args.join(' ')
            for(let i = 0; i < 3; i++) {
                msg.edit(`[|] ${text}`)
                await sleep(2000)
                msg.edit(`[/] ${text}`)
                await sleep(2000)
                msg.edit(`[-] ${text}`)
                await sleep(2000)
                msg.edit(`[\\\\] ${text}`)
                await sleep(2000)
            }
            msg.edit(text)
        } else if(args[0] == 'loading') {
            msg.edit('[                    ]')
            await sleep(2000)
            msg.edit('[o                  ]')
            await sleep(2000)
            msg.edit('[oo                ]')
            await sleep(2000)
            msg.edit('[ooo              ]')
            await sleep(2000)
            msg.edit('[oooo            ]')
            await sleep(2000)
            msg.edit('[ooooo          ]')
            await sleep(2000)
            msg.edit('[oooooo        ]')
            await sleep(2000)
            msg.edit('[ooooooo      ]')
            await sleep(2000)
            msg.edit('[oooooooo    ]')
            await sleep(2000)
            msg.edit('[ooooooooo  ]')
            await sleep(2000)
            msg.edit('[oooooooooo]')
            await sleep(2000)
            msg.edit('[oo  Done  oo]')
            await sleep(2000)
            msg.edit('[o    Done    o]')
            await sleep(2000)
            msg.edit('[      Done      ]')
        } else if(args[0] == 'wave') {
            for(let i = 0; i < 5; i++) {
                msg.edit('o/')
                await sleep(1000)
                msg.edit('o|')
                await sleep(1000)
            }
        }
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}