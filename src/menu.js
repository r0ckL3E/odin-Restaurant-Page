// menu.js

import mikey from "./resource/sub-buzz-3175-1658251958-24.png.jpg";
import tina from "./resource/tinas-rosemary-mashed-potatoes-1686596488.jpg";
import sydney from "./resource/cola-braised-short-rib-and-risotto-1686600527.png";

export default function createMenuPage() {
    // Select the content div
    const content = document.querySelector('#content');
  
    // Create elements for the menu page
    const headline = document.createElement('h1');
    headline.textContent = "Non-negotiables";
  
    const menu = document.createElement('ul');
    menu.innerHTML = `
      <li>
        <h2>Mikey's Family Spaghetti</h2>
        <img src="${mikey}" alt="spaghetti" class="menu-image">
        <p>Let it rip.</p>
      </li>
      <li>
        <h2>Tina's Rosemary Mashed Potatoes</h2>
        <img src="${tina}" alt="Tina's Rosemary Mashed Potatoes" class="menu-image">
        <p>Did you take my POT, Jeff!?</p>
      </li>
      <li>
        <h2>Cola-Braised Short Ribs and Risotto</h2>
        <img src="${sydney}" alt="Somali Dish" class="menu-image">
        <p>It would be weird to work in a restaurant and not completely lose your mind.</p>
      </li>
    `;
  
    // Append elements to the content div
    content.appendChild(headline);
    content.appendChild(menu);
};