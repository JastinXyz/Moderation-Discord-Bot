module.exports = {
  
  name: "ban",
  code: `
$ban[$mentioned[1]]
$color[#FF0000]
$footer[Success Banned User]
$author[Its a bird, Its a plane, Its a ban hammer!]
$description[Ban hammer succesfully used!
$addField[Banned;<@$mentioned[1]>]
$addField[Admin;<@$authorID>]
$addField[Reason;$noMentionMessage]
]
$argsCheck[>2;Use: \`$getServerVar[prefix]ban <@user> <Reason>\`]
$onlyPerms[manageserver;❌ **You need Manage Server Permissions!**]
`
}
