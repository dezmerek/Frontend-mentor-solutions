document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector(
    ".nav__container--icon-hamburger"
  );
  const navMenu = document.querySelector(".nav__menu");

  hamburgerIcon.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
