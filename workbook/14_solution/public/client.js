window.addEventListener("DOMContentLoaded", () => {
  const toppingsList = document.getElementById("toppings-list");
  fetch("/toppings").then(res => res.json()).then((data) => {
    toppingsList.innerHTML = ToppingsList(data.pizzaToppings);
  });
});

function ToppingsList(toppings) {
  return toppings.map((topping) => {
    return `<li>${topping}</li>`;
  }).join("");
}