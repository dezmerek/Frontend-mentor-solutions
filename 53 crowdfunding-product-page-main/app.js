document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  let ofTotal = document.getElementById("ofTotal");
  let totalBackers = document.getElementById("totalBackers");
  let daysLeft = document.getElementById("daysLeft");
  let barProgress = document.getElementById("barProgress");
  let BambooLeft = document.getElementById("BambooLeft");
  let BlackEditionLeft = document.getElementById("BlackEditionLeft");
  let MahoganyLeft = document.getElementById("MahoganyLeft");

  let ofTotalNumber = 89914;
  let totalBackersNumber = 5007;
  let daysLeftNumber = 56;
  let barProgressNumber = (ofTotalNumber / 100000) * 100;
  let BambooLeftNumber = 101;
  let BlackEditionLeftNumber = 64;
  let MahoganyLeftNumber = 0;

  ofTotal.innerHTML = "$" + ofTotalNumber.toLocaleString();
  totalBackers.innerHTML = totalBackersNumber.toLocaleString();
  daysLeft.innerHTML = daysLeftNumber;
  barProgress.style.width = barProgressNumber + "%";
  BambooLeft.innerHTML = BambooLeftNumber;
  BlackEditionLeft.innerHTML = BlackEditionLeftNumber;
  MahoganyLeft.innerHTML = MahoganyLeftNumber;

  console.log(barProgressNumber);

  hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("active");

    const isHamburger = hamburgerIcon.src.includes("icon-hamburger.svg");
    if (isHamburger) {
      hamburgerIcon.src = "./images/icon-close-menu.svg";
    } else {
      hamburgerIcon.src = "./images/icon-hamburger.svg";
    }
  });
});
