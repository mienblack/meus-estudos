//Inicializa times que já serão mostrados na tela
var corinthians = {
  nome: "Corinthians",
  vitorias: 5,
  empates: 3,
  derrotas: 2,
  pontos: 0
};
var saoPaulo = {
  nome: "São Paulo",
  vitorias: 4,
  empates: 4,
  derrotas: 2,
  pontos: 0
};
var palmeiras = {
  nome: "Palmeiras",
  vitorias: 3,
  empates: 4,
  derrotas: 3,
  pontos: 0
};
var santos = {
  nome: "Santos",
  vitorias: 3,
  empates: 3,
  derrotas: 4,
  pontos: 0
};

corinthians.pontos = calculaPontos(corinthians);
saoPaulo.pontos = calculaPontos(saoPaulo);
palmeiras.pontos = calculaPontos(palmeiras);
santos.pontos = calculaPontos(santos);

function calculaPontos(time) {
  var pontos = time.vitorias * 3 + time.empates;
  return pontos;
}

var times = [corinthians, saoPaulo, palmeiras, santos];

function mostrarTime(time) {
  var elemento = "";
  //gerar dados da tabela
  for (var i = 0; i < times.length; i++) {
    elemento += "<tr>";
    elemento += "<td>" + time[i].nome;
    elemento += "<td>" + time[i].vitorias;
    elemento += "<td>" + time[i].empates;
    elemento += "<td>" + time[i].derrotas;
    elemento += "<td>" + time[i].pontos;
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
  }
  //mostrar tabela gerada no html
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;

  let buttonTeam = document.createElement("button")
  buttonTeam.innerText = 'Adicionar Time'
  buttonTeam.id = 'buttonTeam'
  buttonTeam.addEventListener('click', adicionarTeam)
  document.body.appendChild(buttonTeam)
}

mostrarTime(times);

function adicionarVitoria(i) {
  var time = times[i];
  time.vitorias++;
  time.pontos = calculaPontos(time);
  mostrarTime(times);
}

function adicionarEmpate(i) {
  var time = times[i];
  time.empates++;
  time.pontos = calculaPontos(time);
  mostrarTime(times);
}

function adicionarDerrota(i) {
  var time = times[i];
  time.derrotas++;
  mostrarTime(times);
}

//Criar objeto que é o time novo
//Criar Inputs para digitar
//Passar valores digitados  para o objeto
//Motrar objeto na tela

//Novo time
function adicionarTeam() {
  let newTeam = {
    nome: '',
    vitorias: '',
    empates: '',
    derrotas: '',
    pontos: ''
  }

  inputTeam(newTeam)
}

//Cria inputs que terão os valores
function inputTeam(team) {
  let newTeamValues = document.createElement('tr')
  newTeamValues.innerHTML = `<td><input type='text'> </input></td>`
  newTeamValues.innerHTML += `<td><input type='number' size='5'> </input></td>`
  newTeamValues.innerHTML += `<td><input type='number' size='5'> </input></td>`
  newTeamValues.innerHTML += `<td><input type='number' size='5'> </input></td>`
  newTeamValues.innerHTML += `<td><input type='number' size='5'> </input></td>`
  newTeamValues.innerHTML += "<td><button onClick='adicionarVitoria(" + times.length + ")'>Vitória</button></td>";
  newTeamValues.innerHTML += "<td><button onClick='adicionarEmpate(" + times.length + ")'>Empate</button></td>";
  newTeamValues.innerHTML += "<td><button onClick='adicionarDerrota(" + times.length + ")'>Derrota</button></td>";
  
  tabelaJogadores.appendChild(newTeamValues)

  //Adiciona botão de adicionar a tabela
  let buttonAddValue = document.createElement('button')
  buttonAddValue.innerText = 'Adicionar a Tabela'
  buttonAddValue.id = 'buttonAddValue'
  buttonAddValue.addEventListener('click', inputValue(team))
  document.getElementById('divTable').appendChild(buttonAddValue)
}

//Pega os valores do input e coloca no lugar
function inputValue(team) {
  team.nome = document.get
}