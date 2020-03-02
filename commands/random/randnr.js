const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class randnrCommand extends Command{

    constructor(client){

        super( client, {
            name: 'randnr',
            memberName: 'randnr',
            aliases: ['r'],
            group: 'random',
            description: 'Responds with your personal random Depsair-Number.',
            details: 'The traditional random number.',
            examples: ['==randnr','==r']
        })

    }

    run(msg){
        let randnr = _.random(0,100);

        return msg.channel.send('Your personal Despair-Number is ' + '```' + randnr + '```');
    }
}

module.exports = randnrCommand