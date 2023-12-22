const bodyEl = document.querySelector('.widget');
const buttonEl = document.querySelector(".change-color");
console.log(buttonEl);



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
