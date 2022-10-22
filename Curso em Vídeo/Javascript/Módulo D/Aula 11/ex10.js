function verificar() {
    var velocidade = document.getElementById('vel');
    var resultado = document.getElementById('resultado');

    velocidade = Number(velocidade.value);
    resultado.innerHTML = `Sua velocidade é de <strong>${velocidade}km/h</strong>`;
    if (velocidade > 70) {
        resultado.innerHTML += `<h2>Você foi MULTADO por excesso de velocidade</h2>`;
    } else {
        resultado.innerHTML += `<h2>Você não ultrapassou a velocidade recomendada`;
    }
    resultado.innerHTML += `<strong>Dirija sempre com cinto de segurança</strong>`;

}