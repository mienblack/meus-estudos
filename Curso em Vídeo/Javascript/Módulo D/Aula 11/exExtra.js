function brasileiro() {
    var pais = document.getElementById("country");
    pais = pais.value;
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = `Você nasceu em <strong>${pais}</strong>.`;

    pais = pais.toUpperCase()
    if (pais == "BRASIL") {
        resultado.innerHTML += `<h2>Você é brasileiro!</h2>`;
    } else {
        resultado.innerHTML += `<h2>Você não é brasileiro</h2>`;
    }
}