document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });
});
