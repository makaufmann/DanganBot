const { Command } = require('discord.js-commando');
const _ = require('lodash'); 

class mukuruCommand extends Command{

    constructor(client){

        super( client, {
            name: '16th',
            memberName: '16th',
            aliases: ['16th'],
            group: 'sound',
            description: 'Mukuru Ikusaba the 16th student lying hidden somewhere within thi school',
            details: '16th',
            examples: ['==16th','==16th'],
            throttling: {
                duration: 90,
                usages: 2 
            }
        })

    }

    run(msg){
        var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./mukuro.mp3') ;
            dispatcher.on("end", end => {
                voiceChannel.leave();
            });
        }).catch(err => console.log(err));
    }
}

module.exports = mukuruCommand