const { GuildMember, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",

  async execute(member, client) {
    if (
      member.guild.channels.cache.get("495395599068168193") ==
      "495395599068168193"
    ) {
      try {
        console.log("user joined");
        const { user, guild } = member;
        const welcomeChannel =
          member.guild.channels.cache.get("495395599068168193");
        const rules = "761419156264058890";
        const welcomeMessage = `Welcome <@${member.id}> to Psycho Powa \b\n Please read the <#${rules}> and enjoy your stay`;
        const embed = new EmbedBuilder()
          .setDescription(welcomeMessage)
          .setColor(0x11111);
        welcomeChannel.send({ embeds: [embed] });
      } catch (error) {
        console.error(error);
      }
    }
    if (
      member.guild.channels.cache.get("942237225167491122") ==
      "942237225167491122"
    ) {
      try {
        console.log("user joined");
        const { user, guild } = member;
        const WelcomeChannel =
          member.guild.channels.cache.get("942237225167491122");
        const rules = "895789546497777674";
        const welcomeMessage = `Welcome <@${member.id}> to the server \b\n Please read the <#${rules}> and enjoy your stay`;
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
