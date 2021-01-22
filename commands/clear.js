module.exports = {
  
  name: "clear",
  code: `
$deletecommand
$deleteIn[5s]
✅ Done Deleted $message Message!.
$clear[$message]
$argsCheck[1;Use: \`$getServerVar[prefix]clear <ammountOfMessage>\`]
$onlyPerms[admin;❌ **You need Administrator Permissions!**]`
}
