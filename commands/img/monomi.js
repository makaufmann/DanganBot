const { Command } = require('discord.js-commando')

class monomiCommand extends Command{

    constructor(client){

        super( client, {
            name: 'monomi',
            memberName: 'monomi',
            aliases: ['mo'],
            group: 'img',
            description: 'Responds with "Monomi".',
            details: 'The traditional Monomi.',
            examples: ['==Monomi','==mo']
        })

    }

    run(msg){
        return msg.reply({
            file: "./images/characters/monomi.png"
        })
    }

}

module.exports = monomiCommand