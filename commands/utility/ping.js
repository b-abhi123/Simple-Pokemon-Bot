const Discord = require("discord.js");

module.exports.run = async (bot, msg, args, pog) => {

 msg.channel.send(`**Pong!** ${bot.ws.ping}ms`)
 
}

module.exports.help = {
  name:"ping",
  directory:"utility"
}