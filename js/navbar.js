//js for toggling the navbar
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navImage = document.querySelector('.nav-img');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('active');
        navImage.classList.toggle('active');
    });
});