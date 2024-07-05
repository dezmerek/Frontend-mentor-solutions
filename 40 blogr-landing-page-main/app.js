document.addEventListener("DOMContentLoaded", () => {
  const toggleMenuVisibility = (event) => {
    const currentMenu = event.currentTarget.nextElementSibling;
    const allMenus = document.querySelectorAll(
      ".header__desktop__nav__menu__hide, .header__mobile__nav__menu__hide"
    );
    const allArrows = document.querySelectorAll(
      ".header__desktop__nav__menu--name img, .header__mobile__nav__menu--name img"
    );

    allMenus.forEach((menu) => {
      if (menu !== currentMenu) {
        menu.style.display = "none";
        menu.classList.remove("header__mobile__nav__menu__show");
      }
    });

    allArrows.forEach((arrow) => {
      if (arrow !== event.currentTarget.querySelector("img")) {
        arrow.classList.remove("rotate-arrow");
      }
    });

    if (
      currentMenu.style.display === "flex" ||
      currentMenu.classList.contains("header__mobile__nav__menu__show")
    ) {
      currentMenu.style.display = "none";
      currentMenu.classList.remove("header__mobile__nav__menu__show");
      event.currentTarget.querySelector("img").classList.remove("rotate-arrow");
    } else {
      currentMenu.style.display = "flex";
      currentMenu.classList.add("header__mobile__nav__menu__show");
      event.currentTarget.querySelector("img").classList.add("rotate-arrow");
    }
  };

  const menuItems = document.querySelectorAll(
    ".header__desktop__nav__menu--name, .header__mobile__nav__menu--name"
  );
  menuItems.forEach((menuItem) => {
    menuItem.addEventListener("click", toggleMenuVisibility);
  });
});
