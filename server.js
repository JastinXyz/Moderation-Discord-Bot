var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "ODI4MDc4MjU4Mjg4MzI4NzM1.YGkV-Q.XQTBtKHxK1MRMaOCq90b-Cd0ErE",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "Shitting around",
  type: "PLAYING",
  time: 12
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "c",
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


