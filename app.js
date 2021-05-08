const Discord = require("discord.js");
require('dotenv').config();
const { MessageEmbed } = require("discord.js");
const client = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
//const token = require("./token.js");
const fs = require('fs');


//Command and Event handler
client.commands = new Discord.Collection();
client.events = new Discord.Collection();


//Bot initialization
client.on('ready', () =>{
    client.user.setActivity('e!help', { type: 'WATCHING'}).catch(console.error);
})


//Adding welcome role and welcome message
client.on('guildMemberAdd', guildMember =>{
    let memberRole = guildMember.guild.roles.cache.find(role => role.name === 'Member');
    let levelRole = guildMember.guild.roles.cache.find(role => role.name === 'Level 1 - Lord');
    guildMember.roles.add(memberRole);
    guildMember.roles.add(levelRole);    
    guildMember.guild.channels.cache.get('812535293252337744').send(`Welcome <@${guildMember.user.id}> to Emphorizer's server! Make sure to check out the <#812535484650881055> channel and have fun!`);
}); 




['command_handler', 'event_handler'].forEach(handler  =>{
    require(`./handlers/${handler}`)(client, Discord);
})


//Token login
client.login(process.env.DISCORD_TOKEN);



    
      



    



    

