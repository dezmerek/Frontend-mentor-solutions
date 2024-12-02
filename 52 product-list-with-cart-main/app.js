document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const deserts = document.querySelector(".desserts__container");

      data.forEach((item) => {
        const addDiv = document.createElement("div");

        addDiv.classList.add("desserts__container__card");

        addDiv.innerHTML = `
        <picture>
          <source srcset="${item.image.mobile}" media="(max-width: 600px)">
          <source srcset="${item.image.tablet}" media="(max-width: 1024px)">
          <img src="${item.image.desktop}" alt="${item.name}">
        </picture>
        <div class="desserts__container__card__buttons">
         <button class="desserts__container__card__buttons--add">Add to Cart</button>
         <div class="desserts__container__card__quantity">
          <button class="decrease">-</button>
          <span class="count">1</span>
          <button class="increase">+</button>
        </div>
        </div>
        <h3>${item.category}</h3>
        <h2>${item.name}</h2>
        <p>$${item.price.toFixed(2)}</p>
        `;

        deserts.appendChild(addDiv);
      });
    })
    .catch((error) => console.error("Error: ", error));
});

// button.addEventListener("click", function () {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => response.json())
//     .then(data);

//   function data(data) {
//     h1.textContent = "Advice #" + data.slip.id;
//     p.textContent = data.slip.advice;
//   }
// });
