const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'fun',
    description: 'Displays the fun help menu!',
    execute(client, message, args, cmd, Discord) {
        let funEmbed = new MessageEmbed()
            .setTitle('Fun help menu!')
            .setColor('#ffa500')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription("🕹 Here is a list of fun commands you can use!")
            .addFields(
                { name: '8Ball', value: '`e!8ball <question>?`'},
                { name: 'Avatar', value: '`e!avatar @user` or `e!pfp`'},
                { name: 'Coinflip', value: '`e!coinflip` or `e!coin`'},
                { name: 'Ping', value: '`e!ping`'},
                { name: 'Minecraft server status', value: '`e!mcserver <IP> <Port>`'},
                { name: 'Dice roll', value: '`e!rolldice` or `e!dice`' },
                { name: 'Rock, paper, scissors', value: '`e!rps`' },                
            )
            .setTimestamp()
        message.channel.send(funEmbed);

    }
}