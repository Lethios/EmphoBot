const { MessageEmbed } = require("discord.js")

module.exports = {
    name: 'moderation',
    aliases: ['mod'],
    description: 'Displays the moderation help menu!',
    execute(client, message, args, cmd, Discord) {
        if (message.member.roles.cache.has('732193417311813663')) {
            let modEmbed = new MessageEmbed()
                .setTitle('🛠   Moderation menu!')
                .setColor('#ffa500')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setDescription("Here is a list of moderation commands you can use!")
                .addFields(
                    { name: 'Kick', value: 'Type `e!kick @user` to kick the specified user' },
                    { name: 'Ban', value: 'Type `e!ban @user` to ban the specified user' },
                    { name: 'Mute', value: 'Type `e!mute @user <seconds, minutes, hours>` to mute the specified user' },
                    { name: 'Unmute', value: 'Type `e!unmute @user` to unmute the specified user' },
                    { name: 'Clear', value: 'Type `e!clear` to clear specified number of messages' },
                )
                .setTimestamp()
            message.channel.send(modEmbed);

        } else {
            message.channel.send('You can not use this command because you do not have the right permissions');
        }


    }
}