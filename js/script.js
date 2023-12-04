// dichiaro le costanti
const containerInner = document.querySelector(".item-container-inner");


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



// popolo gli elementi del carousel con le informazioni dalle immagini
images.forEach((image, i) => {

    //creo l'elemento div
    const item = document.createElement("div");

    //ci aggiungo la classe item
    item.classList.add("item");

    //creo img,h2 e p che poi appendo nel container
    item.innerHTML = `
        <img src="${image.image}">
        <div class="text">
            <h2>${image.title}</h2>
            <p>${image.text}</p>
        </div>
    `;

    containerInner.appendChild(item);

    //qui ho dovuto creare rispetto al primo esercizio array, una condizione dove SE l'indice i è = a 0 (ovvero la prima img) aggiungerà la classe active, ALTRIMENTI tutte le restanti img l'hidden
    if (i === 0) {
        item.classList.add("active");
    } else {
        item.classList.add("hidden");
    }
});


// navigazione

// imposto l'indice da dover partire
let activeItem = 0;

// funzione generica per gestire next e prev
function buttonPrevNextGen(direzione) {

    // tolgo la classe active
    containerInner.children[activeItem].classList.remove("active");
    containerInner.children[activeItem].classList.add("hidden");

    // aggiorno l'indice dell'elemento con modulo per il ciclo infinito
    activeItem = (activeItem + direzione + images.length) % images.length;

    // aggiungo la classe active all'elemento corrente
    containerInner.children[activeItem].classList.add("active");
    containerInner.children[activeItem].classList.remove("hidden");
}

// al click del bottone "next"
next.addEventListener("click", () =>  {
    buttonPrevNextGen(1);
});

// al click del bottone "prev"
prev.addEventListener("click", () => {
    buttonPrevNextGen(-1);
});