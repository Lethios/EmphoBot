const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'minecraftping',
    aliases: ['mcping'],
    description: 'Adds the minecraft smp role!',
    async execute(client, message, args, cmd, Discord) {
        const channel = '840125144281776159';
        const minecraftPingRole = message.guild.roles.cache.find(role => role.name === "Minecraft SMP")

        const minecraftPingEmoji = '⛏';

        let mcembed = new MessageEmbed()
            .setColor('#ffa500')
            .setTitle('Minecraft SMP role!')
            .setDescription('React to the message below to get the minecraft smp role')
        let mcmessageEmbed = await message.channel.send(mcembed);
        mcmessageEmbed.react(minecraftPingEmoji);

        client.on('messageReactionAdd', async (reaction, user) => {
            if(reaction.message.partial) await reaction.message.fetch();
            if(reaction.partial) await reaction.fetch();
            if(user.bot) return;
            if(!reaction.message.guild) return;

            if(reaction.message.channel.id === channel){
                if(reaction.emoji.name === minecraftPingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(minecraftPingRole);
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
                if(reaction.emoji.name === minecraftPingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(minecraftPingRole);
                }               
            }else{
                return;
            }
        });
    }
}