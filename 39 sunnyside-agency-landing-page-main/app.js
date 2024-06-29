document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".nav__menu__mobile img");
  const menuContainer = document.querySelector(".nav__menu__mobile__container");

  menuButton.addEventListener("click", () => {
    menuContainer.style.display =
      menuContainer.style.display === "flex" ? "none" : "flex";
  });
});
