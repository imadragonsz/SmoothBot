const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("socials")
    .setDescription("shows a menu of zk's social media platforms"),
  async execute(interaction, client) {
    if (interaction.guild.id != "168064012175540224") {
      return interaction.reply("this command is not used in this server");
    }
    const menu = new StringSelectMenuBuilder()
      .setCustomId("socials")
      .setMinValues(1)
      .setMaxValues(1)
      .setPlaceholder("choose an option")
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Twitch`,
          value: `https://www.twitch.tv/emperor_zk`,
          description: `This is where our emperor streams`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Youtube`,
          value: `https://www.youtube.com/@EmperorzK`,
          description: `This is where our emperor posts videos`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Instagram`,
          value: `https://www.instagram.com/emperor_zk/?hl=en`,
          description: `This is where you go if can't get enough of seeing our emperor's face`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Twitter`,
          value: `https://twitter.com/Emperor_zK`,
          description: `This is where our emperor keeps us up to date on recent or coming events`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
      ephemeral: true,
    });
  },
};
