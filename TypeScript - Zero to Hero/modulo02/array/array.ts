// com o []
let frutas: string[] = ['🍍', '🍊', '🍏'];
console.log(frutas[0]);

// array object
let frutas1: Array<string> = ['🍍', '🍊', '🍏'];
console.log(frutas1[2]);

// push
let idiomas: Array<string> = ['Português', 'Inglês', 'Alemão'];
console.log(idiomas);
idiomas.push('Mandarim');
console.log(idiomas);

// length
console.log(idiomas.length);

// Spread Operator
let listaNumeros: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
listaNumeros = [...listaNumeros, 10];
console.log(listaNumeros);

// laços de iteração
let techsArray: string[] = new Array('Javascript', 'Typescript', 'Python');
function techFunction(techs: string[]) {
  for (let i = 0; i < techs.length; i++) {
    console.log(techs[i]);
  }
}
techFunction(techsArray);
