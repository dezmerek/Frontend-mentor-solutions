document.addEventListener("DOMContentLoaded", () => {
  let submitBtn = document.querySelector(".card__rating--btn");
  let card = document.querySelector(".card");
  let cardSubmit = document.querySelector(".card-submit");
  let ratingBtns = document.querySelectorAll(".card__rating button");

  ratingBtns.forEach((button) => {
    button.addEventListener("click", () => {
      ratingBtns.forEach((btn) => btn.classList.remove("button--active"));
      button.classList.add("button--active");
    });
  });

  submitBtn.addEventListener("click", () => {
    card.style.display = "none";
    cardSubmit.style.display = "flex";
  });
});
