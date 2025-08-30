//import iziToast from "izitoast";
// Ініціалізація EmailJS
//emailjs.init("YOUR_PUBLIC_KEY"); // заміни на свій PUBLIC KEY

const form = document.getElementById('contact-form');
const emailInput = document.getElementById('email');
const nameInput = document.getElementById('name');
const messageTextarea = document.getElementById('message');
const invalidName = document.getElementById('name-error');
const invalidEmail = document.getElementById('email-error');
const invalidMessage = document.getElementById('message-error');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    

    // Validate form fields
    let isValid = true;

    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    messageTextarea.classList.remove('textarea-error');

    if (nameInput.value.trim() === '') {
        isValid = false;
        nameInput.classList.add('input-error');
        invalidName.classList.add('active');
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        isValid = false;
        emailInput.classList.add('input-error');
        invalidEmail.classList.add('active');
    }

    if (messageTextarea.value.trim()) {
        isValid = false;
        messageTextarea.classList.add('textarea-error');
        invalidMessage.classList.add('active');
        
    }

    if (isValid) {
        // Submit the form or perform desired action
        console.log('Form submitted successfully!');
    }
});
