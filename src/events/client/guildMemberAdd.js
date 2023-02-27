const {
  GuildMember,
  EmbedBuilder,
  InteractionCollector,
} = require("discord.js");
const messageschema = require("../../components/models/welcomemessage");

module.exports = {
  name: "guildMemberAdd",

  async execute(member, client, interaction) {
    const GuildID = member.guild.id;
    messageschema.findOne({ guildid: GuildID }, async (err, data) => {
      if (!data) return;

      try {
        const { user, guild } = member;
        const Channelid = data.channelid;
        const Rulesid = member.guild.channels.cache
          .get(data.rulesid)
          .toString();
        const Welcomemessage = data.message;
        const Member = `<@${member.id}>`;
        const welcomeChannel = member.guild.channels.cache.get(Channelid);
        const embed = new EmbedBuilder()
          .setTitle("**New member!**")
          .setThumbnail(member.displayAvatarURL())
          .setDescription(`${Member}, ${Welcomemessage} ${Rulesid}`)
          .setColor(0x11111)
          .addFields([
            { name: "Total Members", value: `${guild.memberCount}` },
          ]);
        welcomeChannel.send({ embeds: [embed] });
      } catch (error) {
        console.error(error);
      }
    });
  },
};
