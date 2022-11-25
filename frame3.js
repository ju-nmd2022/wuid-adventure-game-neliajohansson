const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const lumberjackImage = document.getElementById("lumberjack-image");
const mapImage = document.getElementById("map-image");
const keyImageBackpack = document.getElementById("key-image2");
const mapImageBackpack = document.getElementById("map-image2");
const eastButton = document.getElementById("east-button");

checkLocalStorage();
function checkLocalStorage() {
  if (localStorage.getItem("map")) {
    mapImageBackpack.style.visibility = "visible";
    mapImage.style.visibility = "hidden";
  } else {
    mapImage.style.visibility = "visible";
    mapImageBackpack.style.visibility = "hidden";
  }
  if (localStorage.getItem("map")) {
    mapImageBackpack.style.visibility = "visible";
    keyImageBackpack.style.visibility = "hidden";
  } else {
    mapImageBackpack.style.visibility = "hidden";
    keyImageBackpack.style.visibility = "visible";
  }
  if (localStorage.getItem("map")) {
    mapImageBackpack.style.visibility = "visible";
    eastButton.style.visibility = "visable";
  } else {
    mapImageBackpack.style.visibility = "hidden";
    eastButton.style.visibility = "hidden";
  }
}

mapImage.addEventListener("click", (event) => {
  mapImage.style.display = "none";
  localStorage.setItem("map", true);
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
    mapImage.style.display = "visible";
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

let button = document.getElementById("give-key");
let result = document.getElementById("result");

function fnClick(event) {
  let num = Math.random();

  if (num < 0.6) {
    result.innerHTML =
      "Thank you! </br> You're lost you say? Let me give you a map as a thanks for finding my key!";
    mapImage.style.visibility = "visible";
  } else {
    result.innerHTML = "That's not my key unfortunately... Try again!";
    mapImage.style.visibility = "hidden";
  }
}

button.addEventListener("click", fnClick);
