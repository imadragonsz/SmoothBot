const { client } = require("discord.js");
const mongoose = require('mongoose');
const { Database } = process.env;
module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    console.log("The client is now ready!");
    if (!Database) return;
    mongoose
      .set('strictQuery', true)
    	.connect(Database, {
    		useNewUrlParser: true,
    		useUnifiedTopology: true
    	})
    	.then(() => {
    		console.log('this client is now connected to the database!');
    	})
    	.catch((err) => {
    		console.log(err);
    	});
  },
};
