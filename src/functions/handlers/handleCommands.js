const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const Ascii = require("ascii-table");
const table = new Ascii("commands Loaded");
require("dotenv").config();

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

    const {
      trollfaceid,
      serverstatstestguildid,
      testserverguildid,
      zkguildid,
      clientid,
    } = process.env;

    const serverids = [
      trollfaceid,
      serverstatstestguildid,
      testserverguildid,
      zkguildid,
    ];

    const rest = new REST({ version: "9" }).setToken(process.env.token);
    try {
      console.log("Started refreshing application (/ commands.)");

      for (const server of serverids) {
        await rest.put(Routes.applicationGuildCommands(clientid, server), {
          body: client.commandArray,
        });
      }
      console.log("successfully reloaded application (/) commands");
    } catch (error) {
      console.error(error);
    }
  };
};
