const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class dmc2Command extends Command{

    constructor(client){

        super( client, {
            name: 'dmc2',
            memberName: 'dmc2',
            aliases: ['dmc2'],
            group: 'sound',
            description: 'Plae dmc 2 is baest gaem PL;S',
            details: 'dmc2',
            examples: ['==dmc2','==dmc2'],
            throttling: {
                duration: 90,
                usages: 2 
            }
        })

    }

    run(msg){
        var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./dmc2.wav') ;
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = dmc2Command