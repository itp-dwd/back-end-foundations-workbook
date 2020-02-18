const fs = require("fs");

function getRandomTopping(toppings) {
  return toppings[Math.floor(Math.random()*toppings.length)];
}

const contents = fs.readFileSync("pizzaToppings.json");
const obj = JSON.parse(contents);
const toppings = obj.pizzaToppings;

const topping1 = getRandomTopping(toppings);
const topping2 = getRandomTopping(toppings);
const topping3 = getRandomTopping(toppings);

const pizza = `I'd like a pizza with ${topping1}, ${topping2}, and ${topping3}.`;
console.log(pizza);
