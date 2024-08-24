import bearImage from './resource/logo-design-concepts-for-the-bear-restaurant-as-a-logo-v0-1qvyu9ropm4d1.png-ezgif.com-webp-to-jpg-converter.jpg'

export default function createHomePage() {
    const content = document.querySelector('#content');
    
    const headLiner = document.createElement('h1');
    headLiner.classList.add('headLiner')
    headLiner.textContent = 'Every Second Counts'
    content.appendChild(headLiner);
    
    const img = document.createElement('img');
    img.src = bearImage;
    img.classList.add('theBear');
    img.alt = 'Image of The Bear';
    content.appendChild(img);


    const description = document.createElement('p');
    description.textContent = `A far cry from its sticky days as The Beef, 
    Chef Carmy Berzatto’s renovated restaurant features gorgeous dishes — 
    just ignore those noises from the kitchen!`
    content.appendChild(description);
}