const Discord = require('discord.js');
const bot = new Discord.Client();
const _ = require('lodash'); 
const fs = require('fs');
const moment = require('moment');
var isReady = true;



const prefix = '!';

bot.login('');

/*

___________________COMMAND-TEMPALTE

    if(msg.content === prefix + 'commandname') {
    }

*/


bot.on('ready', () => {
    console.log('Ultimate Despair');
});

bot.on('message', msg => {
    if(msg.content === prefix + 'ping') {
        msg.reply('DESPAIR');
    }

    if(msg.content === prefix + 'help') {
        msg.channel.send('Hello! My name is DanganBot.\n My current version is V0.1\n I am currently able to react to the following commands:')
        msg.channel.send('!theme => joins the commands user and plays the Danganronpa theme\n!ping => responds with a secret message\n!random => responds wit your personal Despair-Number\n!bestgrill => responds with a random girl from the Danganronpa cast\n!monokuma => responds with Monokuma\n!monokub => responds with a random Monokub\n!time => responds with the current time\n!quote => responds with a random Danganronpa quote\n!meme => responds with a random Danganronpa meme\n!hentai => sends you a random hentai owo\n!murder => a random castmember will murder another random castmemeber with a random weapon and Makoto will say something stupid and dumb')
        
        }

    if(msg.content === prefix + 'random') {
        var random = Math.floor(Math.random() * 20);
        
        msg.reply('your despair number is ' + random);
    }

    if(msg.content === prefix + 'bestgrill') {
        let rawdata = fs.readFileSync('./jsons/fcharacters.json');
        let grills = JSON.parse(rawdata);
        let rand = _.random(0, grills.length-1);
        msg.reply(grills[rand].name, {
            file: grills[rand].pic
        });
    }

    if(msg.content === prefix + 'monokuma') {
        msg.channel.send("Monokuma", {
            file: "./images/characters/monokuma.png"
        });
    }

    if(msg.content === prefix + 'monokub') {
        let rawdata = fs.readFileSync('./jsons/monokubs.json');
        let monokubs = JSON.parse(rawdata);
        let rand = _.random(0,4);
        msg.channel.send(monokubs[rand].name, {
            file: monokubs[rand].pic
        });
    }

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

    if(msg.content === prefix + 'quote') {
        let rawquotes = fs.readFileSync('./jsons/quotes.json');
        let quotes = JSON.parse(rawquotes);
        let rand = _.random(0,quotes.length - 1);
        msg.channel.send(quotes[rand].text);
        msg.channel.send(quotes[rand].author);
    }

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

    if(msg.content === 'Mein Sohn' && msg.author.username === 'GudShot') {
        msg.reply('Father <3');
    }

    if(msg.content === prefix + 'hentai') {
        let rand = _.random(1, 303102);
        msg.channel.send('https://www.nhentai.net/g/' + rand + '/');
    }

    if(msg.content === prefix + 'murder') {
        let rawcast = fs.readFileSync('./jsons/killing_game/cast.json');
        let cast = JSON.parse(rawcast);

        let rawweapons = fs.readFileSync('./jsons/killing_game/weapons.json');
        let weapons = JSON.parse(rawweapons);

        let randv = _.random(0, cast.length - 1);
        let randc = _.random(0, cast.length - 1);
        let randw = _.random(0, weapons.length - 1);

        msg.channel.send(cast[randv].name + ' was killed by ' + cast[randc].name + ' with/by ' + weapons[randw].name);

        msg.channel.send('There is no way another murder would happen. Right?\n-Makoto');
    }


});
