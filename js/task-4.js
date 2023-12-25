const form = document.querySelector('.login-form');

form.addEventListener('submit',onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const inputEl = document.querySelectorAll('input');
    const emptyInput = Array.from(inputEl).filter(input => input.value === '');
    

    if (emptyInput.length > 0) {
        alert('All form fields must be filled in');
    } else {
        const formData = new FormData(form);
    const data = Object.fromEntries(formData);
        console.log(data);
        
        form.reset();
    }
}