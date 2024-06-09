document.addEventListener("DOMContentLoaded", () => {
  const cardNumber = document.querySelector(".card__front__data--number");
  const cardName = document.querySelector(".card__front__data--name");
  const cardDate = document.querySelector(".card__front__data--date");
  const cardCVC = document.querySelector(".card__back--cvc");

  const inputName = document.querySelector("#name");
  const inputCard = document.querySelector("#number");
  const inputDateMM = document.querySelector("#MM");
  const inputDateYY = document.querySelector("#YY");
  const inputCVC = document.querySelector("#cvc");

  const btnSubmit = document.querySelector("button");

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\s+/g, "").toUpperCase();
    const limited = cleaned.substring(0, 16);
    const formatted = limited.replace(/(.{4})/g, "$1 ");
    return formatted.trim();
  };

  inputCard.addEventListener("input", () => {
    const formattedValue = formatCardNumber(inputCard.value);
    inputCard.value = formattedValue;
    cardNumber.textContent = formattedValue || "0000 0000 0000 0000";
  });

  inputName.addEventListener("input", () => {
    cardName.textContent = inputName.value || "Jane Appleseed";
  });

  const updateCardDate = () => {
    const mm = inputDateMM.value.padStart(2, "0");
    const yy = inputDateYY.value.padStart(2, "0");
    cardDate.textContent = `${mm}/${yy}` || "00/00";
  };

  inputDateMM.addEventListener("input", updateCardDate);
  inputDateYY.addEventListener("input", updateCardDate);

  inputCVC.addEventListener("input", () => {
    cardCVC.textContent = inputCVC.value || "000";
  });

  btnSubmit.addEventListener("click", () => {
    const nameError = document.getElementById("nameError");
    const numberError = document.getElementById("numberError");
    const cvcError = document.getElementById("cvcError");
    const dateError = document.getElementById("dateError");
    let isValid = true;

    if (inputName.value.length === 0) {
      nameError.textContent = "Name is required";
      inputName.style.border = "1px solid red";
      isValid = false;
    } else {
      nameError.textContent = "";
      inputName.style.border = "";
    }

    const cardNumber = inputCard.value.replace(/\s+/g, "");
    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
      numberError.textContent = "Wrong format, numbers only";
      inputCard.style.border = "1px solid red";
      isValid = false;
    } else {
      numberError.textContent = "";
      inputCard.style.border = "";
    }

    if (inputDateMM.value.length !== 2 || inputDateYY.value.length !== 2) {
      dateError.textContent = "Can't be blank";

      if (inputDateMM.value.length !== 2) {
        inputDateMM.style.border = "1px solid red";
      } else {
        inputDateMM.style.border = "";
      }
      if (inputDateYY.value.length !== 2) {
        inputDateYY.style.border = "1px solid red";
      } else {
        inputDateYY.style.border = "";
      }
      isValid = false;
    } else {
      inputDateMM.style.border = "";
      inputDateYY.style.border = "";
      dateError.textContent = "";
    }

    if (inputCVC.value.length !== 3) {
      cvcError.textContent = "Can't be blank";
      isValid = false;
      inputCVC.style.border = "1px solid red";
    } else {
      cvcError.textContent = "";
      inputCVC.style.border = "";
    }

    const form = document.querySelector(".card__form");
    const complete = document.querySelector(".card__complete");
    if (isValid === true) {
      form.style.display = "none";
      complete.style.display = "flex";
    }
  });

  const continueBtn = document.querySelector(".card__complete button");

  continueBtn.addEventListener("click", () => {
    window.location.reload();
  });
});
