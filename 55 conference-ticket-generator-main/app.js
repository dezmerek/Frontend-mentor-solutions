document.addEventListener("DOMContentLoaded", () => {
  const avatarInput = document.getElementById("avatar");
  const uploadArea = document.getElementById("upload-area");
  const uploadIcon = document.getElementById("upload-icon");
  const uploadText = document.getElementById("upload-text");
  const uploadButtons = document.getElementById("upload-buttons");
  const removeImageButton = document.getElementById("remove-image");
  const changeImageButton = document.getElementById("change-image");

  const showUploadButtons = () => {
    uploadText.style.display = "none";
    uploadButtons.style.display = "flex";
  };

  const hideUploadButtons = () => {
    uploadText.style.display = "block";
    uploadButtons.style.display = "none";
    uploadIcon.src = "./assets/images/icon-upload.svg";
    avatarInput.value = "";
  };

  uploadArea.addEventListener("click", () => {
    avatarInput.click();
  });

  avatarInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadIcon.src = e.target.result;
        showUploadButtons();
      };
      reader.readAsDataURL(file);
    }
  });

  uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadArea.classList.add("dragover");
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("dragover");
  });

  uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadArea.classList.remove("dragover");
    const file = event.dataTransfer.files[0];
    if (file) {
      avatarInput.files = event.dataTransfer.files;
      const reader = new FileReader();
      reader.onload = (e) => {
        uploadIcon.src = e.target.result;
        showUploadButtons();
      };
      reader.readAsDataURL(file);
    }
  });

  removeImageButton.addEventListener("click", () => {
    hideUploadButtons();
  });

  changeImageButton.addEventListener("click", () => {
    avatarInput.click();
  });
});
