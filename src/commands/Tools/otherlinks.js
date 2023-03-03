const {
  SlashCommandBuilder,
  StringSelectMenuBuilder,
  ActionRowBuilder,
  StringSelectMenuOptionBuilder,
} = require("discord.js");
require("dotenv").config();

module.exports = {
  data: new SlashCommandBuilder()
    .setName("other-links")
    .setDescription(`shows a menu of other "maybe" useful links`),
  async execute(interaction) {
    const { zkguildid } = process.env;
    if (interaction.guild.id != zkguildid) {
      return interaction.reply("this command is not used in this server");
    }
    const menu = new StringSelectMenuBuilder()
      .setCustomId("otherlinks")
      .setMinValues(1)
      .setMaxValues(1)
      .setPlaceholder("choose an option")
      .setOptions(
        new StringSelectMenuOptionBuilder({
          label: `Stream-Gallery`,
          value: `http://imgur.com/a/JFcGJ`,
          description: `This is a gallery of artworks created by my community`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Anime List`,
          value: `http://imgur.com/a/dXIrM`,
          description: `Here you find the extensive list of anime's our emperor has watched`,
        }),
        new StringSelectMenuOptionBuilder({
          label: `Donate`,
          value: `https://streamlabs.com/emperor_zk`,
          description: `Offer your life savings to our emperor`,
        })
      );

    await interaction.reply({
      components: [new ActionRowBuilder().addComponents(menu)],
      ephemeral: true,
    });
  },
};
