const inputEl = document.querySelector('#name-input');

const spanEl = document.querySelector('#name-output');



inputEl.addEventListener('input', enterUserName);

function enterUserName(event) {
    if (inputEl.value.trim() === "") {
       return spanEl.currentTarget.textContent = 'Anonymous';
    }
    spanEl.textContent = event.currentTarget.value.trim();
}