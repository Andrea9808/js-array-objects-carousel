// dichiaro le costanti
const items = document.querySelectorAll(".item");


// prendo in considerazione il bottone next e prev
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");



const images = [
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    },

    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 

    { 
        image: 'img/03.webp',
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    },

    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, 

    { 
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    }];



// Popolo gli elementi del carousel con le informazioni dalle immagini
items.forEach((item, i) => {
    item.innerHTML = 
    ` 
        <img src="${images[i].image}">
        <h2>${images[i].title}</h2>
        <p>${images[i].text}</p>
    `;
});


// navigazione

// imposto l'indice da dover partire
let activeItem = 0;

const totalItems = items.length;

// al click del bottone "next"
next.addEventListener("click", function () {
    //togliamo la classe active
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // incremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem + 1) % totalItems;

    //aggiungiamo la classe active all'elemento successivo
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});

// al click del bottone "prev"
prev.addEventListener("click", function () {
    //togliamo la classe active
    items[activeItem].classList.remove("active");
    items[activeItem].classList.add("hidden");

    // decremento dell'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem - 1 + totalItems) % totalItems;

    //aggiungiamo la classe active all'elemento precedente
    items[activeItem].classList.add("active");
    items[activeItem].classList.remove("hidden");
});