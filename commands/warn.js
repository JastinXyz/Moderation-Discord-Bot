module.exports = { 

name: "warn",
code: `$deletecommand
$onlyIf[$mentioned[1]!=;**\You must mention someone!**
__**Example**__
\`$getServerVar[prefix]warn <@user> <reason>\` ]
$setServerVar[warn;$sum[$getServerVar[warn;$mentioned[1]];1];$mentioned[1]]

$title[__**WARN**__]
$description[<@$mentioned[1]> **was warned**
**Reason**: **$noMentionMessage**]
$footer[Warned by $username]
$color[DF2800]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
    }
