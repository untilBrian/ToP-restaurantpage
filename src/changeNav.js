import {homeButton, menuButton, contactButton} from './index.js';
import './styles.css';

function clearButtons() {
    homeButton.classList.remove('highlight');
    menuButton.classList.remove('highlight');
    contactButton.classList.remove('highlight');
}

function addHighlight(button) {
    button.classList.add('highlight');
}

function changeNav(button) {
    clearButtons();
    addHighlight(button);
}

export default changeNav;


