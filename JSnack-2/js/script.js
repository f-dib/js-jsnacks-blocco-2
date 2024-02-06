let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
let number;

let random = Math.floor(Math.random() * 100) + 1;

let isEqual = false;

do {

    number = prompt ('Indovina il numero a cui ho pensato da 0 a 100');
    
    if (isNaN(number)) {
        alert('Il valore inserito non è un numero');
    } else {
        number = Number(number);
        if (number > random) {
            alert(`Il numero è troppo alto`);
        } else if (number < random) {
            alert(`Il numero è troppo basso`);
        } else {
            isEqual = true;
        }
    }


} while (!isEqual);

if (isEqual == true) {
    titleElement.innerHTML = `Bravo`;
    resultElement.innerHTML = `Hai indovinato!!`;
}