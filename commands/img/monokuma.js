const { Command } = require('discord.js-commando')

class monokumaCommand extends Command{

    constructor(client){

        super( client, {
            name: 'monokuma',
            memberName: 'monokuma',
            aliases: ['m'],
            group: 'img',
            description: 'Responds with "Monokuma".',
            details: 'The traditional Monokuma.',
            examples: ['==Monokuma','==m']
        })

    }

    run(msg){
        return msg.reply({
            file: "./images/characters/monokuma.png"
        })
    }

}

module.exports = monokumaCommand