const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    description: 'Creates a suggestion!',
    execute(client, message, args, cmd, Discord){
        const channel = message.guild.channels.cache.find(c => c.name === '🔔-suggestions');
        if(!channel) return message.channel.send('The channel suggestions does not exist');

        let messageArgs = args.join(' ');
        const suggestEmbed = new MessageEmbed()
        .setColor('#ffa500')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true}))
        .setDescription(messageArgs);

        channel.send(suggestEmbed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) =>{
            throw err;
        });
    }
}