let valorVariavel: unknown;

valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'Oi! Tudo bem?';

// quando da erro
let valor: unknown;

// let valor1: boolean = valor;

// Diferença entre unknown e any
let algumaCoisaAny: any;
let algumaCoisaUnknown: unknown;

//console.log(algumaCoisaAny.toFixed(2));

if (typeof algumaCoisaUnknown === 'number') {
  console.log(algumaCoisaUnknown.toFixed(1));
}
