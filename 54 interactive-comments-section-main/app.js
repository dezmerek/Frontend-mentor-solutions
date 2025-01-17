document.addEventListener("DOMContentLoaded", () => {
  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const container = document.querySelector(".container");

      const updateScore = (item, change) => {
        item.score += change;
        return item.score;
      };

      const deleteComment = (commentDiv, parentItem, commentIndex) => {
        parentItem.splice(commentIndex, 1);
        commentDiv.remove();
      };

      const displayComments = (comments, parentItem = data.comments) => {
        comments.forEach((item, index) => {
          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");

          const isCurrentUser =
            item.user.username === data.currentUser.username;
          const usernameWithYou = isCurrentUser
            ? `${item.user.username} <span class="you-label">you</span>`
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
                <button class="increase-score"><img src="./images/icon-plus.svg" alt="Increase score"></button>
                <span class="score">${item.score}</span>
                <button class="decrease-score"><img src="./images/icon-minus.svg" alt="Decrease score"></button>
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

          // Obsługa punktów +/-
          const increaseBtn = commentDiv.querySelector(".increase-score");
          const decreaseBtn = commentDiv.querySelector(".decrease-score");
          const scoreSpan = commentDiv.querySelector(".score");

          increaseBtn.addEventListener("click", () => {
            const newScore = updateScore(item, 1);
            scoreSpan.textContent = newScore;
          });

          decreaseBtn.addEventListener("click", () => {
            const newScore = updateScore(item, -1);
            scoreSpan.textContent = newScore;
          });

          if (isCurrentUser) {
            const deleteBtn = commentDiv.querySelector(
              ".comment__container--delete"
            );
            deleteBtn.addEventListener("click", () =>
              deleteComment(commentDiv, parentItem, index)
            );
          }

          const handleReply = (
            parentComment,
            replyingTo,
            parentItem,
            isReplyToReply
          ) => {
            const replyForm = document.createElement("form");
            replyForm.classList.add("add-comment");
            replyForm.innerHTML = `
              <textarea class="add-comment__content" placeholder="Add a reply..."></textarea>
              <img src="${data.currentUser.image.png}" alt="User Avatar" class="add-comment__avatar">
              <button class="add-comment__button" type="submit">REPLY</button>
            `;
            parentComment.insertAdjacentElement("afterend", replyForm);

            replyForm.addEventListener("submit", (event) => {
              event.preventDefault();
              const newReplyContent = replyForm.querySelector(
                ".add-comment__content"
              ).value;

              if (newReplyContent.trim() !== "") {
                const newReply = {
                  user: data.currentUser,
                  createdAt: "Just now",
                  content: newReplyContent,
                  score: 0,
                  replyingTo: replyingTo,
                };

                if (!parentItem.replies) {
                  parentItem.replies = [];
                }

                parentItem.replies.push(newReply);

                const replyDiv = document.createElement("div");
                replyDiv.classList.add("comment__replies__container");

                replyDiv.innerHTML = `
                  <div class="comment__replies__container__info">
                    <img src="${newReply.user.image.png}" alt="User Avatar">
                    <h2>${newReply.user.username} <span class="you-label">you</span></h2>
                    <span>${newReply.createdAt}</span>
                  </div>
                  <p class="comment__replies__container--content">
                    <span>@${newReply.replyingTo}</span>
                    ${newReply.content}
                  </p>
                  <div class="comment__replies__container__rate">
                    <button class="increase-score"><img src="./images/icon-plus.svg" alt="Increase score"></button>
                    <span class="score">${newReply.score}</span>
                    <button class="decrease-score"><img src="./images/icon-minus.svg" alt="Decrease score"></button>
                  </div>
                  <div class="comment__replies__container--actions">
                    <button class="comment__replies__container--delete">Delete</button>
                    <button class="comment__replies__container--edit">Edit</button>
                  </div>
                `;

                const replyIncreaseBtn =
                  replyDiv.querySelector(".increase-score");
                const replyDecreaseBtn =
                  replyDiv.querySelector(".decrease-score");
                const replyScoreSpan = replyDiv.querySelector(".score");

                replyIncreaseBtn.addEventListener("click", () => {
                  const newScore = updateScore(newReply, 1);
                  replyScoreSpan.textContent = newScore;
                });

                replyDecreaseBtn.addEventListener("click", () => {
                  const newScore = updateScore(newReply, -1);
                  replyScoreSpan.textContent = newScore;
                });

                if (isReplyToReply) {
                  parentComment.insertAdjacentElement("afterend", replyDiv);
                } else {
                  const repliesContainer = parentComment.nextElementSibling;
                  if (
                    repliesContainer &&
                    repliesContainer.classList.contains("comment__replies")
                  ) {
                    repliesContainer.appendChild(replyDiv);
                  } else {
                    const newRepliesContainer = document.createElement("div");
                    newRepliesContainer.classList.add("comment__replies");
                    newRepliesContainer.appendChild(replyDiv);
                    parentComment.insertAdjacentElement(
                      "afterend",
                      newRepliesContainer
                    );
                  }
                }

                if (newReply.user.username === data.currentUser.username) {
                  const deleteBtn = replyDiv.querySelector(
                    ".comment__replies__container--delete"
                  );
                  deleteBtn.addEventListener("click", () =>
                    deleteComment(
                      replyDiv,
                      parentItem.replies,
                      parentItem.replies.length - 1
                    )
                  );
                }

                replyForm.remove();
              }
            });
          };

          const repliesContainer = document.createElement("div");
          repliesContainer.classList.add("comment__replies");

          if (item.replies && item.replies.length > 0) {
            item.replies.forEach((reply, replyIndex) => {
              const isReplyCurrentUser =
                reply.user.username === data.currentUser.username;
              const replyUsernameWithYou = isReplyCurrentUser
                ? `${reply.user.username} <span class="you-label">you</span>`
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
                  <button class="increase-score"><img src="./images/icon-plus.svg" alt="Increase score"></button>
                  <span class="score">${reply.score}</span>
                  <button class="decrease-score"><img src="./images/icon-minus.svg" alt="Decrease score"></button>
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

              // Obsługa punktów +/-
              const replyIncreaseBtn =
                replyDiv.querySelector(".increase-score");
              const replyDecreaseBtn =
                replyDiv.querySelector(".decrease-score");
              const replyScoreSpan = replyDiv.querySelector(".score");

              replyIncreaseBtn.addEventListener("click", () => {
                const newScore = updateScore(reply, 1);
                replyScoreSpan.textContent = newScore;
              });

              replyDecreaseBtn.addEventListener("click", () => {
                const newScore = updateScore(reply, -1);
                replyScoreSpan.textContent = newScore;
              });

              if (isReplyCurrentUser) {
                const deleteBtn = replyDiv.querySelector(
                  ".comment__replies__container--delete"
                );
                deleteBtn.addEventListener("click", () =>
                  deleteComment(replyDiv, item.replies, replyIndex)
                );
              }

              const replyReplyBtn = replyDiv.querySelector(
                ".comment__container--reply"
              );
              if (replyReplyBtn) {
                replyReplyBtn.addEventListener("click", () =>
                  handleReply(replyDiv, reply.user.username, reply, true)
                );
              }

              repliesContainer.appendChild(replyDiv);
            });
          }

          commentDiv.appendChild(repliesContainer);
          container.insertBefore(commentDiv, addCommentForm);

          const replyBtn = commentDiv.querySelector(
            ".comment__container--reply"
          );
          if (replyBtn) {
            replyBtn.addEventListener("click", () =>
              handleReply(commentDiv, item.user.username, item, false)
            );
          }
        });
      };

      const addCommentForm = document.createElement("form");
      addCommentForm.classList.add("add-comment");
      addCommentForm.innerHTML = `
          <textarea class="add-comment__content" placeholder="Add a comment..."></textarea>
          <img src="${data.currentUser.image.png}" alt="User Avatar" class="add-comment__avatar">
          <button class="add-comment__button" type="submit">SEND</button>
      `;
      container.appendChild(addCommentForm);

      addCommentForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const newCommentContent = document.querySelector(
          ".add-comment__content"
        ).value;

        if (newCommentContent.trim() !== "") {
          const newComment = {
            user: data.currentUser,
            createdAt: "Just now",
            content: newCommentContent,
            score: 0,
            replies: [],
          };

          data.comments.push(newComment);

          const commentDiv = document.createElement("div");
          commentDiv.classList.add("comment");

          commentDiv.innerHTML = `
      <div class="comment__container">
        <div class="comment__container__info">
          <img src="${newComment.user.image.png}" alt="User Avatar">
          <h2>${newComment.user.username} <span class="you-label">you</span></h2>
          <span>${newComment.createdAt}</span>
        </div>
        <p class="comment__container--content">${newComment.content}</p>
        <div class="comment__container__rate">
          <button class="increase-score"><img src="./images/icon-plus.svg" alt="Increase score"></button>
          <span class="score">${newComment.score}</span>
          <button class="decrease-score"><img src="./images/icon-minus.svg" alt="Decrease score"></button>
        </div>
        <div class="comment__container--actions">
          <button class="comment__container--delete">Delete</button>
          <button class="comment__container--edit">Edit</button>
        </div>
      </div>
    `;

          const repliesContainer = document.createElement("div");
          repliesContainer.classList.add("comment__replies");
          commentDiv.appendChild(repliesContainer);

          container.insertBefore(commentDiv, addCommentForm);

          const increaseBtn = commentDiv.querySelector(".increase-score");
          const decreaseBtn = commentDiv.querySelector(".decrease-score");
          const scoreSpan = commentDiv.querySelector(".score");

          increaseBtn.addEventListener("click", () => {
            const newScore = updateScore(newComment, 1);
            scoreSpan.textContent = newScore;
          });

          decreaseBtn.addEventListener("click", () => {
            const newScore = updateScore(newComment, -1);
            scoreSpan.textContent = newScore;
          });

          const deleteBtn = commentDiv.querySelector(
            ".comment__container--delete"
          );
          deleteBtn.addEventListener("click", () =>
            deleteComment(commentDiv, data.comments, data.comments.length - 1)
          );

          document.querySelector(".add-comment__content").value = "";
        }
      });

      displayComments(data.comments);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
