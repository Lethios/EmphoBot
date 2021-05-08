module.exports = {
    name: 'unmute',
    description: 'This command unmutes a member!',
    execute(client, message, args, cmd, Discord){
        if(message.member.roles.cache.has('732193417311813663')){
            const target = message.mentions.users.first();
        if (target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
            
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.add(mainRole.id);
            memberTarget.roles.remove(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        }else{
            message.channel.send('Please specify a member to unmute');
        }
        }else{
            message.channel.send('You can not use this command because you do not have the right permissions');
        }
        
    }
}