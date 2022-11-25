const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const iceImage = document.getElementById("ice-image");
const bagImage = document.getElementById("bag-image");
const bagImageBackpack = document.getElementById("bag-image2");
const riverButton = document.getElementById("river-button");

checkLocalStorage();

function checkLocalStorage() {
  if (localStorage.getItem("bag")) {
    bagImageBackpack.style.visibility = "visible";
    bagImage.style.visibility = "hidden";
  } else {
    bagImage.style.visibility = "visible";
    bagImageBackpack.style.visibility = "hidden";
  }
  if (localStorage.getItem("ice")) {
    bagImageBackpack.style.visibility = "visible";
    iceImage.style.visibility = "visible";
  } else {
    bagImageBackpack.style.visibility = "hidden";
    iceImage.style.visibility = "hidden";
  }
  if (localStorage.getItem("river")) {
    bagImageBackpack.style.visibility = "visible";
    riverButton.style.visibility = "visable";
  } else {
    bagImageBackpack.style.visibility = "hidden";
    riverButton.style.visibility = "hidden";
  }
}
modal.style.transform = "translate(-50%, -50%) scale(1)";

bagImage.addEventListener("click", (event) => {
  bagImage.style.display = "none";
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
    riverButton.style.display = "visible";
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

let button = document.getElementById("try-ice");
let result = document.getElementById("result");

function fnClick(event) {
  let num = Math.random();

  if (num < 0.6) {
    result.innerHTML = "The ice is thick enough, you can cross it safely!";
    riverButton.style.visibility = "visible";
  } else {
    result.innerHTML = "Oh no, the ice is breaking! Try again somewhere else.";
    riverButton.style.visibility = "hidden";
  }
}

button.addEventListener("click", fnClick);
