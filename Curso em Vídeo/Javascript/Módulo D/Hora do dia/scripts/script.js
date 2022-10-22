//Mosta mensagem com horário e imagem correta
function load() {
    let msg = document.getElementById("msg")
    let imagem = document.getElementById("imagem");
    let date = new Date();
    let hours = date.getHours()

    msg.innerHTML = `Agora são ${hours} horas`;
    if (hours < 12) {
        imagem.src = "./images/amanhecer.jpg";
        document.body.style.background = '#e2cd9f'
    } else if (hours < 18) {
        imagem.src = "./images/entardecer.jpg";
        document.body.style.background = '#b9846f'
    } else {
        imagem.src = "./images/anoitecer.jpg";
        document.body.style.background = '#515154'
    }
}