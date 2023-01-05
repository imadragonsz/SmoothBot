const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  ActivityType,
} = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("setactivity")
    .setDescription("sets the activity of the bot")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("activity")
        .setDescription("the activity to set")
        .setRequired(true)
    ),
  async execute(interaction, client) {
    const activity = interaction.options.getString("activity");
    client.user.setPresence({
      activities: [
        {
          name: `${activity}`,
        },
      ],
    });
    interaction.reply(`you changed the bots activity to: ${activity}`);
  },
};
