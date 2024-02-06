let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
const bigArray = ['1', '2', '3', '4', '5'];
const smallArray = ['1', '2', '3'];

let isEqual = false;

do {

    smallArray.push(prompt('Inserisci un elemento'));

    if (bigArray.length == smallArray.length){
        isEqual = true;
    } else {
        alert('Inserisci un altro elemento');
    }

} while (!isEqual);

if (bigArray.length == smallArray.length) {
    titleElement.innerHTML = `I due array hanno lo stesso numero di elementi`;
    resultElement.innerHTML = `[${bigArray}] e [${smallArray}]`;
}