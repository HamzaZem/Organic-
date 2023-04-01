'use strict';

// navBar
const buttonNav = document.querySelectorAll('[data-btn-nav]'),
    navBar = document.querySelector('[data-navbar]'),
    overlay = document.querySelector('[data-overlay]');

for (const btn of buttonNav) {
    btn.addEventListener('click', () => {
        navBar.classList.toggle('active');
        overlay.classList.toggle('active');
    })
}

// subMenu

const linkDrop = document.querySelector('[data-link-drop]'),
    subMenu = document.querySelector('[data-sub-menu]');

linkDrop.addEventListener('click', (e) => {
    e.preventDefault();
    subMenu.classList.toggle('active');
})

// Testimonials Slider
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});