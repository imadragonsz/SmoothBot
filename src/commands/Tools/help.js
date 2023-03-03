const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("help command for the smoothbot's commands")
    .addStringOption((option) =>
      option
        .setName("command")
        .setDescription("select the command you want more information on")
        .setRequired(true)
        .addChoices({ name: "about", value: "about" })
        .addChoices({ name: "counting", value: "counting" })
        .addChoices({ name: "otherlinks", value: "otherlinks" })
        .addChoices({ name: "socials", value: "socials" })
        .addChoices({ name: "twitchstats", value: "twitchstats" })
    ),
  async execute(interaction, client) {
    const Command = interaction.options.getString("command");
    let title;
    let commandfunction;
    let usage;
    let extra;

    switch (Command) {
      case "about":
        title = "About help";
        commandfunction =
          "Gives some information on Emperor_zk, only works in his server";
        usage = "Just run the command";
        break;
      case "counting":
        title = "Counting help";
        commandfunction = "A simple command to count numbers";
        usage =
          "Put in the first number, select what type of counting you want to do and put in the second number";
        break;
      case "otherlinks":
        title = "Otherlinks help";
        commandfunction =
          "Shows a selectmenu for other links, only works in Emperor_zK server";
        usage = "Select what link you want from the dropdown menu";
        break;
      case "socials":
        title = "Socials help";
        commandfunction =
          "Shows a selectmenu of Emperor_zK's social media's, only works in his server";
        usage = "Select the social media option you want to visit";
        break;
      case "twitchstats":
        title = "Twitchstats help";
        commandfunction =
          "Shows you information on the specified twitch streamer";
        usage =
          "Use the command and specify the twitch streamer you want information on";
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
      console.log(error);
    }
    console.log(extra);
  },
};
