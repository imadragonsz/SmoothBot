const { EmbedBuilder } = require("discord.js");

module.exports = {
  name: "messageCreate",

  async execute(message) {
    console.log(message);
    if (message.author.bot) return;
    if (message.author.id === "811181737463644190") {
      try {
        message.reply("```shut it chai```");
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }
  },
};
