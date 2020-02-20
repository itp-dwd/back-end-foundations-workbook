const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views/about.html"));
});

function getToppings() {
  const contents = fs.readFileSync(path.join(__dirname, "./data/pizzaToppings.json"));
  const obj = JSON.parse(contents);
  return obj;
}

function addTopping(topping) {
  const toppings = getToppings();
  // Push updates the original array
  toppings.pizzaToppings.push(topping);
  fs.writeFileSync(path.join(__dirname, "./data/pizzaToppings.json"), JSON.stringify(toppings));
  return toppings;
}

function deleteTopping(toppingToDelete) {
  const toppings = getToppings();
  // filter does NOT change the original array
  toppings.pizzaToppings = toppings.pizzaToppings.filter(topping => topping !== toppingToDelete);
  fs.writeFileSync(path.join(__dirname, "./data/pizzaToppings.json"), JSON.stringify(toppings));
  return toppings;
}

app.get("/toppings", (req, res) => {
  const toppings = getToppings();
  res.json(toppings);
});

app.post("/toppings", (req, res) => {
  const topping = req.body.topping;
  const toppings = addTopping(topping);
  // often, updated list will be returned by API
  res.json(toppings);
});

app.delete("/toppings/:name", (req, res) => {
  const toppingToDelete = req.params.name;
  const toppings = deleteTopping(toppingToDelete);
  res.json(toppings);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000!");
});
