'use strict';

// Menu mobile
document.getElementById("burger-icon").addEventListener("click", function () {
    document.getElementById("main-menu").classList.remove("hidden-menu-mobile");
    document.getElementById("main-menu").classList.add("display-menu-mobile");
})

document.getElementById("close-menu-mobile").addEventListener("click", function () {
    document.getElementById("main-menu").classList.remove("display-menu-mobile");
    document.getElementById("main-menu").classList.add("hidden-menu-mobile");
})

// Search feature
document.getElementById("magnifier-icon").addEventListener("click", function () {
    document.getElementById("search-block").classList.remove("hidden-search-block");
    document.getElementById("search-block").classList.add("display-search-block");
})

document.getElementById("close-search-block").addEventListener("click", function () {
    document.getElementById("search-block").classList.remove("display-search-block");
    document.getElementById("search-block").classList.add("hidden-search-block");
})

// Accordion
const accordion = document.getElementsByClassName('label');

for (let i= 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('item-accordion-active');
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })
}