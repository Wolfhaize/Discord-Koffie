const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
    .setName ('koffie-vote')
    .setDescription ('Support Koffie by voting'),


    async execute (interaction) {
        const title = 'Vote  for Koffie'
        const support = ' https://discord.gg/pwgH5bKhv4'

        const embed = new EmbedBuilder()
    .setColor(0xd29573)
    .setTitle(title)
    .setTimestamp()
    .setThumbnail('https://cdn.discordapp.com/avatars/1006680670480891965/52758b950932b7bfc46fc0849cecf8eb.png')
    .setURL(support)
    .setDescription('Buy Me A Coffee: [Ko-fi](https://www.ko-fi.com/Wolfhaize)'
    )
    .addFields([
        {
            name:'Top.gg', value:'[Vote Here](https://top.gg/bot/1006680670480891965/vote)'
        },
        {
            name:'Discord Bot List', value:'[Vote Here](https://discordbotlist.com/bots/koffie/upvote)'
        }
    ])
    .setFooter({
        text: `Have a great day!`,
      });

      await interaction.reply({ embeds: [embed] });
    }
};
