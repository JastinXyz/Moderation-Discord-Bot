module.exports = { 

name: "help",
code: `$title[Help Menu]
$thumbnail[$userAvatar[$authorID]]
  $description[**- His Prefix on this Server \`$getServerVar[prefix]\` **
**- Use \`$getServerVar[prefix]<NameCommand>\` to execute the Command. **

**⚙ Moderation Command List**

\`$getServerVar[prefix]kick\` - Kicked Someone from server.
\`$getServerVar[prefix]ban\` - Banned User server.
\`$getServerVar[prefix]warn\` - Warning User.
\`$getServerVar[prefix]checkwarn\` - Check amount of warn one of the users.
\`$getServerVar[prefix]removewarn\` - Remove warn one of the users.
\`$getServerVar[prefix]poll\` - Polling.
\`$getServerVar[prefix]clear\` - Delete Message.
\`$getServerVar[prefix]setprefix\` - Set Custom Prefix.]

$color[RANDOM]
$footer[Simple Moderation Bot | Subscribe Jastin Ch]
$addTimestamp`

}
