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
         <div class="desserts__container__card__buttons__quantity">
          <button class="desserts__container__card__buttons__quantity--decrease">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path  d="M0 .375h10v1.25H0V.375Z"/></svg>
          </button>
          <span class="desserts__container__card__buttons__quantity--count">1</span>
          <button class="desserts__container__card__buttons__quantity--increase">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path  d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
          </button>
        </div>
        </div>
        <h3>${item.category}</h3>
        <h2>${item.name}</h2>
        <p>$${item.price.toFixed(2)}</p>
        `;

        deserts.appendChild(addDiv);
      });

      const addToCard = document.querySelectorAll(
        ".desserts__container__card__buttons--add"
      );
      const buttonQuantity = document.querySelectorAll(
        ".desserts__container__card__buttons__quantity"
      );

      addToCard.forEach((button, index) => {
        button.addEventListener("click", () => {
          button.style.display = "none";
          buttonQuantity[index].style.display = "flex";
        });
      });
    })

    .catch((error) => console.error("Error: ", error));
});
