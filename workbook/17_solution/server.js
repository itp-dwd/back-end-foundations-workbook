const express = require("express");
const path = require("path");
const app = express();
const fs = require("fs");
const fetch = require("isomorphic-unfetch");

const contents = fs.readFileSync(path.join(__dirname, "./config.json"));
const config = JSON.parse(contents);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/gryffindor", (req, res) => {
  const url = `https://www.potterapi.com/v1/characters?house=Gryffindor&key=${config.POTTER_API}`;
  fetch(url).then((apiResponse) => {
    return apiResponse.json();
  }).then((data) => {
    res.json({characters: data});
  });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
