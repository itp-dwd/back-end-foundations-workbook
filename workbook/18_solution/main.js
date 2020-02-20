const fs = require("fs");
const path = require("path");
const Twitter = require("twitter");
const getBandName = require("./bandNameGenerator.js");

const contents = fs.readFileSync(path.join(__dirname, "./config.json"));
const config = JSON.parse(contents);

const client = new Twitter({
  consumer_key: config.CONSUMER_KEY,
  consumer_secret: config.CONSUMER_SECRET,
  access_token_key: config.ACCESS_TOKEN,
  access_token_secret: config.ACCESS_SECRET
});

const tweet = `i'm starting a band called ${getBandName()}!`
client.post('statuses/update', { status: tweet }, function (error, tweet, response) {
  if (error) throw error;
  console.log(tweet);  // Tweet body.
  // console.log(response);  // Raw response object.
});
