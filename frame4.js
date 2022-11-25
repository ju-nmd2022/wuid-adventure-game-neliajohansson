const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const feedButton = document.getElementById("feed-button");
const villageButton = document.getElementById("village-button");
const bagImageBackpack = document.getElementById("bag-image2");

checkLocalStorage();
function checkLocalStorage() {
  if (localStorage.getItem("bag")) {
    feedButton.style.visibility = "visible";
  } else {
    villageButton.style.visibility = "hidden";
  }
  if (localStorage.getItem("village")) {
    feedButton.style.visibility = "hidden";
  } else {
    villageButton.style.visibility = "visable";
  }
}

feedButton.addEventListener("click", (event) => {
  feedButton.style.display = "none";
  localStorage.setItem("bag", true);
  checkLocalStorage();
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
}
