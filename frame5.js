const keyImage = document.getElementById("key-image");
const keyImageBackpack = document.getElementById("key-image2");
const mapImageBackpack = document.getElementById("map-image2");
const bagImageBackpack = document.getElementById("bag-image2");
const lightButton = document.getElementById("to-light-button");
const modal = document.getElementById("modal");
console.log(modal);

checkLocalStorage();
// modal.style.transform = 'translate(-50%, -50%) scale(1)';
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

// const openModalButtons = document.querySelectorAll('[data-modal-target]')
// const closeModalButtons = document.querySelectorAll('[data-close-button]')
// const img = document.getElementById('wand-image');
// const trunk = document.getElementById('trunk');

// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
// }

// function closeModal(modal) {
//     if (modal == null) return
//     modal.classList.remove('active')
// };
//https://www.youtube.com/watch?v=MBaw_6cPmAw

// img.addEventListener('click', (event) => {
//   img.style.display = 'none';
// });

//https://bobbyhadz.com/blog/javascript-hide-button-after-click

// function myFunction() {
//     var txt;
//     if (confirm("Oh look! A wand! Press OK to pick up.")) {
//       txt = "You pressed OK!";
//     } else {
//       txt = "You pressed Cancel!";
//     }
//     document.getElementById("wand-image").innerHTML = txt;
//   }
