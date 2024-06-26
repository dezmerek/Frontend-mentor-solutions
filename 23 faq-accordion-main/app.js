let questions = document.querySelectorAll(".faq__item");
let buttons = document.querySelectorAll(".card__rating button");

let toggleActiveQuestion = () => {
  questions.forEach((question) => {
    let questionHeader = question.querySelector(".faq__item__question");
    questionHeader.addEventListener("click", () => {
      question.classList.toggle("faq__item--active");
    });
  });
};

toggleActiveQuestion();
