document.addEventListener("DOMContentLoaded", () => {
  const dayInput = document.querySelector(".calculator__date__day input");
  const monthInput = document.querySelector(".calculator__date__month input");
  const yearInput = document.querySelector(".calculator__date__year input");

  const dayError = document.querySelector(
    ".calculator__date__day .calculator__date--error"
  );
  const monthError = document.querySelector(
    ".calculator__date__month .calculator__date--error"
  );
  const yearError = document.querySelector(
    ".calculator__date__year .calculator__date--error"
  );

  const dayLabel = document.querySelector(".calculator__date__day label");
  const monthLabel = document.querySelector(".calculator__date__month label");
  const yearLabel = document.querySelector(".calculator__date__year label");

  const submitBtn = document.querySelector(".calculator__hr img");

  submitBtn.addEventListener("click", () => {
    const daysInMonth = new Date(
      yearInput.value,
      monthInput.value,
      0
    ).getDate();

    if (
      dayInput.value < 1 ||
      dayInput.value > daysInMonth ||
      isNaN(dayInput.value)
    ) {
      dayError.style.display = "block";
      dayError.innerText = "Must be a valid day";
      dayInput.style.borderColor = "hsl(0, 100%, 67%)";
      dayLabel.style.color = "hsl(0, 100%, 67%)";
    } else {
      dayError.style.display = "none";
      dayInput.style.borderColor = "";
      dayLabel.style.color = "";
    }

    if (monthInput.value < 1 || monthInput.value > 12) {
      monthError.style.display = "block";
      monthError.innerText = "Must be a valid month";
      monthInput.style.borderColor = "hsl(0, 100%, 67%)";
      monthLabel.style.color = "hsl(0, 100%, 67%)";
    } else {
      monthError.style.display = "none";
      monthInput.style.borderColor = "";
      monthLabel.style.color = "";
    }

    if (yearInput.value < 1 || yearInput.value > new Date().getFullYear()) {
      yearError.style.display = "block";
      yearError.innerText = "Must be in the past";
      yearInput.style.borderColor = "hsl(0, 100%, 67%)";
      yearLabel.style.color = "hsl(0, 100%, 67%)";
    } else {
      yearError.style.display = "none";
      yearInput.style.borderColor = "";
      yearLabel.style.color = "";
    }
  });
});
