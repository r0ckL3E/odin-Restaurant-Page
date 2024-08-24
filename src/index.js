import "./styles.css"

import createHomePage from "./home.js";
import createMenuPage from "./menu.js";
import createAboutPage from "./about.js";

createHomePage();

const contentDiv = document.querySelector('#content');

const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    createHomePage();
});

const menuButton = document.querySelector('#menu');
menuButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    createMenuPage();
});

const aboutButton = document.querySelector('#about');
aboutButton.addEventListener('click', () => {
    contentDiv.innerHTML = '';
    createAboutPage();
});