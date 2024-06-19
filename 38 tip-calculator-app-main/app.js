document.addEventListener("DOMContentLoaded", () => {
  const inputBill = document.getElementById("bill");
  const inputPeople = document.getElementById("people");
  const tipAmount = document.querySelector(".calculator__completed__tip h1");
  const total = document.querySelector(".calculator__completed__total h1");
  const tipButtons = document.querySelectorAll(
    ".calculator__form__tip__buttons button"
  );
  const customTipInput = document.getElementById("tip");
  const resetButton = document.querySelector(".calculator__completed button");
  const errorPeople = document.querySelector(
    ".calculator__form__people .error"
  );

  let billValue = 0;
  let tipValue = 0;
  let peopleValue = 1;

  function calculateTip() {
    if (peopleValue === 0) {
      errorPeople.style.display = "block";
      errorPeople.textContent = "Can't be zero";
      inputPeople.style.outline = "2px solid hsl(0, 100%, 74%)";
      inputPeople.style.outlineBorder = "1rem)";
      tipAmount.textContent = "$0.00";
      total.textContent = "$0.00";
      return;
    } else {
      errorPeople.style.display = "none";
      inputPeople.style.outline = "none";
    }

    const tipPerPerson = (billValue * (tipValue / 100)) / peopleValue;
    const totalPerPerson = billValue / peopleValue + tipPerPerson;
    tipAmount.textContent = `$${tipPerPerson.toFixed(2)}`;
    total.textContent = `$${totalPerPerson.toFixed(2)}`;
  }

  inputBill.addEventListener("input", () => {
    billValue = parseFloat(inputBill.value) || 0;
    calculateTip();
  });

  inputPeople.addEventListener("input", () => {
    peopleValue = parseInt(inputPeople.value) || 0;
    calculateTip();
  });

  tipButtons.forEach((button) => {
    button.addEventListener("click", () => {
      tipButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      tipValue = parseInt(button.textContent);
      customTipInput.value = "";
      calculateTip();
    });
  });

  customTipInput.addEventListener("input", () => {
    tipButtons.forEach((btn) => btn.classList.remove("active"));
    tipValue = parseFloat(customTipInput.value) || 0;
    calculateTip();
  });

  resetButton.addEventListener("click", () => {
    inputBill.value = "";
    inputPeople.value = "";
    customTipInput.value = "";
    billValue = 0;
    tipValue = 0;
    peopleValue = 1;
    tipAmount.textContent = "$0.00";
    total.textContent = "$0.00";
    errorPeople.style.display = "none";
    inputPeople.style.outline = "none";
    tipButtons.forEach((btn) => btn.classList.remove("active"));
  });
});
