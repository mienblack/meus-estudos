function gerarTabuada() {
    //Inicializar variáveis
    let numero = (Number(document.getElementById("numero").value));
    let tabuada = document.getElementById("selectTabuada");
    tabuada.size = 10;

    //Validação de erro
    if (numero.length == 0) {
        alert("Por Favor, Digite um número!")
    } else {
        let c = 1;
        tabuada.innerHTML = '';
        while (c <= 10) {
            let item = document.createElement("option");
            item.text = `${numero} x ${c} = ${numero * c}`;
            tabuada.value = `v${c}`;
            tabuada.appendChild(item)
            c++
        }
    }
}