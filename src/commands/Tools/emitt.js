const {
    SlashCommandBuilder,
    PermissionFlagsBits
  } = require("discord.js");
  
  module.exports = {
    data: new SlashCommandBuilder()
      .setName("emitt")
      .setDescription("emitts an event")
      .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
      .addStringOption((option) =>
        option
          .setName("event")
          .setDescription("the event you want to emitt")
          .setRequired(true)
      ),
    async execute(interaction, client) {
        const Event = interaction.options.getString("event");
    try
    {
        client.emit(Event, interaction.member)
        interaction.reply({content: `you emitted ${Event}`,ephemeral: true});
    }
    catch (error) 
    {
            console.error(error);
            interaction.reply(`${Event} doesn't exist`);
    }
  }
}