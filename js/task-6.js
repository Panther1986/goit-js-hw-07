const elementDiv = document.querySelector('#controls');
const dataCreate = document.querySelector('[data-create]');
const elementBoxes = document.querySelector('#boxes');
const dataDestroy = document.querySelector('[data-destroy]');


const inputEl = document.querySelector('input');
const createNewEl = document.createElement("div");

dataCreate.addEventListener('click', createInput);

function createMarkup(amount) {
  for (let i = 0; i < amount; i++){
    let newDiv = createNewEl.cloneNode();
    elementBoxes.append(newDiv);
    newDiv.style.backgroundColor = getRandomHexColor();
    newDiv.style.width = createDivSize(i, amount) [i];
  }
}

function createInput() {
  const amount = inputEl.value;
  if (amount >= 1 && amount <= 100) {
    createMarkup(amount);
  }
  inputEl.value = "";
}

function createDivSize(i, amount) {
  const result = [];
  let init = 30;
  for (let j = 1; j <= amount; j++){
    const str = `width:${10 * j + init}px;height:${10 * j + init}px`;
    result.push(str);
    init = 10 * j + init;
  }
  return result;
}

dataDestroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {
    while (elementBoxes.firstChild) {
    elementBoxes.firstChild.remove();
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

 
