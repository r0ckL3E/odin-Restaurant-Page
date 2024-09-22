export default function createAboutPage() {
    const content = document.querySelector('#content');

    const headLine = document.createElement('h1');
    headLine.classList.add('headline-font');
    headLine.textContent = 'About Carmy and The Bear';
    content.appendChild(headLine);
    
    const description = document.createElement('p');
    description.classList.add('description-font');
    description.textContent = `My name's Carmen. My, um... my brother's an addict. 
    My, My brother was an addict. And this morning, I, um... Sorry, uh... I forgot, um... 
    B-Before I came to Al-Anon, I was a cook. I mean, I'm-I'm still a cook, I'm just a different 
    kind of cook, I guess. My brother and I, we would cook a lot together, especially when we were kids. 
    You know, that's-that's when we were closest. Food was always our common ground. We wanted to open a 
    restaurant together. Um, we had a name, we had a vibe, all of it. My brother could make you feel confident 
    in yourself. You know, like, when I was a kid, if I was nervous, I was scared, I wouldn't wanna do something, 
    he'd always tell me to just face it. You know, get it over with. He would always say, um... Stupid, he would 
    always say, um... "Let it rip." He was loud. And he was hilarious. And he had this amazing ability. He could just,
    he could walk into a room, and he could take the temperature of it instantly. You know, he could just, he could dial it. 
    And, um... I'm not built like that, man. I, um... I didn't have a lot of friends growing up. I had a, a stutter when I was 
    a kid. I was scared to speak half the time. And, uh, I got shitty grades 'cause I couldn't pay attention in school. I didn't 
    get into college. I didn't have any girlfriends. I don't think I'm funny. I always thought my brother was my best friend. Like, 
    Like, we just knew everything about each other. Except... everybody thought he was their best friend. You know, he was that, he 
    was that magnetic. And, um... I didn't know my brother was using drսg. What does that say? As we got older, I-I realized I didn't 
    know anything about him... really. He stopped letting me into the restaurant a couple years ago. He just cut me off cold. And that, 
    um... that hurt, you know. And I think that just, that flipped a switch in me where I was like, "Okay, fսck you, watch this."`;
    content.appendChild(description);

    const lastLine = document.createElement('h1');
    lastLine.classList.add('amtGood', 'interesting-font');
    lastLine.textContent = 'We Can’t Operate At A Higher Level Without Consistency.';
    content.appendChild(lastLine);
}