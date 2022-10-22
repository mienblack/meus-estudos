//Iniciar variáveis
var i = document.getElementById("txtInicio");
var f = document.getElementById("txtFim");
var p = document.getElementById("txtPasso");
var resultado = document.getElementById('resultado');

function contar() {
    resultado.innerHTML = ''

    //Valores  dos  inputs
    let inicio = Number(i.value)
    let fim = Number(f.value)
    let passo = Number(p.value)

    //Validação de dados
    if (inicio.length == 0 || fim.length == 0 || passo.length == 0) {
        alert("[ERRO] Faltam Dados")
    } else {
        resultado.innerHTML = "Contando:<br>";
        //Validar passo
        if (passo == 0) {
            alert("Passo inválido! Considerando PASSO 1")
            passo = 1
        }
        //Mostrar sequência na tela
        if (inicio < fim) {
            for (let c = inicio; c <= fim; c += passo) {
                resultado.innerHTML += `${c} ➡️ `;
            }
        } else {
            for (let c = inicio; c >= fim; c -= passo) {
                resultado.innerHTML += `${c} ➡️ `;
            }
        }
        resultado.innerHTML += "🏴"
    }
}