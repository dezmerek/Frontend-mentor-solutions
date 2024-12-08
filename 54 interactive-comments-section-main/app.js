document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      function saveToLocalStorage(data) {
        localStorage.setItem("commentsData", JSON.stringify(data));
      }

      const container = document.querySelector(".container");

      data.comments.forEach((item, index) => {
        const addDiv = document.createElement("div");
        addDiv.classList.add("comment");

        addDiv.innerHTML = `
          <div class="comment__info">
            <img src="${item.user.image.png}" alt="">
            <h2>${item.user.username}</h2>
            <span>${item.createdAt}</span>
          </div>
          <p class="comment--content">${item.content}</p>
          <div class="comment__buttons">
          <div class="comment__buttons__rate">
            <button><img src="./images/icon-plus.svg" alt=""></button>
            <span>${item.score}</span>
            <button><img src="./images/icon-minus.svg" alt=""></button>
          </div>
          <button class="comment__buttons--reply">Reply</button>
          </div>
        `;
        container.appendChild(addDiv);
      });
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
});
