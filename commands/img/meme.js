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
        let rawmemes = fs.readFileSync('./jsons/memes.json');
        let memes = JSON.parse(rawmemes);
        let rand = _.random(0, memes.length - 1);
        console.log(rand);
        console.log(memes[rand]);

        return msg.channel.send({
            file: memes[rand].file
        });
    }

}

module.exports = memeCommand