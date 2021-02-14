module.exports = {
  
  name: "checkwarn",
  code: `
$title[__**WARN CHECK**__]
$description[**$username[$mentioned[1]]#$discriminator[$mentioned[1]] has $getServerVar[warn;$mentioned[1]] Warnings**]
$footer[Requested by @$username]
$color[d7342a]
$onlyIf[$mentioned[1]!=;**Mention User!**
__**Example**__
\`$getServerVar[prefix]checkwarn <@user>\` ]
$onlyPerms[manageserver;❌ **You need Manage Server Permissions!**]`
}
