let resultElement = document.querySelector("#result");
let titleElement = document.querySelector("#text");
let number;
let sum = 0;

do {

    number = prompt ('Inserisci un numero fino ad un massimo di 50');
    
    if (isNaN(number)) {
        alert('Il valore inserito non è un numero');
    } else {
        number = Number(number);
        sum += number;
    }
    

} while (sum < 50);

titleElement.innerHTML = `La somma dei numeri digitati e'`;
resultElement.innerHTML = `${sum}`;