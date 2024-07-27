document.addEventListener("DOMContentLoaded", function () {
  const themeSwitcher = document.getElementById("theme-switcher");

  document.body.classList.add("dark-mode");

  themeSwitcher.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
});
