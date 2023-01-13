const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`twitchstats`)
    .setDescription("show available stats")
    .addStringOption((option) =>
      option
        .setName("streamer")
        .setDescription("select the streamer")
        .setMinLength(4)
        .setMaxLength(50)
        .setRequired(true)
    ),
  async execute(interaction) {
    const start = new Date();
    const streamerchoice = interaction.options.getString("streamer");
    const followcount = await axios({
      url: `https://api.crunchprank.net/twitch/followcount/${streamerchoice}`,
      method: "GET",
    });
    const viewercount = await axios({
      url: `https://api.crunchprank.net/twitch/viewercount/${streamerchoice}`,
      method: "GET",
    });
    const Game = await axios({
      url: `https://api.crunchprank.net/twitch/game/${streamerchoice}`,
      method: "GET",
    });
    const avatar = await axios({
      url: `https://api.crunchprank.net/twitch/avatar/${streamerchoice}`,
      method: "GET",
    });
    const accountage = await axios({
      url: `https://api.crunchprank.net/twitch/accountage/${streamerchoice}`,
      method: "GET",
    });
    let Status = `${streamerchoice} is currently streaming :red_circle:`;
    if (followcount.data == `User not found: ${streamerchoice}`) {
      interaction.reply(`channel: ${streamerchoice} doesn't exist`);
      return;
    }
    if (viewercount.data == `${streamerchoice} is offline`) {
      viewercount.data = 0;
      Game.data = "streamer is offline and thus is not playing anything";
    }
    if (viewercount.data == 0) {
      Status = `${streamerchoice} is currently offline`;
    }
    const end = new Date();
    const diff = end.getTime() - start.getTime();
    console.log(`${diff}ms`);
    const embed = new EmbedBuilder()
      .setTitle(`Twitchstats of ${streamerchoice} (took ${diff}ms)`)
      .setThumbnail(avatar.data)
      .addFields([
        {
          name: "Current status",
          value: `${Status}`,
        },
      ])
      .addFields([
        {
          name: "Playing",
          value: `${Game.data}`,
        },
      ])
      .addFields([
        {
          name: "Followercount",
          value: `This streamer currently has ${followcount.data} followers`,
        },
      ])
      .addFields([
        {
          name: "Viewercount",
          value: `This streamer currently has ${viewercount.data} viewers`,
        },
      ])
      .addFields([
        {
          name: "Account age",
          value: `This account is ${accountage.data} old`,
        },
      ]);
    interaction.reply({
      embeds: [embed],
      ephemeral: false,
    });
  },
};
