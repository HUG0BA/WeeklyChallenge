//Soucre
//Moure, B. (n.d.). Retos de programación semanales 2023. Retos de Programación. Retrieved October 24, 2023, from https://retosdeprogramacion.com/semanales2023
/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */


function fizzbuzz(){
    for(let i = 1; i < 101; i++){
        let display;
        if((i % 3) === 0 && (i % 5) === 0){
            display = "fizzbuzz"
        }
        else if((i % 3) === 0){
            display = "fizz"
        }
        else if((i % 5) === 0){
            display = "buzz"
        }else{
            display = i
        }
        console.log(`${display} \n`)
    }
}


