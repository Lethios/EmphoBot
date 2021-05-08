const util = require('minecraft-server-util');
 
module.exports = {
    name: 'mcserver',
    aliases: ['mcserv'],    
    description: 'Get information about a minecraft server!',
    execute(client, message, args, cmd, Discord){
        if(!args[0]) return message.channel.send('Please enter a minecraft server IP');
        if(!args[1]) return message.channel.send('Please enter a minecraft server port (Try 25565)');
 
        util.status(args[0], {port: parseInt(args[1])}).then((response) =>{            
            const mcEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle('Minecraft server status')
            .addFields(
                {name: 'Server IP', value: response.host},
                {name: 'Online Players', value: response.onlinePlayers},
                {name: 'Max Players', value: response.maxPlayers},
                {name: 'Version', value: response.version}
            )
            .setFooter('*Mc server util by Emphorizer*');
 
            message.channel.send(mcEmbed);
        })
        .catch ((error) =>{
            message.channel.send('There was an error finding this server');
            throw error;
        })
    }
}