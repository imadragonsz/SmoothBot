const {
  SlashCommandBuilder,
  EmbedBuilder,
  PermissionFlagsBits,
} = require("discord.js");
const removewelcomemessage = require("./removewelcomemessage");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("adminhelp")
    .setDescription("help command for the smoothbot's admin only commands")
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("select the command you want more information on")
        .setRequired(true)
        .addChoices({ name: "addwelcomemessage", value: "addwelcomemessage" })
        .addChoices({
          name: "removewelcomemessage",
          value: "removewelcomemessage",
        })
        .addChoices({ name: "setactivity", value: "setactivity" })
        .addChoices({ name: "emitt", value: "emitt" })
    ),
  async execute(interaction, client) {
    const Command = interaction.options.getString("command");
    let title;
    let commandfunction;
    let usage;
    let extra;

    switch (Command) {
      case "addwelcomemessage":
        title = "Addwelcomemessage help";
        commandfunction =
          "This command adds a welcome message to the server so that when a user joins the server he is welcomed to the server";
        usage =
          "Specify the id of the welcome channel, the id of the rules channel and the welcome message you want";
        extra =
          "You can use some specific texts to spice up your welcome message:\n{memberid}, Tags the user that joined the server\n{rulesid}, Tags the rules channel\n{newline}, Everything after this will be put on a new line";
        break;
      case "removewelcomemessage":
        title = "Removewelcomemessage help";
        commandfunction =
          "This command removes the welcomemessage you added and because of this no one will get greeted by this bot anymore";
        usage =
          "Just run the command in the server that you want to remove the welcomemessage";
        break;
      case "setactivity":
        title = "Setactivity help";
        commandfunction = "This command sets the activity of the bot";
        usage =
          "run the command and type the activity you want the bot to have";
        break;
      case "emitt":
        title = "Emitt help";
        commandfunction = "Emitts your specified event";
        usage = "select the event you want to emitt";
        break;
    }
    let embed;
    if (extra) {
      embed = new EmbedBuilder()
        .setTitle(`${title}`)
        .addFields([
          {
            name: "Function",
            value: `${commandfunction}`,
          },
        ])
        .addFields([
          {
            name: "Usage",
            value: `${usage}`,
          },
        ])
        .addFields([
          {
            name: "Extra information",
            value: `${extra}`,
          },
        ]);
    }
    if (!extra) {
      embed = new EmbedBuilder()
        .setTitle(`${title}`)
        .addFields([
          {
            name: "function",
            value: `${commandfunction}`,
          },
        ])
        .addFields([
          {
            name: "usage",
            value: `${usage}`,
          },
        ]);
    }
    try {
      interaction.reply({
        embeds: [embed],
      });
    } catch (error) {
      return;
    }
  },
};
