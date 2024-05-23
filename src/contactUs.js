import changeNav from './changeNav.js';
import {contactButton} from './index.js';

function loadContactUsPage() {
    const bodyDiv = document.getElementById('content');
    bodyDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Contact Us";

    bodyDiv.appendChild(headline);

    console.log("contactUsPage loaded!")

    changeNav(contactButton);
}

export default loadContactUsPage; 

