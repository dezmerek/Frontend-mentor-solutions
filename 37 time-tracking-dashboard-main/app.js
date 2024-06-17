document.addEventListener("DOMContentLoaded", () => {
  let data = [];

  fetch("./data.json")
    .then((response) => response.json())
    .then((fetchedData) => {
      data = fetchedData;
      updateDOM("weekly");
    })
    .catch((error) => console.log("Error: ", error));

  const profileSwitches = document.querySelectorAll(".profile__switch p");

  profileSwitches.forEach((switchElement) => {
    switchElement.addEventListener("click", (event) => {
      const timeframe = event.target.textContent.toLowerCase();
      updateDOM(timeframe);

      profileSwitches.forEach((el) => el.classList.remove("active"));
      event.target.classList.add("active");
    });
  });

  function updateDOM(timeframe) {
    data.forEach((item, index) => {
      const trackElement = document.querySelectorAll(".track")[index];
      const currentHours = item.timeframes[timeframe].current;
      const previousHours = item.timeframes[timeframe].previous;

      trackElement.querySelector(".track__info__category h5").textContent =
        item.title;
      trackElement.querySelector(
        ".track__info__time h1"
      ).textContent = `${currentHours}hrs`;
      trackElement.querySelector(
        ".track__info__time p"
      ).textContent = `Last ${capitalize(timeframe)} - ${previousHours}hrs`;
    });
  }

  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
