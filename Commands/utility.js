const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'utility',
    aliases: ['util'],
    description: 'Displays the utility help menu!',
    execute(client, message, args, cmd, Discord) {
        let utilEmbed = new MessageEmbed()
            .setTitle('Utility help menu!')
            .setColor('#ffa500')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("⚙ Here is a list of utility commands you can use!")
            .addFields(
                { name: 'Afk', value: '`e!afkset` or `e!afk`'},
                { name: 'Ping', value: '`e!ping`'},
                { name: 'Remind', value: '`e!remind <seconds, minutes or hours> <reminder message>`'},
                { name: 'Suggestion', value: '`e!suggestion <suggestion>` or `e!suggest <suggestion>`'},                                
            )
            .setTimestamp()
        message.channel.send(utilEmbed);

    }
}