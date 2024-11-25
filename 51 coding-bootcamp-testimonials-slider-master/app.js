document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const image = document.querySelectorAll(".image");

  let currentIndex = 0;

  const changeImage = (direction) => {
    image[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + direction + image.length) % image.length;
    image[currentIndex].classList.add("active");
  };

  prevButton.addEventListener("click", () => {
    changeImage(-1);
  });

  nextButton.addEventListener("click", () => {
    changeImage(1);
  });

  document.addEventListener("keydown", () => {
    if (event.key === "ArrowLeft") {
      changeImage(-1);
    } else if (event.key === "ArrowRight") {
      changeImage(1);
    }
  });
});
