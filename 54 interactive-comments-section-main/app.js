document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".container");

      data.comments.forEach((item) => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const isCurrentUser = item.user.username === data.currentUser.username;
        const usernameWithYou = isCurrentUser
          ? `${item.user.username} <span class="you-label">(you)</span>`
          : item.user.username;

        commentDiv.innerHTML = `
    <div class="comment__container">
      <div class="comment__container__info">
        <img src="${item.user.image.png}" alt="User Avatar">
        <h2>${usernameWithYou}</h2>
        <span>${item.createdAt}</span>
      </div>
      <p class="comment__container--content">${item.content}</p>
      <div class="comment__container__rate">
        <button><img src="./images/icon-plus.svg" alt="Increase score"></button>
        <span>${item.score}</span>
        <button><img src="./images/icon-minus.svg" alt="Decrease score"></button>
      </div>
      ${
        isCurrentUser
          ? `
        <div class="comment__container--actions">
          <button class="comment__container--edit">Edit</button>
          <button class="comment__container--delete">Delete</button>
        </div>
      `
          : '<button class="comment__container--reply">Reply</button>'
      }
    </div>
  `;

        const repliesContainer = document.createElement("div");
        repliesContainer.classList.add("comment__replies");

        if (item.replies && item.replies.length > 0) {
          item.replies.forEach((reply) => {
            const isReplyCurrentUser =
              reply.user.username === data.currentUser.username;
            const replyUsernameWithYou = isReplyCurrentUser
              ? `${reply.user.username} <span class="you-label">(you)</span>`
              : reply.user.username;

            const replyDiv = document.createElement("div");
            replyDiv.classList.add("comment__replies__container");

            replyDiv.innerHTML = `
        <div class="comment__replies__container__info">
          <img src="${reply.user.image.png}" alt="User Avatar">
          <h2>${replyUsernameWithYou}</h2>
          <span>${reply.createdAt}</span>
        </div>
        <p class="comment__replies__container--content">
          <span>@${reply.replyingTo}</span>
          ${reply.content}
        </p>
        <div class="comment__replies__container__rate">
          <button><img src="./images/icon-plus.svg" alt="Increase score"></button>
          <span>${reply.score}</span>
          <button><img src="./images/icon-minus.svg" alt="Decrease score"></button>
        </div>
        ${
          isReplyCurrentUser
            ? `
          <div class="comment__replies__container--actions">
            <button class="comment__replies__container--delete">Delete</button>
            <button class="comment__replies__container--edit">Edit</button>
          </div>
        `
            : '<button class="comment__container--reply">Reply</button>'
        }
      `;
            repliesContainer.appendChild(replyDiv);
          });
        }

        commentDiv.appendChild(repliesContainer);
        container.appendChild(commentDiv);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
