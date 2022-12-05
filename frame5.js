// The following 27 lines of code were added and adapted by the help of classmates Ida Olsson and Isa Dejevik Schröder
const keyImage = document.getElementById("key-image");
const keyImageBackpack = document.getElementById("key-image2");
const lightButton = document.getElementById("to-light-button");

checkLocalStorage();
function checkLocalStorage() {
  if (localStorage.getItem("key")) {
    keyImageBackpack.style.visibility = "visible";
    keyImage.style.visibility = "hidden";
  } else {
    keyImage.style.visibility = "visible";
    keyImageBackpack.style.visibility = "hidden";
  }
  if (localStorage.getItem("key")) {
    keyImageBackpack.style.visibility = "visible";
    lightButton.style.visibility = "visable";
  } else {
    keyImageBackpack.style.visibility = "hidden";
    lightButton.style.visibility = "hidden";
  }
}

keyImage.addEventListener("click", (event) => {
  keyImage.style.display = "none";
  localStorage.setItem("key", true);
  checkLocalStorage();
});
