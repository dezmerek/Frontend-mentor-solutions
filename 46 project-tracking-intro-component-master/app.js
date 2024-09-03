document.addEventListener("DOMContentLoaded", () => {
  menu = document.querySelector(".header__nav__hamburger img");
  hamburgerMenu = document.querySelector(".header__nav__hamburger__menu");

  menu.addEventListener("click", () => {
    if (menu.src.includes("icon-hamburger")) {
      menu.src = "./images/icon-close.svg";
      hamburgerMenu.style.display = "flex";
    } else {
      menu.src = "./images/icon-hamburger.svg";
      hamburgerMenu.style.display = "none";
    }
  });
});
