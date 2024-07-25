document.addEventListener("DOMContentLoaded", function () {
  let checkbox = document.getElementById("checkbox");

  checkbox.addEventListener("change", function () {
    let amount = document.querySelectorAll(".box__card h1 span");

    if (checkbox.checked) {
      amount[0].textContent = "19.99";
      amount[1].textContent = "19.99";
      amount[2].textContent = "19.99";
    } else {
      amount[0].textContent = "199.99";
      amount[1].textContent = "249.99";
      amount[2].textContent = "399.99";
    }
  });
});
