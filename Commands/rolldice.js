const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'rolldice',
    aliases: ['dice'],
    description: 'Dice roll command!',
    execute(client, message, args, cmd, Discord) {
        const rolls = ["1", "2", "3", "4", "5", "6"];
        const roll = rolls[Math.floor(Math.random() * rolls.length)];
        let newEmbed = new MessageEmbed()
        .setTitle("🎲 Dice Roll!")
        .setColor("RANDOM")
        .setDescription(`You rolled a **${roll}**!`)
        message.channel.send(newEmbed)
    }   
}