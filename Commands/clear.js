module.exports = {
    name: 'clear',  
    aliases: ['clr'],
    description: 'Clear messages!',
    
   async  execute(client, message, args, cmd, Discord) {

    if(message.member.roles.cache.has('732193417311813663')){

        if (!args[0]) return message.reply("Please enter the amount of messages to clear!");

        if(isNaN(args[0])) return message.reply("Please type a real number!");

        if(args[0] > 100) return message.reply("You can't delete more than 100 messages!");
        
        if(args[0] < 1) return message.reply("You have to delete at least one message!");

        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });

    } else {
        message.channel.send('You can not use this command because you do not have the right permissions')
    }
        

 }
}   