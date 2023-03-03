module.exports = {
  data: {
    name: "otherlinks",
  },
  async execute(interaction, client) {
    await interaction.reply({
      content: `This is your chosen link:\n${interaction.values[0]}`,
      ephemeral: true,
    });
  },
};
