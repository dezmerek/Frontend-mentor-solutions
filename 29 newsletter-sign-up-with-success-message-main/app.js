document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".page__container__form input");
  const submitBtn = document.querySelector(".page__container__form button");
  const errorText = document.querySelector(".page__container__form--valid");
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const page = document.querySelector(".page");
  const success = document.querySelector(".success");
  const dismissBtn = document.querySelector(".success button");

  submitBtn.addEventListener("click", () => {
    if (input.value.lenght === 0 || !input.value.match(emailValidation)) {
      errorText.style.display = "flex";
      input.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
      input.style.borderColor = "hsl(4, 100%, 67%)";
      input.style.color = "hsl(4, 100%, 67%)";
    } else {
      errorText.style.display = "none";
      page.style.display = "none";
      success.style.display = "flex";

      dismissBtn.addEventListener("click", () => {
        location.reload();
      });
    }
  });
});
