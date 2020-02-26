const Discord = require('discord.js');
const bot = new Discord.Client();
const _ = require('lodash'); 
const fs = require('fs');
const moment = require('moment');
var isReady = true;



const prefix = '!';

bot.login('NjgxNDIyNzQ4OTAzNjY5ODUx.XlY5RA.1GJxGLKc9eKX1X7_jAdHYPrVpEc');

/*

___________________COMMAND-TEMPALTE

bot.on('message', msg => {
    if(msg.content === prefix + 'commandname') {
    }
});

*/


bot.on('ready', () => {
    console.log('Ultimate Despair');
});

bot.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.reply('DESPAIR');
    }
});

bot.on('message', msg => {
    if(msg.content === prefix + 'help') {
    msg.channel.send('Hello! My name is DanganBot.\n My current version is V0.1\n I am currently able to react to the following commands:')
    msg.channel.send('!theme => joins the commands user and plays the Danganronpa theme\n!ping => responds with a secret message\n!random => responds wit your personal Despair-Number\n!bestgrill => responds with a random girl from the Danganronpa cast\n!monokuma => responds with Monokuma\n!monokub => responds with a random Monokub\n!time => responds with the current time\n!quote => responds with a random Danganronpa quote\n!meme => responds with a random Danganronpa meme')
    
    }
});




bot.on('message', msg => {
    if(msg.content === prefix + 'random') {
        var random = Math.floor(Math.random() * 20);
        
        msg.reply('your despair number is ' + random);
    }
});

bot.on('message', msg => {
    if(msg.content === prefix + 'bestgrill') {
        let grills = ['Junko', 'Kyoko', 'Celeste', 'Sayaka', 'Mukuro', 'Hina', 'Komaru', 'Peko', 'Sakura', 'Sonia', 'Toko', 'Akane', 'Chiaki', 'Hiyoko', 'Ibuki', 'Mahiru', 'Mikan', 'Kaede', 'Angie', 'Himiko', 'Kirumi', 'Maki', 'Miu', 'Tenko', 'Tsumugi'];
        let rand = _.random(0, grills.length-1);
        msg.reply(grills[rand]);
    }
});


bot.on('message', msg => {
    if(msg.content === prefix + 'monokuma') {
        msg.channel.send("Monokuma", {
            file: "./images/characters/monokuma.png"
        });
    }
});

bot.on('message', msg => {
    if(msg.content === prefix + 'monokub') {
        let rawdata = fs.readFileSync('./jsons/monokubs.json');
        let monokubs = JSON.parse(rawdata);
        let rand = _.random(0,4);
        msg.channel.send(monokubs[rand].name, {
            file: monokubs[rand].pic
        });
    }
});

bot.on('message', msg => {
    if(msg.content === prefix + 'time') {
        let time =  moment().format('LT');        
        if(time == "6:00 PM") {
            msg.channel.send('It is Danganronpa time!');
            msg.channel.send({
                file: "./images/characters/other/ball_monokuma.png"
            });
        }
        else{
            msg.channel.send('It is currently ' + time);
        }
    }
});



bot.on('message', msg => {
    if(msg.content === prefix + 'quote') {
        let rawquotes = fs.readFileSync('./jsons/quotes.json');
        let quotes = JSON.parse(rawquotes);
        let rand = _.random(0,quotes.length - 1);
        msg.channel.send(quotes[rand].text);
        msg.channel.send(quotes[rand].author);
    }
});



bot.on('message', msg => {
    if(msg.content === prefix + 'meme') {
        let rawmemes = fs.readFileSync('./jsons/memes.json');
        let memes = JSON.parse(rawmemes);
        let rand = _.random(0, memes.length - 1);
        console.log(rand);
        console.log(memes[rand]);
        msg.channel.send({
            file: memes[rand].file
        });
    }
});

bot.on('message', msg => {
    if(isReady && msg.content === prefix + 'theme') {
        isReady = false;
        var voiceChannel = msg.member.voiceChannel;
        voiceChannel.join().then(connection =>{
            const dispatcher = connection.playFile('./theme.wav') ;
            dispatcher.on("end", end => {
                voiceChannel.leave();
                isReady = true;
            });
        }).catch(err => console.log(err));

    }
});

bot.on('message', msg => {
    if(msg.content === 'Mein Sohn' && msg.author.username === 'GudShot') {
        msg.reply('Father <3');
    }
});

