document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.querySelector('input[type="range"]');

  function updateRangeBackground() {
    const value =
      ((rangeInput.value - rangeInput.min) /
        (rangeInput.max - rangeInput.min)) *
      100;
    const color = `linear-gradient(to right, hsl(174, 86%, 45%) ${value}%, hsl(174, 77%, 80%) ${value}%)`;
    rangeInput.style.background = color;
  }

  rangeInput.addEventListener("input", updateRangeBackground);
  updateRangeBackground();
});
