/* variables */

const cardSignUp = document.getElementById('card-sign-up');
const cardSuccessMessage = document.getElementById('card-success-message');

const form = document.getElementById('form');

const btnSubmit = document.getElementById('btnSubmit');
const btnDismissMessage = document.getElementById('btnDismissMessage');

const errorEmailMessage = document.getElementById('error-email');

const userEmail = document.getElementById('user-email');
const inputEmail = document.getElementById('email');


btnDismissMessage.addEventListener('click', () => {
    cardSuccessMessage.style.display = 'none';
    cardSignUp.style.display = 'grid';
});

form.addEventListener("submit", (e) => {
    e.preventDefault(e);

    const data = Object.fromEntries(new FormData(e.target));
    validateSignUpData(data);
});

function validateSignUpData(data) {

    email = data['email'];

    errorMessage = validateEmail(email);

    if (errorMessage == "Email is valid") {

        resetForm();

        displaySuccessMessage(email);
    } else {

        displayErrorMessage(errorMessage);
    }
}

function displaySuccessMessage(email) {

    errorEmailMessage.style.visibility = 'hidden';
    cardSignUp.style.display = 'none';

    userEmail.textContent = email;

    cardSuccessMessage.style.display = 'flex';
}

function displayErrorMessage(message) {

    errorEmailMessage.textContent = message;

    inputEmail.classList.add('invalid-input');
    errorEmailMessage.style.visibility = 'visible';
}

function resetForm() {
    form.reset();
    inputEmail.classList.remove('invalid-input');
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email field is empty or contains only spaces
    if (email.trim() === '') {
        return "Email cannot be empty";
    }
    // Check if the email field is in valid format
    else if (!emailRegex.test(email)) {
        return "Email is not in a valid format";
    }
    // If everything is valid
    else {
        return "Email is valid";
    }
}


