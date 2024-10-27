const Discord = require("discord.js");
const fs = require('fs')
const pokemon = require('pokemon')

module.exports.run = async (bot, msg, args, pog) => {

const pokepeep = pokemon.getName(Math.floor(Math.random() * 898) + 1)
const newEmbed = new Discord.MessageEmbed()
.setColor('#32fa46')
.setDescription(`**${msg.author.tag}** just obtained a **${pokepeep}**\n:sparkles: These colors seem unusual...\n`)
.setImage(`https://play.pokemonshowdown.com/sprites/xyani/${pokepeep.toLowerCase()}.gif`)
.addField(`a cool message :)`, `another one`)

msg.channel.send(newEmbed)
}
module.exports.help = {
  name:"pokemon",
  directory:"utility"
}