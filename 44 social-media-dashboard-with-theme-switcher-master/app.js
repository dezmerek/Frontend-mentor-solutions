document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");

  themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
