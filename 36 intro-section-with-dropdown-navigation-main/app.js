document.addEventListener("DOMContentLoaded", () => {
  const featuresDesktop = document.querySelector(
    ".header__desktop__left__menu__content__features__name"
  );
  const featuresDesktopContainer = document.querySelector(
    ".header__desktop__left__menu__content__features__container"
  );

  const companyDesktop = document.querySelector(
    ".header__desktop__left__menu__content__company__name"
  );
  const companyDesktopContainer = document.querySelector(
    ".header__desktop__left__menu__content__company__container"
  );

  const menuOpen = document.querySelector(".header__mobile__menu");
  const burgerContainer = document.querySelector(".burger-menu-container");
  const burgerMenu = document.querySelector(".burger-menu");

  const menuClose = document.querySelector(".burger-menu__img img");

  const burgerFeatures = document.querySelector(
    ".burger-menu__content__features__name"
  );
  const burgerFeaturesContainer = document.querySelector(
    ".burger-menu__content__features__container"
  );

  const burgerCompany = document.querySelector(
    ".burger-menu__content__company__name"
  );
  const burgerCompanyContainer = document.querySelector(
    ".burger-menu__content__company__container"
  );

  const toggleDisplay = (element, container) => {
    if (container.style.display === "flex") {
      container.style.display = "none";
    } else {
      container.style.display = "flex";
    }
  };

  if (featuresDesktop && featuresDesktopContainer) {
    featuresDesktop.addEventListener("click", () => {
      toggleDisplay(featuresDesktop, featuresDesktopContainer);
    });
  }

  if (companyDesktop && companyDesktopContainer) {
    companyDesktop.addEventListener("click", () => {
      toggleDisplay(companyDesktop, companyDesktopContainer);
    });
  }

  if (menuOpen && burgerContainer && burgerMenu) {
    menuOpen.addEventListener("click", () => {
      burgerContainer.style.display = "flex";
      burgerMenu.style.display = "flex";
    });
  }

  if (menuClose && burgerContainer && burgerMenu) {
    menuClose.addEventListener("click", () => {
      burgerContainer.style.display = "none";
      burgerMenu.style.display = "none";
    });
  }

  if (burgerFeatures && burgerFeaturesContainer) {
    burgerFeatures.addEventListener("click", () => {
      toggleDisplay(burgerFeatures, burgerFeaturesContainer);
    });
  }

  if (burgerCompany && burgerCompanyContainer) {
    burgerCompany.addEventListener("click", () => {
      toggleDisplay(burgerCompany, burgerCompanyContainer);
    });
  }
});
