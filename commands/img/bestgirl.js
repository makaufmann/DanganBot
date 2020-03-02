const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class bgirlCommand extends Command{

    constructor(client){

        super( client, {
            name: 'bestgirl',
            memberName: 'bestgirl',
            aliases: ['g'],
            group: 'img',
            description: 'Responds with the randomly generated best girl.',
            details: 'The traditional random waifu.',
            examples: ['==Bestgirl','==g']
        })

    }

    run(msg){
        let rawdata = fs.readFileSync('./jsons/fcharacters.json');
        let grills = JSON.parse(rawdata);
        let rand = _.random(0, grills.length-1);
        
        return msg.reply(grills[rand].name, {
            file: grills[rand].pic
        });     
    }

}

module.exports = bgirlCommand