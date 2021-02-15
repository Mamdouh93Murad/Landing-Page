/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navbar = document.getElementById('navbar__list');
const sec = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildList() {
   /* debugging line  console.log('hi'); */
    sec.forEach(section => {
        const li = document.createElement('li');
        li.innerText = section.dataset.nav;
        li.className = 'menu__link';
        li.dataset.nav = section.id;
        navbar.appendChild(li);
        
    });
}

// Add class 'active' to section when near top of viewport

function activateLink() {
    /* debugging line  console.log('hi'); */
    const links = document.querySelectorAll('.menu__link');
    let index = sec.length;
    while(--index && window.scrollY + 50 < sec[index].offsetTop) {}
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
    
  }
// Scroll to anchor ID using scrollTO event
function scroll() {
    /* debugging line  console.log('hi'); */
    navbar__list.addEventListener('click', function (event) {
        const clicked = document.querySelector('#' + event.target.dataset.nav);
        clicked.scrollIntoView({behavior: "smooth"});
    });    
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
buildList();
// Scroll to section on link click
scroll();
// Set sections as active
activateLink();
window.addEventListener('scroll', activateLink);
