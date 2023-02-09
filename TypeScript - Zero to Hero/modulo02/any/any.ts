const a: any = 20;
const b: any = 'Damien';
const c = a + b;

console.log(c);

// any inferido implicitamente
let frase;
frase = 'Olá, tudo bem?';

console.log(frase);

// Quando devemos usar o tipo any?
const formulario: {
  [campoFormulario: string]: any;
} = {
  nome: 'Damien',
  sobrenome: 'Pereira',
  idade: 20,
};

console.log(formulario);
