module.exports = {
    name: 'kick',
    description: 'This command kicks a member!',
    execute(client, message, args, cmd, Discord){
        if(message.member.roles.cache.has('732193417311813663')){

            const member = message.mentions.users.first();
        if(member){
            const memberTarget = message.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send(`<@${memberTarget.user.id}> has been kicked`);
        }else{
            message.channel.send("Please specify a member to kick");
        }        

        }else{
            message.channel.send('You can not use this command because you do not have the right permissions');
        }  
    } 
}