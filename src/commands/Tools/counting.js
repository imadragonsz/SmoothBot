const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("counting")
    .setDescription("counting test")
    .addStringOption((option1) =>
      option1
        .setName("number1")
        .setDescription("the first number")
        .setRequired(true)
    )
    .addStringOption((option2) =>
      option2
        .setName("type")
        .setDescription("the type of counting you want to do")
        .setRequired(true)
        .addChoices({ name: "add", value: "+" })
        .addChoices({ name: "substract", value: "-" })
        .addChoices({ name: "divide", value: "/" })
        .addChoices({ name: "multiply", value: "*" })
    )
    .addStringOption((option3) =>
      option3
        .setName("number2")
        .setDescription("the second number")
        .setRequired(true)
    ),
  async execute(interaction) {
    const number1 = interaction.options.getString("number1");
    const number2 = interaction.options.getString("number2");
    const type = interaction.options.getString("type");
    let sum;
    switch (type) {
      case "+":
        sum = +number1 + +number2;
        break;
      case "-":
        sum = +number1 - +number2;
        break;
      case "/":
        sum = +number1 / +number2;
        break;
      case "*":
        sum = +number1 * +number2;
        break;
    }
    const embed = new EmbedBuilder().addFields([
      { name: "The sum is:", value: `\`\`\`\n${sum}\`\`\`` },
    ]);
    interaction.reply({
      embeds: [embed],
    });
  },
};
