var dbd = require("dbd.js")
var fs = require("fs")

 


const bot = new dbd.Bot({
token: "Nzk3Nzk0MzMzNzUTI4.X_rp3w.dCSsSL6IBv9_ScTWgggvuuXSv1I",
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "Default Prefix is m. | You can customize!",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Web Dev | https://jastinch.xyz/",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "Donate? | https://jastinch.xyz/donate.html",
  type: "PLAYING",
  time: 12
})

bot.status({
  text: "In $serverCount Server | With $allMembersCount Members",
  type: "LISTENING",
  time: 12
})
 
bot.onMessage()

//variable
bot.variables({
 prefix:"m.",
 warn:"0",
 AFK:"off/",
 time:" ",
 bank:"0",
 cash:"0",
 diamond:"0",
 fish:"0",
 fishrod:"0",
 car:"0",
 house:"0",
 laptop:"0",
 fuel:"0",
 health:"100",
 hungry:"100",
 thirsty:"100",
 pizza:"0",
 drink:"0",
 hm:"0",
 rch: "",
 rmsg: "Congrats {user.tag}🎉, you leveled up to level {level}",
 lvl: "0",
 exp: "0",
 rexp: "40",
 rsystem: "0"
})
  
 //commands handler

var reader = fs.readdirSync("./help/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./help/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./mod/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./mod/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./alias/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./alias/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

var reader = fs.readdirSync("./general/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./general/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./fun/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./fun/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./anime/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./anime/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./economy/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./economy/${file}`)
  bot.command({
name: command.name, 
code: command.code
  })
}

var reader = fs.readdirSync("./dev/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./dev/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}

//rank
bot.command({
    name: "$alwaysExecute",
    code: `$useChannel[$getServerVar[rch]]
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[rmsg];{user.tag};$userTag];{user.mention};<@$authorID>];{level};$getUserVar[lvl]];{exp};$getUserVar[exp]]
$setUserVar[lvl;$sum[$getUserVar[lvl];1]]
$setUserVar[rexp;$multi[$getUserVar[rexp];2]]
$onlyIf[$getUserVar[exp]>=$getUserVar[rexp];]
$onlyForServers[$guildID;]`
    
})

bot.command({
    name: "$alwaysExecute",
    code: `$setUserVar[exp;$sum[$getUserVar[exp];$random[1;4]]]
$onlyIf[$getServerVar[rsystem]>=1;]
$onlyForServers[$guildID;]`
})
bot.awaitedCommand({
    name: "errorrank",
    code: `$setServerVar[rch;]
$onlyForServers[$guildID;]`
})

bot.command({
    name: "setrankmsg",
    usage: "setrankmsg <message>",
    description: "message for the leveled up",
    code: `$description[You have been setted the message to:
\`$message\`]
$color[01ff00]
$setServerVar[rmsg;$message]
$onlyIf[$message!=;You can also use this variables:
\`\`\`
{user.tag} = $userTag
{user.mention} = <@$authorID>
{level} = 1
{exp} = 25
\`\`\`
Current msg is:
\`$getServerVar[rmsg]\`]
$onlyBotPerms[mentioneveryone;managemessages;{description:I need permission \`MANAGE_MESSAGES\`/\`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]
$onlyForServers[$guildID;]`
})

bot.command({
    name: "rank",
    aliases: ["level"],
    usage: "rank (user)",
    description: "see the current level and exp",
    code: `$image[https://vacefron.nl/api/rankcard?username=$replaceText[$username[$mentioned[1;yes]]; ;+;-1]&avatar=$userAvatar[$mentioned[1;yes]]?size=4096&level=$getUserVar[lvl;$mentioned[1;yes]]&rank=&currentxp=$getUserVar[exp;$mentioned[1;yes]]&nextlevelxp=$getUserVar[rexp;$mentioned[1;yes]]&previouslevelxp=0&custombg=https://cdn.discordapp.com/attachments/793071150614970388/794565647760752650/20210101_205624.jpg&xpcolor=ffffff&isboosting=true]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__}{color:ff2050}]
$cooldown[5s;]
$onlyForServers[$guildID;]
$color[RANDOM]`
})

bot.command({
    name: "resetrank",
    usage: "resetrank",
    description: "reset the levelup channel",
    code: `$description[Okay, Done!]
$color[01ff00]
$setServerVar[rch;]
$setServerVar[rmsg;$getVar[rmsg]]
$setServerVar[rsystem;0]
$onlyIf[$getServerVar[rsystem]>=1;{description:Leveling system is __disabled__ on this server}{color:ff2050}]
$onlyBotPerms[mentioneveryone;{description:I dont have permission \`MENTION_EVERYONE\`}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$cooldown[5s;Please wait **%time%**]
$onlyForServers[$guildID;]`
})

bot.command({
    name: "setrankchannel",
    usage: "setrankchannel",
    description: "setrank server",
    code: `$description[Rank channel has been set up to <#$mentionedChannels[1;yes]>]
$color[40ff00]
$setServerVar[rsystem;1]
$setServerVar[rch;$mentionedChannels[1;yes]]
$onlyIf[$getServerVar[rsystem]<=1;{description:System leveling has been activated!}{color:ff2050}]
$onlyPerms[manageserver;{description:You need \`MANAGE_SERVER\` permission}{color:ff2050}]
$onlyForServers[$guildID;]`
})

// UPDATE

bot.command({
    name: "changelog",
    code: `@everyone
    $title[Changelog]
    $description[\`$message\`]
$color[RANDOM]
$useChannel[798714067043876896]
$addTimestamp
$argsCheck[>1;{title: Use Like This:} {description: \`m.cp <Changelog>\`}]
$onlyForIDs[770436385362411601;]`
})