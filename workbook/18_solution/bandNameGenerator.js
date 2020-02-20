const metal = require("metal-name");
const foodWords = require("food-words");

function getBandName() {
  const fragment = Math.random()*2 > 1 ? "start" : "end";
  const adjective = metal({ fragment: fragment });
  let food = foodWords[Math.floor(Math.random()*foodWords.length)];
  // make first letter of food uppercase
  food = food[0].toUpperCase() + food.slice(1);
  return `${adjective} ${food}`;
}

module.exports = getBandName;
