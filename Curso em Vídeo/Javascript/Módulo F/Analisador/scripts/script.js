//Inicializar variáveis
let n = document.getElementById("inputNumber");
let selectList = document.getElementById("selectList");
let resultado = document.getElementById('resultado');
let numberList = [];

//Verificar se o númwro está dentro do intervalo
function inRange(num) {
    if (num >= 1 && num <= 100) {
        return true
    } else {
        return false
    }
}

//Verificar se o número já foi adicionado a lista
function inList(num, list) {
    if (list.indexOf(num) != -1) {
        return true
    } else {
        return false
    }
}

//Adiciona o número a lista
function adicionar() {
    number = Number(n.value)
    if (inRange(number) && !inList(number, numberList)) {
        numberList.push(number);
        let item = document.createElement("option");
        item.text = `O valor ${number} foi adicionado`;
        item.value = `item${number}`;
        selectList.appendChild(item);
        resultado.innerHTML = ''
    } else {
        alert("Valor inválido ou já adicionado na lista!")
    }
    n.value = ''
    n.focus()
}

//Mostra resultados
function finalizar() {
    if (numberList.length == 0) {
        alert("Adicione valores antes de finalizar!")
    } else {
        resultado.innerHTML = '';
        resultado.innerHTML += `<p>Ao todo temos ${numberList.length} números cadastrados.</p>`;
        resultado.innerHTML += `<p>O menor valor informado foi ${menor()}.</p>`;
        resultado.innerHTML += `<p>O maior valor informado foi ${maior()}.</p>`;
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma()}.</p>`;
        resultado.innerHTML += `<p>A média dos valores digitados é ${media()}.</p>`;
    }
}

//Retorna o maior número
function maior() {
    let maiorNum = numberList[0];
    for (number in numberList) {
        if (numberList[number] > maiorNum) {
            maiorNum = numberList[number]
        }
    }
    return maiorNum
}

//Retorna o menor número
function menor() {
    let menorNum = numberList[0]
    for (number in numberList) {
        if (numberList[number] < menorNum) {
            menorNum = numberList[number]
        }
    }
    return menorNum
}

//Retorna o soma entre todos os números
function soma() {
    let sumNumber = 0
    for (let num of numberList) {
        sumNumber += num
    }
    return sumNumber
}

//Retorna a média entre todos os números
function media() {
    return soma() / numberList.length
}