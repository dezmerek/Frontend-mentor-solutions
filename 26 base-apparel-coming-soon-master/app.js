document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.querySelector(".content__input button");
  const emailInput = document.querySelector(
    ".content__input__input-container input"
  );
  const errorIcon = document.querySelector(
    ".content__input__input-container img"
  );
  const errorText = document.querySelector(".content--error");
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  submitBtn.addEventListener("click", () => {
    if (
      emailInput.value.length === 0 ||
      !emailInput.value.match(emailValidation)
    ) {
      errorIcon.style.display = "flex";
      errorText.textContent = "Please provide a valid email address";
      errorText.style.color = "hsl(0, 93%, 68%)";
    } else {
      errorIcon.style.display = "none";
      errorText.textContent = "Thank you for subscribing to our newsletter!";
      errorText.style.color = "green";
    }
  });
});
