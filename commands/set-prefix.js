module.exports = {

name: "setprefix",
code: `
$author[Done!;https://cdn.discordapp.com/attachments/795965782944120862/798540261353193472/6286_tada_animated.gif]
$description[Okay, My New Prefix in this server is \`$message\`, You can type \`$getServerVar[prefix]help\`]
$footer[Miu Bot | Request By @$username]
$color[$random[0;999999]]
$addTimestamp
$setServerVar[prefix;$message]
$argsCheck[>1;Use: \`$getServerVar[prefix]setprefix <NewPrefix>\`]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
}
