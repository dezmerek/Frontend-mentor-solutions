document.addEventListener("DOMContentLoaded", function () {
  const inputAmount = document.getElementById("amount");
  const inputTerm = document.getElementById("term");
  const inputRate = document.getElementById("rate");
  const radioRepayment = document.getElementById("repayment");
  const radioInterestOnly = document.getElementById("interest-only");
  const ButtonCalculate = document.getElementById("calculate");
  const ButtonReset = document.getElementById("reset");
  const resultMonth = document.getElementById("month");
  const resultTotal = document.getElementById("total");
  const error = document.querySelectorAll(".error");
  const shown = document.querySelector(".calculator__shown");
  const result = document.querySelector(".calculator__result");

  ButtonCalculate.addEventListener("click", function () {
    const amount = inputAmount.value;
    const term = inputTerm.value * 12;
    const rate = inputRate.value;
    let isValid = true;

    if (amount <= 0) {
      isValid = false;
      error[0].style.display = "flex";
    } else {
      error[0].style.display = "none";
    }

    if (term <= 0) {
      isValid = false;
      error[1].style.display = "flex";
    } else {
      error[1].style.display = "none";
    }

    if (rate <= 0) {
      isValid = false;
      error[2].style.display = "flex";
    } else {
      error[2].style.display = "none";
    }

    if (!radioRepayment.checked && !radioInterestOnly.checked) {
      isValid = false;
      error[3].style.display = "flex";
    } else {
      error[3].style.display = "none";
    }

    if (isValid) {
      const monthlyRate = rate / 100 / 12;

      const monthlyPayment =
        (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term));

      const formatter = new Intl.NumberFormat("en-GB", {
        style: "currency",
        currency: "GBP",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

      resultMonth.textContent = formatter.format(monthlyPayment);
      resultTotal.textContent = formatter.format(monthlyPayment * term);

      result.style.display = "flex";
      shown.style.display = "none";
    } else {
      result.style.display = "none";
      shown.style.display = "flex";
    }
  });

  ButtonReset.addEventListener("click", () => {
    location.reload();
  });
});
