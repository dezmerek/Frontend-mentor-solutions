document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".page__form input");
  const submitBtn = document.querySelector(".page__form button");
  const textError = document.querySelector(".page__form--error");
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  submitBtn.addEventListener("click", () => {
    if (input.value.lenght === 0 || !input.value.match(emailValidation)) {
      textError.style.display = "flex";
      textError.innerHTML = "Please provide a vilid email address";
      input.style.border = "1px solid red";
    } else {
      textError.style.display = "none";
      input.style.border = "1px solid hsl(223, 100%, 88%)";
    }
  });
});
