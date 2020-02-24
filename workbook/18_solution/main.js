const fs = require("fs");
const path = require("path");
const Twitter = require("twitter");
require('dotenv').config();
const getBandName = require("./bandNameGenerator.js");

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_SECRET
});

const tweet = `i'm starting a band called ${getBandName()}!`
client.post('statuses/update', { status: tweet }, function (error, tweet, response) {
  if (error) throw error;
  console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
});
