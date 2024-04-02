document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('active');
    });
});
