const {
  SlashCommandBuilder,
  PermissionFlagsBits,
  EmbedBuilder,
} = require("discord.js");
const mongoose = require("mongoose");
const welcomemessage = require("../../components/models/welcomemessage");
const messageschema = require("../../components/models/welcomemessage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("removewelcomemessage")
    .setDescription("removes welcomemessage")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),

  async execute(interaction, client) {
    const GuildID = interaction.guild.id;
    welcomemessage.deleteMany({ guildid: GuildID }, (err) => {
      (err) => {
        return;
      };
    });
    interaction.reply("your welcome message was removed");
  },
};
