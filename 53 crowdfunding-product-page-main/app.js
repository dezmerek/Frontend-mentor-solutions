document.addEventListener("DOMContentLoaded", () => {
  const hamburgerIcon = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  let ofTotal = document.getElementById("ofTotal");
  let totalBackers = document.getElementById("totalBackers");
  let daysLeft = document.getElementById("daysLeft");
  let barProgress = document.getElementById("barProgress");
  let bambooLeft = document.querySelectorAll("#bambooLeft");
  let blackEditionLeft = document.querySelectorAll("#blackEditionLeft");
  let mahoganyLeft = document.querySelectorAll("#mahoganyLeft");
  let addBookmark = document.querySelector(".info__cta__bookmark");
  const imageBookmark = document.querySelector(".info__cta__bookmark img");

  let ofTotalNumber = 89914;
  let totalBackersNumber = 5007;
  let daysLeftNumber = 56;
  let barProgressNumber = (ofTotalNumber / 100000) * 100;
  let bambooLeftNumber = 101;
  let blackEditionLeftNumber = 64;
  let mahoganyLeftNumber = 0;

  ofTotal.innerHTML = "$" + ofTotalNumber.toLocaleString();
  totalBackers.innerHTML = totalBackersNumber.toLocaleString();
  daysLeft.innerHTML = daysLeftNumber;
  barProgress.style.width = barProgressNumber + "%";

  bambooLeft.forEach((count) => {
    count.innerHTML = bambooLeftNumber;
  });
  blackEditionLeft.forEach((count) => {
    count.innerHTML = blackEditionLeftNumber;
  });
  mahoganyLeft.forEach((count) => {
    count.innerHTML = mahoganyLeftNumber;
  });

  hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("active");

    const isHamburger = hamburgerIcon.src.includes("icon-hamburger.svg");
    if (isHamburger) {
      hamburgerIcon.src = "./images/icon-close-menu.svg";
    } else {
      hamburgerIcon.src = "./images/icon-hamburger.svg";
    }
  });

  addBookmark.addEventListener("click", () => {
    addBookmark.classList.toggle("addBookmark");

    const isBookmark = imageBookmark.src.includes("icon-bookmark-select.svg");
    if (isBookmark) {
      imageBookmark.src = "./images/icon-bookmark.svg";
    } else {
      imageBookmark.src = "./images/icon-bookmark-select.svg";
    }
  });
});
