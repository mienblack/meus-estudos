//Mostra botões para conversão de valor
function mostrarTaxas() {
  let divTaxas = document.getElementById("divTaxas");

  //Elementos com taxas
  if (divTaxas.innerHTML == "") {
    divTaxas.innerHTML += `<button class='btn' value='0.2' id='U$'>Dólar</button>`
    divTaxas.innerHTML += `<button class='btn' value='0.2' id='€'>Euro</button>`
    divTaxas.innerHTML += `<button class='btn' value='0.17' id='£'>Libra</button>`
    divTaxas.innerHTML += `<button class='btn' value='28' id='¥'>Iene</button>`
    divTaxas.innerHTML += `<button class='btn' value='1' id='¥'>Renminbi</button>`
    divTaxas.innerHTML += `<button class='btn' id='BTC' value='0.00099'>Bitcoin</button>`
  }

  let moedas = document.querySelectorAll(".btn");
  moedas.forEach(element => {
    element.addEventListener('click', Converter)
  })
}

//Converte valor e mostra na tela
function Converter() {
  let taxa = parseFloat(this.value)
  let moedaNome = this.innerText;
  let moedaSimbolo = this.id;

  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmRealNumerico = parseFloat(valor);
  var valorConvertidoNumerico = (valorEmRealNumerico * taxa).toFixed(2);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = `O valor da conversão em ${moedaNome} fica ${moedaSimbolo}${valorConvertidoNumerico}`
  elementoValorConvertido.innerHTML = valorConvertido;
}
