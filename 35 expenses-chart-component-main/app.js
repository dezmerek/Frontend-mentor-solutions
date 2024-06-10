document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      processData(data);
      amountData(data);
    })
    .catch((error) => console.log("Error: ", error));

  function processData(data) {
    const chartDay = document.querySelectorAll(".spend__chart__column p");

    data.forEach((item, index) => {
      if (chartDay[index]) {
        chartDay[index].textContent = item.day;
      }
    });
  }

  function amountData(data) {
    const chartColumn = document.querySelectorAll(
      ".spend__chart__column figure"
    );

    const nowDay = new Date()
      .toLocaleString("en-US", { weekday: "short" })
      .toLowerCase();

    data.forEach((item, index) => {
      if (chartColumn[index]) {
        chartColumn[index].style.maxHeight = `${item.amount * 3}px`;
        chartColumn[index].setAttribute("amount", "$" + item.amount);
      }

      if (item.day === nowDay) {
        chartColumn[index].style.backgroundColor = "hsl(186, 34%, 60%)";
        chartColumn[index].classList.add("highlight");
      } else {
        chartColumn[index].classList.remove("highlight");
      }
    });
  }
});
