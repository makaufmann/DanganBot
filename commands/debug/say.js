const { Command } = require('discord.js-commando')

class sayCommand extends Command{

    constructor(client){

        super( client, {
            name: 'say',
            memberName: 'say',
            aliases: ['say'],
            group: 'debug',
            description: 'say',
            details: 'say',
            examples: ['==say','==say']
        })

    }

    async run(msg){

        const filter = m => m.author.id === msg.author.id;

        msg.reply('Tell me what to say! \nThis expires in 20 seconds...').then(r => r.delete(20000));
    
        try {
            msg.channel.awaitMessages(filter, {max: 1, time: 20000}).then(collected => {
                let saycontent = collected.first().content;
                return msg.say(saycontent);
            }).catch(err => {
                console.log(err)
            });

        }
        finally {
            console.log('done');
        }
    }

}

module.exports = sayCommand