const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class murderCommand extends Command{

    constructor(client){

        super( client, {
            name: 'murder',
            memberName: 'murder',
            aliases: ['mrd'],
            group: 'random',
            description: 'A random cast-member will murder another random cast-member.',
            details: 'The traditional murder.',
            examples: ['==murder','==mrd']
        })

    }

    run(msg){
        let rawcast = fs.readFileSync('./jsons/killing_game/cast.json');
        let cast = JSON.parse(rawcast);

        let rawweapons = fs.readFileSync('./jsons/killing_game/weapons.json');
        let weapons = JSON.parse(rawweapons);

        let randv = _.random(0, cast.length - 1);
        let randc = _.random(0, cast.length - 1);
        let randw = _.random(0, weapons.length - 1);

        return msg.channel.send(cast[randv].name + ' was killed by ' + cast[randc].name + ' with/by ' + weapons[randw].name);
    }
}

module.exports = murderCommand