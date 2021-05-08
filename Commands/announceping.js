const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'announceping',
    description: 'Adds the announcement ping role!',
    async execute(client, message, args, cmd, Discord) {
        const channel = '840125144281776159';
        const announcementPingRole = message.guild.roles.cache.find(role => role.name === "Announcement Ping")

        const announcementPingEmoji = '❗';

        let embed = new MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Announcement Ping role!')
            .setDescription('React to the message below to get an Announcement Ping role')
            .setThumbnail('https://i.imgur.com/CILbAhO.png')
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(announcementPingEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === announcementPingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(announcementPingRole);
                }               
            }else{
                return;
            }
        });

        client.on('messageReactionRemove', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === announcementPingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(announcementPingRole);
                }               
            }else{
                return;
            }
        });
    }
}