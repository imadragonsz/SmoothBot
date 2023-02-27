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
    .setName("addwelcomemessage")
    .setDescription(
      "adds a welcomemessage, automatically tags the user at the beginning of the msg"
    )
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option1) =>
      option1
        .setName("channelid")
        .setDescription("the channel id of your welcome channel")
        .setRequired(true)
    )
    .addStringOption((option2) =>
      option2
        .setName("ruleschannelid")
        .setDescription("the channelid of your rules channel")
        .setRequired(true)
    )
    .addStringOption((option3) =>
      option3
        .setName("welcomemessage")
        .setDescription(
          "your specified welcomemessage(it automatically tags the user and the rules channel)"
        )
        .setRequired(true)
    ),

  async execute(interaction, client) {
    const channelID = interaction.options.getString("channelid");
    const GuildID = interaction.guild.id;
    const RulesID = interaction.options.getString("ruleschannelid");
    const WelcomeMessage = interaction.options.getString("welcomemessage");
    messageschema.findOne({ guildid: GuildID }, async (err, data) => {
      if (!data) {
        new messageschema({
          guildid: GuildID,
          channelid: channelID,
          rulesid: RulesID,
          message: WelcomeMessage,
        }).save();
      }
      if (data) {
        welcomemessage.updateOne(
          { guildid: GuildID },
          { $set: { message: WelcomeMessage } },
          (err) => {
            return;
          }
        );
      }
    });
    const embed = new EmbedBuilder().setTitle("Welcome Message").addFields([
      {
        name: "Your welcome message",
        value: `${WelcomeMessage}`,
      },
    ]);

    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
