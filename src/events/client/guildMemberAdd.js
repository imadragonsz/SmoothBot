const { EmbedBuilder } = require("discord.js");
const messageschema = require("../../components/models/welcomemessage");

module.exports = {
  name: "guildMemberAdd",

  async execute(member) {
    const GuildID = member.guild.id;
    messageschema.findOne({ guildid: GuildID }, async (err, data) => {
      const { guild } = member;
      const Channelid = data.channelid;
      const Rulesid = member.guild.channels.cache.get(data.rulesid).toString();
      const Welcomemessage = data.message;
      const Welcomemessagereplaced = Welcomemessage.replace(
        /{newline}|{memberid}|{rulesid}/gi,
        (options) => {
          if (options === "{newline}") return "\n";
          if (options === "{memberid}") return `<@${member.id}>`;
          if (options === "{rulesid}") return `${Rulesid}`;
        }
      );

      const welcomeChannel = member.guild.channels.cache.get(Channelid);
      if (!data) return;
      try {
        const embed = new EmbedBuilder()
          .setTitle("**New member!**")
          .setThumbnail(member.displayAvatarURL())
          .setDescription(`${Welcomemessagereplaced}`)
          .setColor(0x11111)
          .addFields([
            {
              name: "Total Members",
              value: `\`\`${guild.memberCount}\n\`\``,
            },
          ]);
        welcomeChannel.send({ embeds: [embed] });
      } catch (error) {
        console.error(error);
      }
    });
  },
};
