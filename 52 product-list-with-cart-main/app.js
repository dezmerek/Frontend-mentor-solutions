document.addEventListener("DOMContentLoaded", () => {
  let totalQuantity = 0;
  let addItems = [];

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const dessertsContainer = document.querySelector(".desserts__container");
      const cartContent = document.querySelector(".cart__select");

      data.forEach((item, index) => {
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
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path d="M0 .375h10v1.25H0V.375Z"/></svg>
              </button>
              <span class="desserts__container__card__buttons__quantity--count">0</span>
              <button class="desserts__container__card__buttons__quantity--increase">
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
              </button>
            </div>
          </div>
          <h3>${item.category}</h3>
          <h2>${item.name}</h2>
          <p>$${item.price.toFixed(2)}</p>
        `;

        dessertsContainer.appendChild(addDiv);
      });

      const addToCartButtons = document.querySelectorAll(
        ".desserts__container__card__buttons--add"
      );
      const quantityControls = document.querySelectorAll(
        ".desserts__container__card__buttons__quantity"
      );

      addToCartButtons.forEach((button, index) => {
        const controls = quantityControls[index];
        const quantityCount = controls.querySelector(
          ".desserts__container__card__buttons__quantity--count"
        );

        button.addEventListener("click", () => {
          button.style.display = "none";
          controls.style.display = "flex";
          quantityCount.textContent = 1;

          const selectedItem = {
            ...data[index],
            id: `item-${index}`,
            quantity: 1,
          };
          addItems.push(selectedItem);

          totalQuantity++;
          updateTotalQuantity();
        });

        const decrease = controls.querySelector(
          ".desserts__container__card__buttons__quantity--decrease"
        );
        const increase = controls.querySelector(
          ".desserts__container__card__buttons__quantity--increase"
        );

        decrease.addEventListener("click", () => {
          let currentQuantity = parseInt(quantityCount.textContent);
          if (currentQuantity > 1) {
            quantityCount.textContent = currentQuantity - 1;
            const itemInCart = addItems.find(
              (item) => item.id === `item-${index}`
            );
            if (itemInCart) {
              itemInCart.quantity = currentQuantity - 1;
            }

            totalQuantity--;
            updateTotalQuantity();
          } else {
            controls.style.display = "none";
            button.style.display = "flex";
            totalQuantity--;

            addItems = addItems.filter((item) => item.id !== `item-${index}`);
            updateTotalQuantity();
          }
        });

        increase.addEventListener("click", () => {
          let currentQuantity = parseInt(quantityCount.textContent);
          quantityCount.textContent = currentQuantity + 1;

          const itemInCart = addItems.find(
            (item) => item.id === `item-${index}`
          );
          if (itemInCart) {
            itemInCart.quantity = currentQuantity + 1;
          }

          totalQuantity++;
          updateTotalQuantity();
        });
      });

      const cartAllCount = document.querySelector(".cart span");

      function updateTotalQuantity() {
        cartAllCount.textContent = `(${totalQuantity})`;
        renderCart();
      }

      function renderCart() {
        cartContent.innerHTML = "";
        let totalPrice = 0;

        addItems.forEach((item) => {
          const cartItem = document.createElement("div");
          cartItem.classList.add("cart__select__item");
          cartItem.innerHTML = `
              <div>
                <h3>${item.name}</h3>
                <div>
                  <h4>${item.quantity}x</h4>
                  <p>@ $${item.price.toFixed(2)} <strong>$${(
            item.price * item.quantity
          ).toFixed(2)}</strong>
          </p>
                </div>
              </div>
              <button class="cart__select__remove" data-id="${
                item.id
              }"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>
          `;
          totalPrice += item.price * item.quantity;
          cartContent.appendChild(cartItem);
        });

        const totalDiv = document.createElement("div");
        totalDiv.classList.add("cart__select__total");
        totalDiv.innerHTML = `
        <p>Order Total
        <h1>$${totalPrice.toFixed(2)}</p></h1>
        `;
        cartContent.appendChild(totalDiv);

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("cart__select__info");
        infoDiv.innerHTML = `
          <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
          <p>This is a <b>carbon-neutral</b> delivery</p>
        `;
        cartContent.appendChild(infoDiv);

        const button = document.createElement("button");
        button.classList.add("cart__select--button");
        button.innerHTML = `
          Confirm Order
        `;
        cartContent.appendChild(button);

        const nonAdd = document.querySelector(".cart__content");
        if (totalPrice > 1) {
          nonAdd.style.display = "none";
          totalDiv.style.display = "flex";
        } else {
          nonAdd.style.display = "flex";
          totalDiv.style.display = "none";
        }

        const removeButtons = document.querySelectorAll(
          ".cart__select__remove"
        );
        removeButtons.forEach((button) => {
          button.addEventListener("click", () => {
            const idToRemove = button.getAttribute("data-id");

            const itemToRemove = addItems.find(
              (item) => item.id === idToRemove
            );

            if (itemToRemove) {
              totalQuantity -= itemToRemove.quantity;

              addItems = addItems.filter((item) => item.id !== idToRemove);

              const productIndex = data.findIndex(
                (item, index) => `item-${index}` === idToRemove
              );
              const controls = quantityControls[productIndex];
              const button = addToCartButtons[productIndex];
              const quantityCount = controls.querySelector(
                ".desserts__container__card__buttons__quantity--count"
              );

              controls.style.display = "none";
              button.style.display = "block";
              quantityCount.textContent = 0;
            }

            updateTotalQuantity();
            renderCart();
          });
        });

        const buttonConfirm = document.querySelector(".cart__select--button");

        buttonConfirm.addEventListener("click", () => {
          const orderDiv = document.createElement("div");
          orderDiv.classList.add("order");
          orderDiv.innerHTML = `
    <img src="./assets/images/icon-order-confirmed.svg" alt="" />
    <h1>Order Confirmed</h1>
    <p>We hope you enjoy your food!</p>
  `;

          document.querySelector(".container").prepend(orderDiv);

          const orderContainer = document.createElement("div");
          orderContainer.classList.add("order__container");

          let totalPrice = 0;

          addItems.forEach((item) => {
            const order = document.createElement("div");
            order.classList.add("order__container__item");

            order.innerHTML = `
      <div>
        <img src="${item.image.thumbnail}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <div>
            <h4>${item.quantity}x</h4>
            <p>@ $${item.price.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
    `;

            totalPrice += item.price * item.quantity;

            orderContainer.appendChild(order);
          });

          const totalOrderDiv = document.createElement("div");
          totalOrderDiv.classList.add("order__container__total");
          totalOrderDiv.innerHTML = `
    <p>Order Total</p>
    <h1>$${totalPrice.toFixed(2)}</h1>
  `;
          orderContainer.appendChild(totalOrderDiv);

          const buttonOrderDiv = document.createElement("div");
          buttonOrderDiv.classList.add("order__button");
          buttonOrderDiv.innerHTML = `
    <button>Start New Order</button>
  `;

          orderDiv.appendChild(orderContainer);
          orderDiv.appendChild(buttonOrderDiv);

          const newOrder = buttonOrderDiv.querySelector("button");
          newOrder.addEventListener("click", () => {
            location.reload();
          });
        });
      }
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
});
