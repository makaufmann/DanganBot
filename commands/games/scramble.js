const { Command } = require('discord.js-commando');
const _ = require('lodash'); 
const fs = require('fs');

class scrambleCommand extends Command{

    constructor(client){

        super( client, {
            name: 'scramble',
            memberName: 'scramble',
            aliases: ['scramble'],
            group: 'games',
            description: 'A funny word riddle! The first to guess the word wins!',
            details: 'scramble',
            examples: ['==scramble','==scramble']
        })

    }

    async run(msg){

        const filter = m => m.author.id != '681422748903669851';

        let rawcast = fs.readFileSync('./jsons/killing_game/cast.json');
        let cast = JSON.parse(rawcast);
        let rand = _.random(0, cast.length - 1);
        var riddle = cast[rand].name.split('').sort(function(){return 0.5-Math.random()}).join('');

        msg.say('The riddle is:\n' + riddle + '\n You have 60 seconds to solve it...');
    
        try {
            msg.channel.awaitMessages(filter, {time: 10000}).then(collected => {
                for(let i=0; i <= collected.length; i++) {
                    if(true) {
                        console.log(collected[i].content);
                        //return msg.say('The winner is:\n' + collected.author + 'The word was:\n' + cast[rand].name);
                        //collected.content.includes(cast[rand].name)
                    }
                    else {
                        return msg.say('Nobody guessed the word!\nThe word was:\n' + cast[rand].name);
                    }
                }
            }).catch(err => {
                console.log(err)
            });

        }
        finally {
            console.log('done');
        }
    }

}

module.exports = scrambleCommand