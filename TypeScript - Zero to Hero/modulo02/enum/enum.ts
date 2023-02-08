// Number Enum
enum Idioma {
  Portugues,
  Espanhol,
  Inglês,
  Frances,
}
console.log(Idioma);

// String Enum
enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}
console.log(Dia);

// Acessar valor de um enum com uma chave
const enum Comida {
  Hamburguer = 'Hamburguer',
  Pizza = 'Pizza',
  Churrasco = 'Churrasco',
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas!';
}
console.log(comida(Comida.Pizza));

// Quando usar Enum
enum Tarefa {
  Todo,
  Progress,
  Done,
}
const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluída com sucesso!',
};

if (concluidaTarefa.status === Tarefa.Done) {
  console.log('Enviar email!');
}
