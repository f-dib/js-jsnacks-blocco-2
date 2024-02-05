let resultElement = document.querySelector("#result");
const bigArray = ['1', '2', '3', '4', '5'];
const smallArray = ['1', '2', '3'];

let isEqual = false;

do {

    smallArray.push(prompt('Inserisci un numero'));

    if (bigArray.length == smallArray.length){
        isEqual = true;
    } else {
        alert('Inserisci un altro numero');
    }

} while (!isEqual);

if (bigArray.length == smallArray.length) {
    resultElement.innerHTML = `I due array hanno lo stesso numero di elementi ${bigArray} e ${smallArray}`;
}