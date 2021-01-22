module.exports = {
  
  name: "removewarn",
  code: `
$deletecommand
$title[__**REMOVE WARN**__]
$description[Successfully removed $noMentionMessage warn from <@$mentioned[1]>!!]
$footer[Request From @$username]
$addTimestamp
$color[$random[0;999999]]
$argsCheck[>2;**Correct format is:** \`$getServerVar[prefix]removewarn <@user> <AmountWarnForRemove>\`]
$setServerVar[warn;$sub[$getServerVar[warn;$mentioned[1]];$noMentionMessage];$mentioned[1]]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]
$onlyIf[$getServerVar[warn;$mentioned[1]]>=$noMentionMessage;See! What you mentioned doesn't have as many warnings as you wrote!]`
}
