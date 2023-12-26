const elementDiv = document.querySelector('#controls');
const dataCreate = document.querySelector('.btn-create');
const elementBoxes = document.querySelector('#boxes');
const dataDestroy = document.querySelector('.btn-destroy');


const inputEl = document.querySelector('input');
const createNewEl = document.createElement("div");

dataCreate.addEventListener('click', createInput);

function createInput() {
  const amount = inputEl.value;
  if (amount > 1 && amount <= 100) {
    createBoxes(amount);
  }

}



function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const newDiv = createNewEl.cloneNode();
    
      elementBoxes.appendChild(newDiv);
  }

}

console.log(newDiv);
console.log(elementBoxes);

dataDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  elementBoxes.innerHTML = '';
  elementBoxes.remove();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
