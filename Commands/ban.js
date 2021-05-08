module.exports = {
    name: 'ban',
    description: 'This command bans a member!',
    execute(client, message, args, cmd, Discord){
        if(message.member.roles.cache.has('732193417311813663')){

            const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.ban();
            message.channel.send(`<@${memberTarget.user.id}> has been banned`);
        }else{
            message.channel.send("Please specify a member to ban");
        }        

        }else{
            message.channel.send('You can not use this command because you do not have the right permissions');
        }  
        
    }
}