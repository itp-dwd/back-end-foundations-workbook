const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const contents = fs.readFileSync(path.join(__dirname, "./data/pizzaToppings.json"));
const toppings = JSON.parse(contents);

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

app.get("/toppings", (req, res) => {
  res.json(toppings);
});

app.post("/toppings", (req, res) => {
  const topping = req.body.topping;
  toppings.pizzaToppings.push(topping);
  res.json({success: true});
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
