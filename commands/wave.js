const {SlashCommandBuilder} = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const { request } = require('undici');

module.exports = {
    data: new SlashCommandBuilder()
    .setName ('wave')
    .setDescription ('Wave to someone')
    .addUserOption((option) => 
    option
      .setName('user')
      .setDescription('The user you want to wave at')
      .setRequired(true)

),
async execute(interaction) {
const motiquote = await request(`https://kawaii.red/api/gif/wave/token=anonymous`);
const answer = await motiquote.body.json();
const runner = interaction.user.username
const receive = interaction.options.getUser('user');
const receiver = receive.username;
const support = ' https://discord.gg/pwgH5bKhv4'

const title = `**${receiver??runner}, ${runner} is waving at you!**`
const embed = new EmbedBuilder()
.setColor(0xd29573)
.setTitle(title)
.setThumbnail('https://cdn.discordapp.com/avatars/1006680670480891965/52758b950932b7bfc46fc0849cecf8eb.png')
.setImage(answer.response)
.setTimestamp()
.setURL(support)
.setFooter({
    text: `Hello there!`,
  });
    
   


     
await interaction.deferReply();
await interaction.editReply({ embeds: [embed] });
}


}