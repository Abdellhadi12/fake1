const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : bad`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : bad ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`الضعيف لا يغفر، فالمغفرة شيمة القوي`,"https://www.twitch.tv/bad_girl_128")
client.user.setStatus("dnd")
});




client.on('ready',async () => { client.channels.find(ch => ch.id === "515217327252307978" && ch.type === 'voice').join(); });


client.on('guildMemberAdd', member => {
const mohamed= member.guild.channels.get("515214611377684487");
if(!mohamed) return;
if(mohamed) {
setTimeout(() => mohamed.send(`Welcome`), 4000)        
}
});






client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
