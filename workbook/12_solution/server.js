const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

let toppings = {};
fs.readFile(path.join(__dirname, "./data/pizzaToppings.json"), (err, contents) => { // error first callback
  const obj = JSON.parse(contents);
  // technically valid JSON can't be an array
  toppings = obj;
});

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

app.delete("/toppings/:name", (req, res) => {
  const toppingToDelete = req.params.name;
  toppings.pizzaToppings = toppings.pizzaToppings.filter(topping => topping !== toppingToDelete);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
