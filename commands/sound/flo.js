const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class dmc2Command extends Command{

    constructor(client){

        super( client, {
            name: 'flo',
            memberName: 'flo',
            aliases: ['flo'],
            group: 'sound',
            description: 'beste 5€ mikrofon diese',
            details: 'flo',
            examples: ['==flo','==flo'],
            throttling: {
                duration: 90,
                usages: 2 
            }
        })

    }

    run(msg){
        var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./flo.mp3') ;
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = dmc2Command