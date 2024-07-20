document.addEventListener("DOMContentLoaded", function () {
  const rangeInput = document.getElementById("slider");
  const pageviews = document.getElementById("pageviews");
  const price = document.getElementById("price");
  const billingToggle = document.getElementById("billing-toggle");

  const pricingData = [
    { views: "10k", price: 8 },
    { views: "50k", price: 12 },
    { views: "100k", price: 16 },
    { views: "500k", price: 24 },
    { views: "1m", price: 32 },
  ];

  function updatePricing() {
    const value = rangeInput.value;
    const billingMultiplier = billingToggle.checked ? 0.75 : 1;
    const currentData = pricingData[value];

    pageviews.textContent = `${currentData.views} Pageviews`;
    price.textContent = `$${(currentData.price * billingMultiplier).toFixed(
      2
    )}`;
  }

  function updateRangeBackground() {
    const value =
      ((rangeInput.value - rangeInput.min) /
        (rangeInput.max - rangeInput.min)) *
      100;
    const color = `linear-gradient(to right, hsl(174, 86%, 45%) ${value}%, hsl(174, 77%, 80%) ${value}%)`;
    rangeInput.style.background = color;
  }

  rangeInput.addEventListener("input", () => {
    updatePricing();
    updateRangeBackground();
  });

  billingToggle.addEventListener("change", updatePricing);

  updatePricing();
  updateRangeBackground();
});
