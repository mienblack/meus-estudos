const animes = [
    "Naruto",
    "One Piece",
    "Dragon Ball",
    "Slam Dunk"
]

//A indexação comça pelo 0
console.log(animes[0])

//Acessa o tamanho do array
console.log(animes.length)

//Iterável
for (let anime of animes) {
    console.log(anime)
}

//Adicionar elemento
animes.push("Fullmetal Alchemist")
console.log(animes)

//Encontrar elemento
const naruto = animes.find(anime => anime === "Naruto")
console.log(naruto)

//Deletar elemento
animes.splice(1, 1)
console.log(animes)