const {
    GuildMember,
    EmbedBuilder,
  } = require("discord.js");
  const { InteractionType } = require("discord.js");
  
  module.exports = {
    name: "WelcomeMessage",
    async execute(member, client) {
        const {user,guild} = member;
        const welcomeChannel = member.guild.channels.cache.get("942237225167491122");
        const rules = "895789546497777674"
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
      welcomeChannel.send({embeds: [embed]})
        //welcomeChannel.send({content: `Welcome <@${member.id}> to Psycho Powa, please read the <#${rules}> and enjoy your stay`})
    
    }
  
}