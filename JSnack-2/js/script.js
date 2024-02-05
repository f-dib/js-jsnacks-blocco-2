let resultElement = document.querySelector("#result");
let number;

let random = Math.floor(Math.random() * 100) + 1;

let isEqual = false;

do {

    number = Number(prompt ('Indovina il numero a cui ho pensato da 0 a 100'));
    
    if (number > random) {
        alert(`Il numero è troppo alto`);
    } else if (number < random) {
        alert(`Il numero è troppo basso`);
    } else {
        isEqual = true;
    }

} while (!isEqual);

if (isEqual == true) {
    resultElement.innerHTML = `Hai indovinato!!`;
}