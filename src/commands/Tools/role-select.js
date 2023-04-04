const {
  SlashCommandBuilder,
  ActionRowBuilder,
  ButtonBuilder,
  ButtonStyle,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");
require("dotenv").config();
const Roles = [
  { id: "1092831554679603240", label: "test1" },
  { id: "1092831616272969818", label: "test2" },
  { id: "1092831659302334594", label: "test3" },
];
module.exports = {
  data: new SlashCommandBuilder()
    .setName("role-select")
    .setDescription("select your role")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
  async execute(interaction, client) {
    const { zkguildid } = process.env;
    if (interaction.guild.id != zkguildid) {
      return interaction.reply("```this command is not used in this server```");
    } else {
      const channel = interaction.channelId;
      try {
        if (!channel) return;

        const row = new ActionRowBuilder();

        Roles.forEach((role) => {
          row.components.push(
            new ButtonBuilder()
              .setCustomId(role.id)
              .setLabel(role.label)
              .setStyle(ButtonStyle.Primary)
          );
        });
        const embed = new EmbedBuilder()
          .setTitle("Available roles")
          .addFields([{ name: "test roles:", value: "test1, test2, test3" }]);
        await interaction.reply({
          content: "claim or remove a role below.",
          embeds: [embed],
          components: [row],
        });
      } catch (error) {
        return;
      }
    }
  },
};
