const {SlashCommandBuilder} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
    .setName ('koffie-help')
    .setDescription ('Get list of Koffie commands'),
async execute(interaction) {

const title = `**Koffie Commands**`
const support = ' https://discord.gg/pwgH5bKhv4'
const embed = new EmbedBuilder()
.setColor(0xd29573)
.setTitle(title)
.setThumbnail('https://cdn.discordapp.com/avatars/1006680670480891965/52758b950932b7bfc46fc0849cecf8eb.png')
.setURL(support)
.setTimestamp()
.addFields([
    { 
        name: 'Coffee', 
        value: `Give a coffee to someone`
},

{ 
    name: 'Highfive', 
    value: `Give someone a highfive`
},

{ 
    name: 'Hug', 
    value: `Give someone a hug`
},

{ 
    name: 'Pat', 
    value: `Pat someone`
},

{ 
    name: 'Ping', 
    value: `Replies with pong`
},

{ 
    name: 'Quote', 
    value: `Get a motivational quote`
},

{ 
    name: 'Smile', 
    value: `Send someone a smile`
},

{ 
    name: 'Wave', 
    value: `Wave at someone`
},

{ 
    name: 'Vote', 
    value: `Support Koffie`
}
])
.setFooter({
    text: `Visit our support server in case of any bugs/suggestions!`,
  });
  
    
   


     
await interaction.deferReply();
await interaction.editReply({ embeds: [embed] });
}


}