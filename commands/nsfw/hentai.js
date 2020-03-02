const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class hentaiCommand extends Command{

    constructor(client){

        super( client, {
            name: 'hentai',
            memberName: 'hentai',
            aliases: ['hent'],
            group: 'nsfw',
            description: 'Sends you a random hentai.',
            details: 'The traditional hentai.',
            examples: ['==hentai','==hent']
        })

    }

    run(msg){
        let rand = _.random(1, 303102);
        msg.author.send('https://www.nhentai.net/g/' + rand + '/');
    }
}

module.exports = hentaiCommand