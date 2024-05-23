import changeNav from './changeNav.js';
import {homeButton} from './index.js';

function loadHomePage() {
    const bodyDiv = document.getElementById('content');
    bodyDiv.innerHTML = '';

    const headline = document.createElement('h1');
    headline.textContent = "Welcome to UntilWired!";

    const bodytext = document.createElement('p');
    bodytext.textContent = "We are a coffee shop that is dedicated to providing the best coffee and food in the world. We are located in the heart of the city, and we are always open for you to come and enjoy our delicious coffee and food. We are always looking for feedback and ways to improve our business. If you have any ideas or suggestions, please feel free to share.";

    const coffeeImg = document.createElement('img');
    coffeeImg.src = "https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg";
    coffeeImg.alt = "coffee";

    bodyDiv.appendChild(headline);
    bodyDiv.appendChild(bodytext);
    bodyDiv.appendChild(coffeeImg);

    console.log("homePage loaded!")

    changeNav(homeButton);
}

export default loadHomePage; 
