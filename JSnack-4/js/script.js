let resultElement = document.querySelector("#result");
let numberElement;
let isNumber = false;


do {

    numberElement = Number(prompt('Inserisci un numero'));

    if (isNaN(numberElement)) {
        alert('Il valore inserito non è un numero');
    } else {
        isNumber = true;
    }

} while (!isNumber)


if (numberElement % 2 == 0){

    resultElement.innerHTML = `Il numero inserito è ${numberElement}`;

} else {

    resultElement.innerHTML = `Il numero inserito era dispari, ed era ${numberElement}, il primo numero disponibile pari è ${numberElement + 1}`;

}