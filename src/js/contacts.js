import iziToast from "izitoast";
// Ініціалізація EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // заміни на свій PUBLIC KEY

const form = document.getElementById('contact-form');
const emailInput = form.nextElementSibling.from_email;
const nameInput = form.nextElementSibling.from_name;
const messageInput = form.nextElementSibling.from_message;
const errorMSG = document.querySelectorAll('.invalid-input');
const successMsg = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous invalid input messages
    invalidInputs.forEach((input) => {
        input.style.opacity = 0;
    });

    // Validate form fields
    let isValid = true;

    if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.nextElementSibling.style.opacity = 1;
    }

    if (!emailInput.value.trim()) {
        isValid = false;
        emailInput.nextElementSibling.style.opacity = 1;
    }

    if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.nextElementSibling.style.opacity = 1;
    }

    if (isValid) {
        // Submit the form or perform desired action
        console.log('Form submitted successfully!');
    }
});
emailInput.addEventListener('input', () => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const email = emailInput.value.trim();
    if (pattern.test(email)) {
        errorMSG.style.opacity = 0;
    } else {
        errorMSG.style.opacity = 1;
    }
})