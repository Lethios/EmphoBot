const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'help',
    description: 'Displays the help command',
    execute(client, message, args, cmd, Discord) {
        let helpEmbed = new MessageEmbed()
            .setTitle("Help menu!")
            .setColor('#ffa500')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("For additional info on each command, type `e!<command name>`")
            .addFields(                
                { name: '🎉  Fun', value: 'Type `e!fun` for fun commands!' },
                { name: '⚙  Utility', value: 'Type `e!utility` or `e!util` for utility commands!' },
                { name: '🛠  Moderation', value: 'Type `e!moderation` or `e!mod` for moderation commands!' },
            )
            .setTimestamp()
        message.channel.send(helpEmbed);
    }
}