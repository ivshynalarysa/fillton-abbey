import emailjs from "@emailjs/browser";
// Якщо є ключ EmailJSconst 
//EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";
//if (EMAILJS_PUBLIC_KEY) {
//    emailjs.init(EMAILJS_PUBLIC_KEY);
//}
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageTextarea = document.getElementById('message');
const invalidName = document.getElementById('name-error');
const invalidEmail = document.getElementById('email-error');
const invalidMessage = document.getElementById('message-error');
const successMsg = document.getElementById('success-message');

function resetErrors() {
    [nameInput, emailInput, messageTextarea].forEach(el => el.classList.remove('input-error', 'textarea-error'));
    [invalidName, invalidEmail, invalidMessage].forEach(el => el.classList.remove('active'));
    successMsg.classList.remove('active');
    successMsg.textContent = '';
}
function validateForm() {
    let isValid = true;
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
    if (messageTextarea.value.trim() === '') {
        isValid = false;
        messageTextarea.classList.add('textarea-error');
        invalidMessage.classList.add('active');
    }
    return isValid;
}
form.addEventListener('click', (event) => {
    event.preventDefault();
    resetErrors();
    const isValid = validateForm();
    if (!isValid) return;
    // Зупинка, якщо форма не валідна
    // Локальне повідомлення про успіх
    successMsg.textContent = ' Your message is valid!';
    successMsg.classList.add('active');
    // ---------------------------
    // Опційна відправка через EmailJS
    if (typeof emailjs !== 'undefined' && EMAILJS_PUBLIC_KEY) {
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
        .then(() => {
            successMsg.textContent = ' Message sent successfully!';
            successMsg.classList.add('active');
            form.reset();
        })
        .catch((error) => {
            console.error('EmailJS error:', error);
        successMsg.textContent = ' Failed to send message. Please try again later.';
        successMsg.style.color = 'red';
        successMsg.classList.add('active');
    });
} else {
    // Якщо EmailJS не підключений, просто очищаємо форму після локального успіху
    form.reset();
}
})