document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');
    const thankYouMessage = document.getElementById('thank-you-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting via a full-page reload

        // You can add form validation logic here if needed

        // Assuming the form is valid, hide the form and display the thank-you message
        contactForm.style.display = 'none';
        thankYouMessage.style.display = 'block';
    });
});



