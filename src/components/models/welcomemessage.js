const mongoose = require("mongoose");

const messageschema = new mongoose.Schema({
  guildid: String,
  channelid: String,
  rulesid: String,
  message: String,
});

module.exports = mongoose.model("welcomemessage", messageschema);
