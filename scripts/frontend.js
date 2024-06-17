import * as typewriter from '../../node_modules/typewriter-effect/dist/core.js';
import * as scrollreveal from '../../node_modules/scrollreveal/dist/scrollreveal.js';


// https://github.com/tameemsafi/typewriterjs
var myApp = document.getElementById('coreskills')
new Typewriter(myApp, {
    strings: [
        'python.',
        'linux & bash.',
        'AWS.',
        'git.',
        'docker.',
        'kubernetes.',
        'TDD.',
        'agile (scrum).',
        'virtualisation.'
    ],
    autoStart: true,
    loop: true
})

// https://scrollrevealjs.org/
const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "2rem",
    duration: 2000,
    reset: true
})

scrollReveal.reveal(".about_image", {delay: 400})
scrollReveal.reveal(".about_section_main", {delay: 400})
scrollReveal.reveal(".skillsRow1", {delay: 300})
scrollReveal.reveal(".skillsRow2", {delay: 500})
scrollReveal.reveal(".experience_large_text", {delay: 300})
scrollReveal.reveal(".ncr_experience", {delay: 600})
scrollReveal.reveal(".contact_input", {delay: 400})
scrollReveal.reveal(".contact_message", {delay: 500})

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('.nav_link');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Remove 'current' class from all navigation items
            navLinks.forEach(function(navItem) {
                navItem.parentElement.classList.remove('current');
            });

            // Add 'current' class to the clicked navigation item's parent (li)
            link.parentElement.classList.add('current');
        });
    });
});

