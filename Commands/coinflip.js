const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'coinflip',
    aliases: ['coin'],    
    description: 'Flips a coin!',
    execute (client, message, args, cmd, Discord) {
        const choices = ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new MessageEmbed()
        .setTitle("🟡 Coinflip!")
        .setColor("RANDOM")
        .setDescription(`You flipped a **${choice}**!`)
        message.channel.send(embed)
    }
}