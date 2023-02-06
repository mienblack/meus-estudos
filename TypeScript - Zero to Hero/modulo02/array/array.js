"use strict";
// com o []
let frutas = ['🍍', '🍊', '🍏'];
console.log(frutas[0]);
// array object
let frutas1 = ['🍍', '🍊', '🍏'];
console.log(frutas1[2]);
// push
let idiomas = ['Português', 'Inglês', 'Alemão'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);
// length
console.log(idiomas.length);
// Spread Operator
let listaNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
listaNumeros = [...listaNumeros, 10];
console.log(listaNumeros);
// laços de iteração
let techsArray = new Array('Javascript', 'Typescript', 'Python');
function techFunction(techs) {
    for (let i = 0; i < techs.length; i++) {
        console.log(techs[i]);
    }
}
techFunction(techsArray);
