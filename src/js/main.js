'use strict';

// ------------- Menu mobile -------------
document.getElementById("burger-icon").addEventListener("click", function () {
    document.getElementById("main-menu").classList.toggle("display-menu-mobile");
})

document.getElementById("close-menu-mobile").addEventListener("click", function () {
    document.getElementById("main-menu").classList.toggle("display-menu-mobile");

})
// --------------------------------------

// ------------- Search feature ----------
document.getElementById("magnifier-icon").addEventListener("click", function () {
    document.getElementById("search-block").classList.toggle("display-search-block");
})

document.getElementById("close-search-block").addEventListener("click", function () {
    document.getElementById("search-block").classList.toggle("display-search-block");
})
// -------------------------------------

// ------------- Accordion --------------
const accordionHeaders = document.getElementsByClassName('accordion-header');
Array.prototype.forEach.call(accordionHeaders, accordionHeader => {
    let target = accordionHeader.parentElement.nextElementSibling;

    accordionHeader.onclick = () => {

        if (target.style.maxHeight) {
            target.style.maxHeight = null;
        } else {
            target.style.maxHeight = target.scrollHeight + "px";
        }
        accordionHeader.parentNode.classList.toggle('rotate-arrow');
        accordionHeader.parentNode.classList.toggle('border-bottom-accordion');
        target.classList.toggle('border-bottom-accordion')
        let expanded = accordionHeader.getAttribute('aria-expanded') === 'true' || false;
        let hidden = target.getAttribute('aria-hidden') === 'true' || false;
        accordionHeader.setAttribute('aria-expanded', !expanded);
        target.setAttribute('aria-hidden', !hidden);
    }
})