document.addEventListener('DOMContentLoaded', function() {
    const readMoreButton = document.getElementById('read-more');
    const additionalInfo = document.getElementById('additional-info');

    readMoreButton.addEventListener('click', function() {
        additionalInfo.classList.toggle('show');
        if (additionalInfo.classList.contains('show')) {
            readMoreButton.textContent = 'Read Less';
        } else {
            readMoreButton.textContent = 'Read More';
        }
    });
});
