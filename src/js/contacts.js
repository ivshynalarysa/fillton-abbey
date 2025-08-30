//import iziToast from "izitoast";
//import emailjs from "@emailjs/browser";
// Ініціалізація EmailJS
//function(){
// emailjs.init("YOUR_PUBLIC_KEY"); 
// })();// заміни на свій PUBLIC KEY

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

    

   ;

    nameInput.classList.remove('input-error');
    emailInput.classList.remove('input-error');
    messageTextarea.classList.remove('textarea-error');
    
    invalidName.classList.remove('active');
    invalidEmail.classList.remove('active');
    invalidMessage.classList.remove('active');
    successMsg.classList.remove('active');

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

    if (isValid) {
        // Submit the form or perform desired action
        console.log('Form submitted successfully!');
        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form)
            .then(() => {
                successMsg.textContent = 'Message sent successfully!';
                successMsg.style.color = 'var(--color-green)';
                form.reset();
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                successMsg.textContent = 'Failed to send message. Please try again later.';
                successMsg.style.color = 'red';
            });
    }
});

        
        
    



