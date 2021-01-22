var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "TOKEN",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "YOUR BOT BIO",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "YOUR BOT PREFIX",
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


