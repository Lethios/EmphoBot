const { MessageEmbed } = require("discord.js");

module.exports = {
    name: '8ball',        
    description: "Fun 8ball command!",
    execute(client, message, args, cmd, Discord){
        
        if(!args[2]) {
            return message.channel.send("❌ Enter in the correct arguments!");
        } 
        let replies = ["⏰ Ask again later.", "⏲ Better not tell you now.", "🤷‍♂️ Don't count on it.", "✅ It is certain.", "🔮 It is decidedly so.", "🙅‍♂️ My reply is no.", "⭐ Signs point to yes.", "🌁 Outlook not so good."];

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(0).join(" ");

        let ballembed = new MessageEmbed()
        .setAuthor(message.author.tag)
        .setColor("RANDOM")
        .setTimestamp()
        .addField("Question", question)
        .addField("Answer", replies[result]);
        

        message.channel.send(ballembed);
    }
}