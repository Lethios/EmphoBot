const ms = require('ms')
const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'remind',
    aliases: ['rem'],
    description: 'Reminds you at a specific time!',
    async execute(client, message, args, cmd, Discord) {
        if (message.member.roles.cache.has('827868767488180284')) {

            let time = args[0];
            let user = message.author
            let reminder = args.splice(1).join(' ')

            const notime = new Discord.MessageEmbed()
                .setColor('#F30B04')
                .setDescription('⌚ Please specify the time!')

            const wrongtime = new Discord.MessageEmbed()
                .setColor('#F30B04')
                .setDescription('Sorry I only do d, m, h, or s.')

            const reminderembed = new Discord.MessageEmbed()
                .setColor('#F30B04')
                .setDescription('📢 Please tell me what you want to be reminded off')

            if (!args[0]) return message.channel.send(notime)
            if (
                !args[0].endsWith("d") &&
                !args[0].endsWith("m") &&
                !args[0].endsWith("h") &&
                !args[0].endsWith("s")
            )


                return message.channel.send(wrongtime)
            if (!reminder) return message.channel.send(reminderembed)

            const remindertime = new Discord.MessageEmbed()
                .setColor('#33F304')
                .setDescription(`\Your reminder will go off in ${time}`)

            message.channel.send(remindertime)

            const reminderdm = new Discord.MessageEmbed()
                .setColor('#ffa500')
                .setTitle('**REMINDER**')
                .setDescription(`It has been ${time} here is your reminder: ${reminder}`)

            setTimeout(async function () {
                try {

                    await user.send(reminderdm)
                } catch (err) {

                }

            }, ms(time));

        } else {
            message.channel.send("You need the Marquees role to access this command!");
        }

    }
}