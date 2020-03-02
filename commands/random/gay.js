const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class gayCommand extends Command{

    constructor(client){

        super( client, {
            name: 'gay',
            memberName: 'gay',
            aliases: ['gay'],
            group: 'random',
            description: 'Tests if you are gay.',
            details: 'The traditional gay tester.',
            examples: ['==gay','==gay']
        })

    }

    run(msg){
        let rand = _.random(0,1);
        if(rand == 0 || msg.author.username == 'SeDorn') {
            return msg.reply('You are gay 🏳️‍🌈');
        }
        else {
            return msg.reply('You are not gay')
        }
    }
}

module.exports = gayCommand