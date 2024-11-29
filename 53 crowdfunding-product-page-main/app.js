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

  const updateAvailability = () => {
    const modalCards = document.querySelectorAll(".modal__container__card");
    const aboutCards = document.querySelectorAll(".about__container__card");

    // Sprawdzamy karty w modal__container__card
    modalCards.forEach((card) => {
      const pledge2 = card.querySelector("#pledge2");
      const pledge3 = card.querySelector("#pledge3");
      const pledge4 = card.querySelector("#pledge4");

      if (pledge2 && bambooLeftNumber === 0) {
        card.classList.add("out");
      } else if (pledge3 && blackEditionLeftNumber === 0) {
        card.classList.add("out");
      } else if (pledge4 && mahoganyLeftNumber === 0) {
        card.classList.add("out");
      } else {
        card.classList.remove("out");
      }
    });

    aboutCards.forEach((card) => {
      const bambooLeftElement = card.querySelector("#bambooLeft");
      const blackEditionLeftElement = card.querySelector("#blackEditionLeft");
      const mahoganyLeftElement = card.querySelector("#mahoganyLeft");

      if (bambooLeftNumber === 0 && bambooLeftElement) {
        card.classList.add("out");
      } else if (blackEditionLeftNumber === 0 && blackEditionLeftElement) {
        card.classList.add("out");
      } else if (mahoganyLeftNumber === 0 && mahoganyLeftElement) {
        card.classList.add("out");
      } else {
        card.classList.remove("out");
      }
    });
  };

  updateAvailability();

  // Obsługa hamburger menu
  hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("active");

    const isHamburger = hamburgerIcon.src.includes("icon-hamburger.svg");
    if (isHamburger) {
      hamburgerIcon.src = "./images/icon-close-menu.svg";
    } else {
      hamburgerIcon.src = "./images/icon-hamburger.svg";
    }
  });

  // Zamknięcie modalnego okna, jeśli kliknięto poza nim
  document.addEventListener("click", (event) => {
    const isClickInsideModal = backProject.contains(event.target);
    const isClickOnButton = buttonBackProject.contains(event.target);
    const isClickOnSelectReward = Array.from(selectRewardButtons).some(
      (button) => button.contains(event.target)
    );
    const isClickOnBookmark = addBookmark.contains(event.target);

    if (
      !isClickInsideModal &&
      !isClickOnButton &&
      !isClickOnSelectReward &&
      backProject.classList.contains("active")
    ) {
      backProject.classList.remove("active");
    }

    if (isClickOnBookmark) {
      addBookmark.classList.toggle("addBookmark");
      const isBookmark = imageBookmark.src.includes("icon-bookmark-select.svg");
      if (isBookmark) {
        imageBookmark.src = "./images/icon-bookmark.svg";
      } else {
        imageBookmark.src = "./images/icon-bookmark-select.svg";
      }
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

  const updateSelection = () => {
    const modalCards = document.querySelectorAll(".modal__container__card");
    const modalPledge = document.querySelectorAll(
      ".modal__container__card__pledge"
    );

    modalCards.forEach((card) => card.classList.remove("selected"));
    modalPledge.forEach((pledge) => pledge.classList.remove("active"));

    const selectedRadio = Array.from(radioButtons).find(
      (radio) => radio.checked
    );
    if (selectedRadio) {
      const card = selectedRadio.closest(".modal__container__card");
      const pledge = card.querySelector(".modal__container__card__pledge");

      card.classList.add("selected");

      if (pledge) {
        pledge.classList.add("active");
      }
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

  const continueButtons = document.querySelectorAll(
    ".modal__container__card__pledge button"
  );

  continueButtons.forEach((continueButton) => {
    continueButton.addEventListener("click", () => {
      const pledgeAmountInput = continueButton
        .closest(".modal__container__card__pledge")
        .querySelector("input");
      const pledgeAmount = parseFloat(pledgeAmountInput.value);

      if (isNaN(pledgeAmount) || pledgeAmount <= 0) {
        alert("Please enter a valid pledge amount.");
        return;
      }

      ofTotalNumber += pledgeAmount;

      totalBackersNumber++;

      const selectedRadio = Array.from(radioButtons).find(
        (radio) => radio.checked
      );

      if (selectedRadio) {
        if (selectedRadio.id === "pledge2") {
          bambooLeftNumber--;
        } else if (selectedRadio.id === "pledge3") {
          blackEditionLeftNumber--;
        } else if (selectedRadio.id === "pledge4") {
          mahoganyLeftNumber--;
        }
      }

      updateAvailability();

      ofTotal.innerHTML = "$" + ofTotalNumber.toLocaleString();
      totalBackers.innerHTML = totalBackersNumber.toLocaleString();
      daysLeft.innerHTML = daysLeftNumber;
      barProgressNumber = (ofTotalNumber / 100000) * 100;
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

      backProject.classList.toggle("active");

      const confirmation = document.querySelector(".confirmation");
      confirmation.classList.add("active");
    });
  });
  const confirmation = document.querySelector(".confirmation");
  const buttomConfirmation = document.getElementById("confirmationButton");
  buttomConfirmation.addEventListener("click", () => {
    confirmation.classList.remove("active");
  });
});
