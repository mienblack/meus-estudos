//Quantas notas mostrar
function mostrarNotas() {
    let divNotas = document.getElementById("divNotas");
    let quantasNotas = document.getElementById("quantas").value;

    for (let i = 0; i < quantasNotas; i++) {
        divNotas.innerHTML += `<input class="nota" type="number" name="nota0${i + 1}" placeholder="Nota 0${i + 1}">`
    }
    divNotas.innerHTML += `<button id="btnMedia" class="btn">Calcule a média</button>`

    document.getElementById("btnNotas").disabled = true;

    let btnMedia = document.getElementById("btnMedia");
    btnMedia.addEventListener('click', mostrarMedia)
}

//Mostrar média
function mostrarMedia() {
    let quantasNotas = document.getElementById("quantas").value;
    let valorNotas = document.getElementsByClassName("nota");

    let notas = []
    let somaNotas = 0
    for (let i = 0; i < quantasNotas; i++) {
        notas.push(parseFloat(valorNotas[i].value))
        somaNotas += notas[i]
    }
    var calculoMedia =somaNotas/notas.length
    var mediaFinal = calculoMedia.toFixed(1)
    
    let media = document.getElementById("media");
    media.innerHTML = `Sua média final foi ${mediaFinal}!`
}

