module.exports = {

 name: "kick",
 code: `
$kick[$mentioned[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
Successfully Kicked $username[$mentioned[1]] 
$argsCheck[>1;Use: \`$getServerVar[prefix]kick <@user> <Reason>\`]

$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
 
 }
