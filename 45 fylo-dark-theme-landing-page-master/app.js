document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email-input");
  const emailButton = document.getElementById("email-button");
  const emailError = document.getElementById("error");

  emailButton.addEventListener("click", function () {
    if (emailInput.value === "") {
      emailError.style.display = "block";
    } else {
      emailError.style.display = "none";
    }
  });
});
