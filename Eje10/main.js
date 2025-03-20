let numero =1; // inicalizado
let i =0;

do {   // se ejecuta almenos una vez
    if (i === 0) { // si i es exactamente igual al 0 se cumple
        i++; // i incrementa
        numero--; //  n decrementa 
        console.log(numero); // se imprimie numero que en este momento seria 0
    }else{  // si no se cumple el primer if
        numero++; // numero incrementa
        console.log(numero); // es decir va a ir imprimiendo de 1 en 1 hasta que se rompa el while
    }
} while (numero<5); // se rompe el codigo cuando llega hasta el 5