const mongoose = require("mongoose");

const twitterSchema = new mongoose.Schema({});

const Twitter = mongoose.model("twitter", twitterSchema);

module.exports = Twitter;
