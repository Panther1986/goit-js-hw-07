const elementDiv = document.querySelector('#controls');
const dataCreate = document.querySelector('[data-create]');
const elementBoxes = document.querySelector('#boxes');
const dataDestroy = document.querySelector('[data-destroy]');


const inputEl = document.querySelector('input');
const createNewEl = document.createElement("div");

dataCreate.addEventListener('click', createInput);


function createInput() {
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }

}

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    let newDiv = createNewEl.cloneNode();
    
    elementBoxes.append(newDiv);
    newDiv.classList.add("js-create-box");
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = getRandomSize() + "px";
    newDiv.style.height = getRandomSize() + "px";
  }
}


dataDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    while (elementBoxes.firstChild) {
    elementBoxes.removeChild(elementBoxes.firstChild);
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

 
function getRandomSize() { return Math.floor(Math.random() * 91) + 30; }