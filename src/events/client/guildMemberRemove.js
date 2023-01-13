const {
  GuildMember,
  EmbedBuilder,
  InteractionCollector,
} = require("discord.js");

module.exports = {
  name: "guildMemberRemove",

  async execute(member, client, interaction) {
    if (member.guild.channels.cache.get("942237225167491122")) {
      try {
        console.log("user left");
        const { user, guild } = member;
        const WelcomeChannel =
          member.guild.channels.cache.get("942237225167491122");
        const welcomeMessage = `<@${member.id}> left the server, sadge`;
        const embed = new EmbedBuilder()
          .setDescription(welcomeMessage)
          .setColor(0x11111);
        WelcomeChannel.send({ embeds: [embed] });
      } catch (error) {
        console.error(error);
      }
    } else {
      return;
    }
  },
};
