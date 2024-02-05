let resultElement = document.querySelector("#result");
let number;
let sum = 0;

do {

    number = Number(prompt ('Inserisci un numero fino ad un massimo di 50'));
    sum += number;

} while (sum < 50);


resultElement.innerHTML = `${sum}`;