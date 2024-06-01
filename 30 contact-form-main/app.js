document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.querySelector(".contact__form__name--first input");
  const lastName = document.querySelector(".contact__form__name--last input");
  const email = document.querySelector(".contact__form__email input");
  const queryTypes = document.querySelectorAll(".contact__form__type input");
  const message = document.querySelector(".contact__form__message textarea");
  const consent = document.querySelector(".contact__form__consent input");
  const submitBtn = document.querySelector("button");
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const firstNameError = document.querySelector(
    ".contact__form__name--errorFirst"
  );
  const lastNameError = document.querySelector(
    ".contact__form__name--errorLast"
  );
  const emailError = document.querySelector(".contact__form__email--error");
  const queryTypeError = document.querySelector(".contact__form__type--error");
  const messageError = document.querySelector(".contact__form__message--error");
  const consentError = document.querySelector(".contact__form__consent--error");

  const alert = document.querySelector(".alert");

  submitBtn.addEventListener("click", () => {
    let isValid = true;

    if (firstName.value.length === 0) {
      firstNameError.innerText = "This field is required";
      firstNameError.style.display = "flex";
      isValid = false;
    } else {
      firstNameError.style.display = "none";
    }

    if (lastName.value.length === 0) {
      lastNameError.innerText = "This field is required";
      lastNameError.style.display = "flex";
      isValid = false;
    } else {
      lastNameError.style.display = "none";
    }

    if (email.value.lenght === 0 || !email.value.match(emailValidation)) {
      emailError.style.display = "flex";
      emailError.innerText = "Please enter a valid email address";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    let queryTypeChecked = false;
    for (let i = 0; i < queryTypes.length; i++) {
      if (queryTypes[i].checked) {
        queryTypeChecked = true;
        break;
      }
    }

    if (!queryTypeChecked) {
      queryTypeError.innerText = "This field is required";
      queryTypeError.style.display = "flex";
      isValid = false;
    } else {
      queryTypeError.style.display = "none";
    }

    if (message.value.length === 0) {
      messageError.innerText = "This field is required";
      messageError.style.display = "flex";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }

    if (!consent.checked) {
      consentError.innerText =
        "To submit this form, please consent to being contacted";
      consentError.style.display = "flex";
      isValid = false;
    } else {
      consentError.style.display = "none";
    }

    if (isValid) {
      alert.style.display = "flex";
      firstName.value = "";
      lastName.value = "";
      email.value = "";
      queryType.checked = false;
      message.value = "";
      consent.checked = false;
    }
  });
});
