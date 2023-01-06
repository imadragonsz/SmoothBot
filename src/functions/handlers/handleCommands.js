const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const Ascii = require("ascii-table");
const table = new Ascii("commands Loaded");

module.exports = (client) => {
  client.handleCommands = async () => {
    const commandFolders = fs.readdirSync("./src/commands");
    for (const folder of commandFolders) {
      const commandFiles = fs
        .readdirSync(`./src/commands/${folder}`)
        .filter((file) => file.endsWith(".js"));

      const { commands, commandArray } = client;
      for (const file of commandFiles) {
        const command = require(`../../commands/${folder}/${file}`);
        commands.set(command.data.name, command);
        commandArray.push(command.data.toJSON());
        await table.addRow(command.data.name, "✔ SUCCESFULL");
      }
    }

    console.log(table.toString());

    const clientId = "1058377280520454225";
    //const MainGuildId = "168064012175540224";
    const guildId = "857729547985879081";
    const serverstattestid = "527147837151248394";
    const rest = new REST({ version: "9" }).setToken(process.env.token);
    try {
      console.log("Started refreshing application (/ commands.)");

      // await rest.put(Routes.applicationGuildCommands(clientId, MainGuildId), {
      //   body: client.commandArray,
      // });
      await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
        body: client.commandArray,
      });
      await rest.put(
        Routes.applicationGuildCommands(clientId, serverstattestid),
        {
          body: client.commandArray,
        }
      );

      console.log("successfully reloaded application (/) commands");
    } catch (error) {
      console.error(error);
    }
  };
};
