// Uso simples de tupla
let pessoa: [string, string, number];
pessoa = ['Damien Costa', 'Dev Front-end', 20];

console.log(pessoa);

// Acessando o valor da tupla
console.log(pessoa[1]);

// lableled tuple
let listaFrutas: [string, ...string[]] = [
  'Abacaxi',
  'Maçã',
  'Uva',
  'Pera',
  'Kiwi',
];
console.log();
