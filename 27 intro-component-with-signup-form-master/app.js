document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.querySelector(".first-name input");
  const lastName = document.querySelector(".last-name input");
  const email = document.querySelector(".email input");
  const password = document.querySelector(".password input ");
  const submitBtn = document.querySelector(".learn__form-content__form button");

  const errorIcon = document.querySelector(
    ".learn__form-content__form__container img.img-fname"
  );
  const errorIcon2 = document.querySelector(
    ".learn__form-content__form__container img.img-lname"
  );
  const errorIcon3 = document.querySelector(
    ".learn__form-content__form__container img.img-email"
  );
  const errorIcon4 = document.querySelector(
    ".learn__form-content__form__container img.img-password"
  );

  const errorTextFirstName = document.querySelector(".first-name--text");

  const errorTextLastName = document.querySelector(".last-name--text");
  const errorTextEmail = document.querySelector(".email--text");
  const errorTextPassword = document.querySelector(".passoword--text");

  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  submitBtn.addEventListener("click", () => {
    if (firstName.value.length === 0) {
      errorIcon.style.display = "flex";
      errorTextFirstName.innerHTML = "First Name cannot be empty";
    } else {
      errorIcon.style.display = "none";
      errorTextFirstName.innerHTML = "";
    }

    if (lastName.value.length === 0) {
      errorIcon2.style.display = "flex";
      errorTextLastName.innerHTML = "Last Name cannot be empty";
    } else {
      errorIcon2.style.display = "none";
      errorTextLastName.innerHTML = "";
    }

    if (email.value.length === 0) {
      errorIcon3.style.display = "flex";
      errorTextEmail.innerHTML = "Email cannot be empty";
    } else if (!emailValidation.test(email.value)) {
      errorIcon3.style.display = "flex";
      errorTextEmail.innerHTML = "Looks like this is not an email";
    } else {
      errorIcon3.style.display = "none";
      errorTextEmail.innerHTML = "";
    }

    if (password.value.length === 0) {
      errorIcon4.style.display = "flex";
      errorTextPassword.innerHTML = "Password cannot be empty";
    } else {
      errorIcon4.style.display = "none";
      errorTextPassword.innerHTML = "";
    }
  });
});
