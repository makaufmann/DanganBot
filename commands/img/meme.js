const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class memeCommand extends Command{

    constructor(client){

        super( client, {
            name: 'meme',
            memberName: 'meme',
            aliases: ['me'],
            group: 'img',
            description: 'Responds with a random meme.',
            details: 'The traditional random meme.',
            examples: ['==Meme','==me']
        })

    }

    run(msg){
        let rand = _.random(1, 66);
        
        return msg.channel.send({
            file: './images/memes/meme_' + rand + '.png'
        });
    }

}

module.exports = memeCommand