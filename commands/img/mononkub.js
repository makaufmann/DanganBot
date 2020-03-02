const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class monokubCommand extends Command{

    constructor(client){

        super( client, {
            name: 'monokub',
            memberName: 'monokub',
            aliases: ['mon'],
            group: 'img',
            description: 'Responds with a random Monokub.',
            details: 'The traditional random Monokub.',
            examples: ['==Monokub','==mon']
        })

    }

    run(msg){
        let rawdata = fs.readFileSync('./jsons/monokubs.json');
        let monokubs = JSON.parse(rawdata);
        let rand = _.random(0,4);
        
        return msg.channel.send(monokubs[rand].name, {
            file: monokubs[rand].pic
        });
    }
}

module.exports = monokubCommand