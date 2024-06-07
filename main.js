// Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

// creare un ciclo che generi i numeri da 1 a 100

const container = document.querySelector(".container")

for (let i = 1; i <= 100; i++ ) {
    //individua gli elementi divisibili si per 3 che per 5 e cambia il valore dei numeri trovati in "FizzBuzz"
    if (i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz")

    //individua gli elementi divisibili per 3 e cambia il valore dei numeri trovati in "Fizz" 
    } else if (i%3 == 0) {
        console.log("Fizz")

    //individua gli elementi divisibili per 5 e cambia il valore dei numeri trovati in "Buzz"
    } else if (i%5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
    // creiamo delle box che racchiudano i numeri
    const box = `<div class="box">${i}</div>`
    console.log(box)
    container.innerHTML += box;
}

//carichiamo il risultato in pagina