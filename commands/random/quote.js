const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class quoteCommand extends Command{

    constructor(client){

        super( client, {
            name: 'quote',
            memberName: 'quote',
            aliases: ['q'],
            group: 'random',
            description: 'Responds with a random quote.',
            details: 'The traditional random quote.',
            examples: ['==quote','==q']
        })

    }

    run(msg){
        let rawquotes = fs.readFileSync('./jsons/quotes.json');
        let quotes = JSON.parse(rawquotes);
        let rand = _.random(0,quotes.length - 1);

        return msg.channel.send(quotes[rand].text + '\n' + quotes[rand].author);
    }
}

module.exports = quoteCommand