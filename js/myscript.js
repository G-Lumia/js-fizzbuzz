// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*Prima di partire a scrivere codice poniamoci qualche domanda:*Come faccio a sapere se un numero è divisibile per un altro?
// Abbiamo visto qualcosa di particolare che possiamo usare?


// ciclo iterativo che scorre numeri dal 1 fino a 100
for(let i = 1; i <= 100 ; i++)
{
    // viene verificato che il numero "i" sia divisibile per 3 e per 5. Nel caso lo fosse viene creata una casella FIZZ BUZZ
    if(((i % 3) == 0) && ((i % 5) == 0))
        {
            document.getElementById("fizzBuzz").innerHTML += `<div class="inner-square fizz-buzz"> FIZZ <br> BUZZ </div>`;
        }
        else
        {
            // viene verificato che la variabile "i" sia divisibile per 3. Nel caso lo fosse viene creata una casella FIZZ
            if((i % 3) == 0)
            {
                document.getElementById("fizzBuzz").innerHTML += `<div class="inner-square fizz"> FIZZ </div>`;
            }
            // viene verificato che la variabile "i" sia divisibile per 5. Nel caso lo fosse viene creata una casella BUZZ
            if((i % 5) == 0)
            {
                document.getElementById("fizzBuzz").innerHTML += `<div class="inner-square buzz"> BUZZ </div>`;
            }
            // Se la variabile "i" non è divisibile per 3 o per 5, verrà screata una casella con il valore di "i" scritto al suo interno
            if(((i % 3) != 0) && ((i % 5) != 0))
            {
                document.getElementById("fizzBuzz").innerHTML += `<div class="inner-square"> ${i} </div>`;
            }
        }
}