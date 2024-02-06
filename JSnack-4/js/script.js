let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
let numberElement;
let isNumber = false;


do {

    numberElement = Number(prompt('Stampo solo numeri pari'));

    if (isNaN(numberElement)) {
        alert('Il valore inserito non è un numero');
    } else {
        isNumber = true;
    }

} while (!isNumber)


if (numberElement % 2 == 0){

    titleElement.innerHTML = `Bravo! Il numero e' pari`;
    resultElement.innerHTML = `${numberElement}`;

} else {

    titleElement.innerHTML = `Peccato! Il numero inserito era dispari, ed era ${numberElement}, il primo numero disponibile pari e'`;
    resultElement.innerHTML = `${numberElement + 1}`;

}