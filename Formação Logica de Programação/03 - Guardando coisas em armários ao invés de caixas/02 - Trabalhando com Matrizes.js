let nomesPokemon = ["pikachu", "charmander", "bulbasaur"]
let timePokemon = [
    ["pikachu","M", 1],
    ["charmander","F", 4]
]
//Quantas posições tem o vetor nomesPokemon
console.log(nomesPokemon.length)
//Quantas posições tem a matriz timePokemon
console.log(timePokemon.length)

console.log("O pokemon " + timePokemon[1][0] + " é do sexo " + timePokemon[1][1] + " e está no nível " + timePokemon[1][2])