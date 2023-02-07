"use strict";
// Uso simples de tupla
let pessoa;
pessoa = ['Damien Costa', 'Dev Front-end', 20];
console.log(pessoa);
// Acessando o valor da tupla
console.log(pessoa[1]);
// Spread Operator
let listaFrutas = [
    'Abacaxi',
    'Maçã',
    'Uva',
    'Pera',
    'Kiwi',
];
console.log(...listaFrutas);
// Lableled Tuple
let pessoa1 = ['Damien', 20];
console.log(pessoa1);
// Lista Heterogênea
let listaFrutas2 = [10, false, ...listaFrutas];
console.log(listaFrutas2);
// Uso de função com tupla
function listarPessoas(nome, idade) {
    return [...nome, ...idade];
}
console.log(listarPessoas(['Damien', 'Janete'], [20, 40]));
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('Damien', 'Costa'));
console.log(criarPessoa('Damien', 'Felipe', 'Costa'));
