import changeNav from './changeNav.js';
import {menuButton} from './index.js';

function loadMenuPage() {
    const bodyDiv = document.getElementById('content');
    bodyDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Menu";

    bodyDiv.appendChild(headline);

    console.log("menuPage loaded!")

    changeNav(menuButton);
}

export default loadMenuPage; 
