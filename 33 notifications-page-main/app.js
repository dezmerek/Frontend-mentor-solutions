document.addEventListener("DOMContentLoaded", () => {
  const active = document.querySelectorAll(".active-dot");
  const activeBox = document.querySelectorAll(".active-box");
  let activeNumber = document.querySelector(".notif__header__count span");

  activeNumber.innerHTML = active.length;

  const markButton = document.querySelector(".notif__header--mark");

  markButton.addEventListener("click", () => {
    active.forEach((element) => {
      element.classList.remove("active-dot");
    });

    activeBox.forEach((element) => {
      element.classList.remove("active-box");
    });

    let updateActive = document.querySelectorAll(".active-dot");
    activeNumber.innerHTML = updateActive.length;
  });
});
