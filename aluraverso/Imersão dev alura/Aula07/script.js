//Cria cartas
var carta1 = {
    nome: "Bulbassauro",
    atributos: {
      ataque: 7,
      defesa: 8,
      magia: 6
    }
  }
  
  var carta2 = {
    nome: "Charmander",
    atributos: {
      ataque: 9,
      defesa: 5,
      magia: 7
    }
  }
  
  var carta3 = {
    nome: "Squirtle",
    atributos: {
      ataque: 6,
      defesa: 9,
      magia: 7
    }
  }
  
  var cartas = [carta1, carta2, carta3];
  
  var cartaMaquina;
  var cartaJogador;
  
  //Sortea as cartas
  function sortearCarta() {
    var indiceCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[indiceCartaMaquina]
    
    var indiceCartaJogador = parseInt(Math.random() * 3)
    while (indiceCartaMaquina == indiceCartaJogador) {
      indiceCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[indiceCartaJogador]
    console.log(cartaJogador)
    
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    
    exibirOpcoes()
  }
  
  //Exibe atributos das cartas
  function exibirOpcoes() {
    var opcoes = document.getElementById("opcoes")
    var opcoesTexto = ""
    
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo
    }
      opcoes.innerHTML = opcoesTexto
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
    
    for (var i = 0; i < radioAtributos.length; i++){
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value
      }
    }
  }
  
  //Seleciona o atributo clicado para jogar
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var valorJogador = cartaJogador.atributos[atributoSelecionado]
    var valorMaquina = cartaMaquina.atributos[atributoSelecionado]
    var elementoResultado = document.getElementById("resultado")
  
    if (valorJogador > valorMaquina)  {
      elementoResultado.innerHTML = "Você Venceu!!!"
    } else if (valorMaquina > valorJogador) {
      elementoResultado.innerHTML = "Você Perdeu"
    } else {
      elementoResultado.innerHTML = "EMPATE"
    }
    console.log(valorMaquina)
  }