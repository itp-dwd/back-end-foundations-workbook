window.addEventListener("DOMContentLoaded", () => {
  const toppingsList = document.getElementById("toppings-list");
  fetch("/toppings").then(res => res.json()).then((data) => {
    toppingsList.innerHTML = ToppingsList(data.pizzaToppings);
  });

  const toppingForm = document.getElementById("topping-form");
  toppingForm.onsubmit = (e) => {
    e.preventDefault();
    const toppingInput = e.target.elements["topping"];
    const topping = toppingInput.value;
    toppingInput.value = "";
    fetch("/toppings",
      { method: "POST",
        body: JSON.stringify({topping: topping}),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(res => res.json()).then((data) => {
        toppingsList.innerHTML = ToppingsList(data.pizzaToppings);
      });
  }
});

function ToppingsList(toppings) {
  return toppings.map((topping) => {
    return `<li>${topping}</li>`;
  }).join("");
}