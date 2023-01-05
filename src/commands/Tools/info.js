const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const axios = require("axios");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("about")
    .setDescription("About Emperor_ZK"),
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle("About EmperorZK")
      .setThumbnail(
        "https://static-cdn.jtvnw.net/jtv_user_pictures/5a16c1c2-7f04-488c-a7a7-dcbe365c6ee1-profile_image-70x70.jpeg"
      )
      .setColor(0x11111)
      .addFields([
        {
          name: "Name",
          value: `EmperorZK aka Richard`,
        },
        {
          name: "Occupation",
          value:
            "CEO of Always Positive (A+) Media ANZ, Head of Beat FGC ANZ, Classical Musician, 1st Degree Black belt, Entertainer, Stage host, Esports Commentator, Operations Manager, Cinematographer, Photographer and Editor",
        },
        {
          name: "Character description",
          value:
            "The HYPECASTER & ENTERTAINER of the UNIVERSE! -Follow me for AWESOME times! (You'll often find me Casting awesome competitive games ranging from FPS to Fighting Games!) + Community Party Games on Sunday includes Jackbox, Among Us, Fall Guys and more!",
        },
      ]);

    interaction.reply({
      embeds: [embed],
    });
  },
};
