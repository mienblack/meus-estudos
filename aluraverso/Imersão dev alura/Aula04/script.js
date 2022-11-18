var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/0/0d/EsdlaIII.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/9/9b/Avengers_Endgame.jpg/250px-Avengers_Endgame.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/thumb/1/13/John_wick_ver3.jpg/250px-John_wick_ver3.jpg"
  ];
  listaFilmes.push(
    "https://ingresso-a.akamaihd.net/img/cinema/cartaz/7766-cartaz.jpg"
  );
  
  for (var i = 0; i < listaFilmes.length; i++) {
    document.write("<img src=" + listaFilmes[i] + ">");
  }
  