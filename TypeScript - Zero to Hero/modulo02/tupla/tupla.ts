// Uso simples de tupla
let pessoa: [string, string, number];
pessoa = ['Damien Costa', 'Dev Front-end', 20];

console.log(pessoa);

// Acessando o valor da tupla
console.log(pessoa[1]);

// Spread Operator
let listaFrutas: [string, ...string[]] = [
  'Abacaxi',
  'Maçã',
  'Uva',
  'Pera',
  'Kiwi',
];
console.log(...listaFrutas);

// Lableled Tuple
let pessoa1: [nome: string, idade: number] = ['Damien', 20];
console.log(pessoa1);

// Lista Heterogênea
let listaFrutas2: [number, boolean, ...string[]] = [10, false, ...listaFrutas];
console.log(listaFrutas2);

// Uso de função com tupla
function listarPessoas(nome: string[], idade: number[]) {
  return [...nome, ...idade];
}

console.log(listarPessoas(['Damien', 'Janete'], [20, 40]));

// Tuplas com Spread Operator na função
type Nome =
  | [primeiroNome: string, sobrenome: string]
  | [primeiroNome: string, nomeDoMeio: string, sobrenome: string];

function criarPessoa(...nome: Nome) {
  return [...nome];
}
console.log(criarPessoa('Damien', 'Costa'));
console.log(criarPessoa('Damien', 'Felipe', 'Costa'));
