const { Command } = require('discord.js-commando')

class despairCommand extends Command{

    constructor(client){

        super( client, {
            name: 'sohn',
            memberName: 'sohn',
            aliases: ['so'],
            group: 'debug',
            description: '???',
            details: '???',
            examples: ['==sohn','==so']
        })

    }

    run(msg){
        if(msg.author.username === 'GudShot') {
            return msg.reply('Father <3');
        }
        else {
            return msg.reply('no');
        }
    }

}

module.exports = despairCommand