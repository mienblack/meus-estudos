function somar() {
    var number1 = document.querySelector('input#number1');
    var number2 = document.querySelector('input#number2');
    var resultado = document.getElementById('resultado');

    number1 = Number(number1.value);
    number2 = Number(number2.value);
    sum = number1 + number2

    resultado.innerHTML = `<h2>A soma entre ${number1} e ${number2} é ${sum}</h2>`
}