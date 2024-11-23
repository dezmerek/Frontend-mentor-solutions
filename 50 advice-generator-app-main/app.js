document.addEventListener("DOMContentLoaded", function () {
  let h1 = document.querySelector("h1");
  let p = document.querySelector("p");
  let button = document.querySelector("button");

  button.addEventListener("click", function () {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then(data);

    function data(data) {
      h1.textContent = "Advice #" + data.slip.id;
      p.textContent = data.slip.advice;
    }
  });
});
