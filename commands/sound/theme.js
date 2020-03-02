const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class themeCommand extends Command{

    constructor(client){

        super( client, {
            name: 'theme',
            memberName: 'theme',
            aliases: ['t'],
            group: 'sound',
            description: 'Joins you and play the Danganronpa-Theme',
            details: 'The traditional Danganronpa-Theme.',
            examples: ['==theme','==t'],
            throttling: {
                duration: 90,
                usages: 2 
            }
        })

    }

    run(msg){
        var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./theme.wav') ;
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = themeCommand