//Iniciar variáveis
let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputDuracao = document.getElementById('duracao');

let resultado = document.getElementById('resultado');

//Calculos baseados nas fuções de quantidade
function calcular () {
    console.log('Calculando...')

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let quantCarne = carnePorPessoa (duracao) * adultos + (carnePorPessoa(duracao) * criancas)
    let quantBebida = bebidaPorPessoa (duracao) * adultos + (bebidaPorPessoa(duracao) * criancas)
    let quantCerveja = cervejaPorPessoa (duracao) * adultos;

    resultado.innerHTML = `<p>${quantCarne/1000} Kg de carne`;
    resultado.innerHTML += `<p>${Math.ceil(quantBebida / 2000)} Garrafas de 2l de bebidas`;
    resultado.innerHTML += `<p>${Math.ceil(quantCerveja/355)} Latas de cerveja`;
}

//Quantidade de carne por pessoa
function carnePorPessoa (duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

//Quantidade de bebida por pessoa
function bebidaPorPessoa (duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}

//Quantidade de cerveja por adulto
function cervejaPorPessoa (duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}