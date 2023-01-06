//Requirements
require("dotenv").config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require("discord.js");
const fs = require("fs");
const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});
const axios = require("axios");

//registring commands
client.commands = new Collection();
client.Buttons = new Collection();
client.SelectMenus = new Collection();
client.Modals = new Collection();
client.commandArray = [];

//scanning for commands
const functionFolders = fs.readdirSync(`./src/functions`);
for (const folder of functionFolders) {
  const functionFiles = fs
    .readdirSync(`./src/functions/${folder}`)
    .filter((file) => file.endsWith(".js"));
  for (const file of functionFiles)
    require(`./src/functions/${folder}/${file}`)(client);
}

//calling for the handlers
client.handleEvents();
client.handleCommands();
client.handleComponents();
//logging in with the bot

client.login(token);
