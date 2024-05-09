document.addEventListener("DOMContentLoaded", function () {
  let shareButton = document.querySelector(".article__content-author__share");
  let articleShare = document.querySelector(".article__share");
  let articleShareButton = document.querySelector(
    ".article__share__icon-share"
  );

  shareButton.addEventListener("click", function () {
    articleShare.style.display =
      articleShare.style.display === "flex" ? "none" : "flex";
  });

  articleShareButton.addEventListener("click", function () {
    articleShare.style.display =
      articleShare.style.display === "flex" ? "none" : "flex";
  });
});
