module.exports = {
  data: {
    name: "1092831554679603240",
  },
  async execute(interaction, client) {
    await interaction.deferReply({ ephemeral: true });
    const role = interaction.guild.roles.cache.get(interaction.customId);
    if (!role) {
      await interaction.editReply({
        value: "No such role exists",
        ephemeral: true,
      });
      return;
    }
    const hasRole = interaction.member.roles.cache.has(role.id);
    if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply({
        content: `\`\`\`your role ${role.name} has been removed\`\`\``,
        ephemeral: true,
      });
      return;
    }
    if (!hasRole) {
      await interaction.member.roles.add(role);
      await interaction.editReply({
        content: `\`\`\`you have been assigned the ${role.name} role\`\`\``,
        ephemeral: true,
      });
      return;
    }
  },
};
