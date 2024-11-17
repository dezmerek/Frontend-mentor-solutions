document.addEventListener("DOMContentLoaded", function () {
  const hamburgerIcon = document.querySelector("#hamburger-icon");
  const navMobile = document.querySelector(".header__nav--mobile");
  const navLinks = document.querySelector(".header__nav__links");

  hamburgerIcon.addEventListener("click", function () {
    navMobile.classList.toggle("active");
    navLinks.classList.toggle("active");

    // Zmień ikonę hamburgera na ikonę zamknięcia (close)
    if (navMobile.classList.contains("active")) {
      hamburgerIcon.src = "./images/icon-close.svg";
    } else {
      hamburgerIcon.src = "./images/icon-hamburger.svg";
    }
  });
});
