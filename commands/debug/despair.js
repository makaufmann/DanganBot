const { Command } = require('discord.js-commando')

class despairCommand extends Command{

    constructor(client){

        super( client, {
            name: 'despair',
            memberName: 'despair',
            aliases: ['d'],
            group: 'debug',
            description: 'Responds with "DESPAIR".',
            details: 'The traditional Despair.',
            examples: ['==despair','==d']
        })

    }

    run(msg){
        return msg.say('DESPAIR')
    }

}

module.exports = despairCommand