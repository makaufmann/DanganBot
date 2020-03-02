const Commando = require('discord.js-commando');
const path = require('path');
const token = '';

const client = new Commando.Client({
    owner: '',
    commandPrefix: '!',
    unknownCommandResponse: true
});

client.registry.registerDefaults().registerGroups([
    ['test', 'Starter Commands'],
    ['debug', 'DEBUG'],
    ['img', 'Images'],
    ['random', 'Random'],
    ['sound', 'Sound'],
    ['nsfw', 'NSFW']
]).registerCommandsIn(path.join(__dirname,"commands"));

client.on('ready' ,() =>{
    console.log('rdy');
});

client.login(token);

