var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODYzNzk4Mzg4NjQyNDE0NjEz.YOsI8A.RtjITdsF0OTNAM60zUziFS7ZoOs",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "created julix",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "g$",
 warn: "0"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}


