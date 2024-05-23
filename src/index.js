import loadHomePage from './home.js';
import loadMenuPage from './menu.js';
import loadContactUsPage from './contactUs.js';
import './styles.css';

const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const contactButton = document.getElementById('contact-button');

homeButton.addEventListener('click', loadHomePage);
menuButton.addEventListener('click', loadMenuPage);
contactButton.addEventListener('click', loadContactUsPage);

export {homeButton, menuButton, contactButton};

//page's event listener
    //triggers loading function
        //function wipes out #content div
        //function appends new #content div
        //function wipes + highlights the nav bar button

//load contact page


