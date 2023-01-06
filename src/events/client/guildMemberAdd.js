const { GuildMember, EmbedBuilder } = require("discord.js");

module.exports = {
  name: "guildMemberAdd",
  async execute(member, client) {
    console.log("user joined");
    const { user, guild } = member;
    const welcomeChannel =
      member.guild.channels.cache.get("942237225167491122");
    const rules = "895789546497777674";
    const welcomeMessage = `Welcome <@${member.id}> to Psycho Powa \b\n Please read the <#${rules}> and enjoy your stay`;
    const embed = new EmbedBuilder()
      .setDescription(welcomeMessage)
      .setColor(0x11111);
    welcomeChannel.send({ embeds: [embed] });
  },
};
