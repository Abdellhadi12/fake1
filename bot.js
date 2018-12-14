const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";

client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`الضعيف لا يغفر، فالمغفرة شيمة القوي`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});





client.on('ready',async () => { client.channels.find(ch => ch.id === "515217327252307978" && ch.type === 'voice').join(); });


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515214611377684487");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`** Welcom to Stylight....:dove: ** `), 4000)        


}
});






client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
