/*ESERCIZI JAVASCRIPT - DOM pt.1

ES 1: Lavoriamo con il DOM: creare una pagina HTML con 3 paragrafi e 3 bottoni. 
Il primo bottone dovra’ cambiare il colore del testo dei paragrafi in modo casuale, 
il secondo dovra’ rendere il testo dei paragrafi in grassetto
il terzo dovra’ far scomparire e ricomparire i paragrafi(ricordatevi  della proprieta’ “display: none” in CSS)!
Finire l’esempio della rubrica e del bowling */
let btnRandomColor = document.querySelector('#btnRandomColor');
console.log(btnRandomColor);

let btnBoldText = document.querySelector('#btnBoldText');
console.log(btnBoldText);

let btnMagic = document.querySelector('#btnMagic');
console.log(btnMagic);

let p = document.querySelectorAll('p');
console.log(p);

// COLORE CASUALE
btnRandomColor.addEventListener('click',() => {
    let r = Math.floor(Math.random()* (255-0+1) + 0)
    let g = Math.floor(Math.random()* (255-0+1) + 0)
    let b = Math.floor(Math.random()* (255-0+1) + 0)

    p.forEach((paragraph) => {
        paragraph.style.color = `rgb(${r},${g},${b})`
    })
})

// GRASSETTO
btnBoldText.addEventListener('click',() => {
    p.forEach((paragraph) => {
        paragraph.classList.toggle('fw-bold')
    })
})

// DISPLAY NONE
btnMagic.addEventListener('click',() => {
    p.forEach((paragraph) => {
        paragraph.classList.toggle('d-none')
    })
})
