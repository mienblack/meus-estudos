function verificar() {
    //Iniciar variáveis
    let year = new Date().getFullYear();
    let formAno = document.getElementById("txtano").value;
    let resultado = document.getElementById("res");

    //Verificação de erro
    if (formAno == 0 || formAno > year) {
        alert("[ERRO] Verifique os dados e tente novamente!")
    } else {
        let formSex = document.getElementsByName("radioSex");
        let idade = year - Number(formAno);
        let artigo = '';
        let genero = '';

        let image = document.createElement('img');
        image.setAttribute('id', 'picture');
        if (formSex[0].checked) {
            artigo = 'um';
            genero = 'homem';
            if (idade < 11) {
                //Criança
                image.setAttribute('src', './images/crianca_mas.jpg');
            } else if (idade < 21) {
                //Jovem
                image.setAttribute('src', './images/jovem_mas.jpg');
            } else if (idade < 51) {
                //Adulto
                image.setAttribute('src', './images/adulto_mas.jpg');
            } else {
                //Idoso
                image.setAttribute('src', './images/idoso_mas.jpg');
            }
        } else {
            artigo = 'uma';
            genero = 'mulher';
            if (idade < 11) {
                //Criança
                image.setAttribute('src', './images/crianca_fem.jpg');
            } else if (idade < 21) {
                //Jovem
                image.setAttribute('src', './images/jovem_fem.jpg');
            } else if (idade < 51) {
                //Adulto
                image.setAttribute('src', './images/adulto_fem.jpg');
            } else {
                //Idoso
                image.setAttribute('src', './images/idoso_fem.jpg');
            }
        }
        //Mostra resultado na tela
        resultado.innerHTML = `Detectamos ${artigo} ${genero} com ${idade} anos.`;

        let divImage = document.createElement('div')
        divImage.setAttribute('id', 'divImage')
        resultado.appendChild(divImage)
        divImage.appendChild(image);
        console.log(divImage)
        console.log(resultado)
    }
}