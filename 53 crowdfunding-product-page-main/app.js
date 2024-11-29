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
  const backProject = document.querySelector(".modal");
  const buttonBackProject = document.querySelector(".info__cta button");
  const iconCloseModal = document.querySelector(".modal__header img");
  const selectRewardButtons = document.querySelectorAll(
    ".about__container__card button:not(.about__container__card--out button)"
  );

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

  buttonBackProject.addEventListener("click", () => {
    backProject.classList.toggle("active");
  });

  iconCloseModal.addEventListener("click", () => {
    backProject.classList.toggle("active");
  });

  ////////////////////////////
  const radioButtons = document.querySelectorAll(
    'input[type="radio"][name="group1"]'
  );
  const modalCards = document.querySelectorAll(".modal__container__card");

  const updateSelection = () => {
    modalCards.forEach((card) => card.classList.remove("selected"));

    const selectedRadio = Array.from(radioButtons).find(
      (radio) => radio.checked
    );
    if (selectedRadio) {
      const card = selectedRadio.closest(".modal__container__card");
      card.classList.add("selected");
    }
  };

  radioButtons.forEach((radio) => {
    radio.addEventListener("change", updateSelection);
  });

  selectRewardButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      if (!backProject.classList.contains("active")) {
        backProject.classList.add("active");
      }
      radioButtons[index + 1].checked = true;
      updateSelection();
    });
  });
});
