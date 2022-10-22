var numeroSecreto = parseInt(Math.random() * 11);

function Chutar() {
	var chute = parseInt(document.getElementById("valor").value);
	var resultado = document.getElementById("resultado");

	if (chute == numeroSecreto) {
		resultado.innerHTML = "Você acertou!!!";
		console.log("ACERTOU!!!");
	} else if (chute > 10 || chute < 0) {
		resultado.innerHTML = "Você deve digitar um número de 0 a 10";
		console.log("Você deve digitar um número de 0 a 10");
	} else {
		resultado.innerHTML = "ERROU! Tente novamente";
		console.log("ERROU!");
	}
}
