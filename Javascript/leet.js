//Soucre
//Moure, B. (n.d.). Retos de programación semanales 2023. Retos de Programación. Retrieved October 24, 2023, from https://retosdeprogramacion.com/semanales2023
/*
 * Escribe un programa que reciba un texto y transforme lenguaje natural a
 * "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje
 *  se caracteriza por sustituir caracteres alfanuméricos.
 * - Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) 
 *   con el alfabeto y los números en "leet".
 *   (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")
 */

const key = {
    a : "4",
    b : "|3",
    c : "[",
    d : ")",
    e : "3",
    f : "|=",
    g : "&",
    h : "#",
    i : "1",
    j : ",_|",
    k : ">|",
    l : "1",
    m : "/\\/\\",
    n : "^/",
    o : "0",
    p : "|*",
    q : "(_,)",
    r : "|2",
    s : "5",
    t : "7",
    u : "(_)",
    v : "\\/",
    w : "\\/\\/",
    x : "><",
    y : "j",
    z : "2",
    1 : "L",
    2 : "R",
    3 : "E",
    4 : "A",
    5 : "S",
    6 : "b",
    7 : "T",
    8 : "B",
    9 : "g",
    0 : "o",
}

/*
function hacker_translator(phrase){
    const [...rest] = phrase
    console.log(`${rest}`)
}

hacker_translator("Hola que tal")
//const obj = {a : "Hola" , b : 1, c : true,}
//hacker_translator(obj)
*/

function hacker_translator(phrase){
    const [...rest] = phrase
    
    console.log(`${rest}`)
}