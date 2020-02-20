window.addEventListener("DOMContentLoaded", () => {
  const toppingsList = document.getElementById("toppings-list");
  fetch("/toppings").then(res => res.json()).then((data) => {
    toppingsList.innerHTML = ToppingsList(data.pizzaToppings);
  });

  const toppingForm = document.getElementById("topping-form");
  toppingForm.onsubmit = (event) => {
    event.preventDefault();
    const toppingInput = event.target.elements["topping"];
    const topping = toppingInput.value;
    toppingInput.value = "";
    fetch("/toppings",
      {
        method: "POST",
        body: JSON.stringify({ topping: topping }),
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
    return `<li data-topping="${topping}">
              <span>${topping}</span>
              <button onclick="removeTopping(event)">Remove</button>
            </li>`;
  }).join("");
}

function removeTopping(event) {
  const toppingsList = document.getElementById("toppings-list");
  // access data attributes using dataset
  const topping = event.target.parentElement.dataset.topping;
  fetch(`/toppings/${topping}`,
    {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json()).then((data) => {
      toppingsList.innerHTML = ToppingsList(data.pizzaToppings);
    });
}