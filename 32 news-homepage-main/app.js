document.addEventListener("DOMContentLoaded", () => {
  const menuMobile = document.querySelector(".header__menu__mobile");
  const iconMenu = document.querySelector("#click-menu-open");
  const iconMenuClose = document.querySelector(".header__menu__mobile img");

  iconMenu.addEventListener("click", () => {
    menuMobile.style.display = "flex";
  });

  iconMenuClose.addEventListener("click", () => {
    menuMobile.style.display = "none";
  });
});
