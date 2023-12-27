const inputOutput = document.querySelector('#name-input');

const spanOutput = document.querySelector('#name-output');

inputOutput.addEventListener('input', enterUserName);

function enterUserName(event) {
    if (inputOutput.value.trim() === "") {
       return spanOutput.textContent = 'Anonymous';
    }
    spanOutput.textContent = event.currentTarget.value;
}