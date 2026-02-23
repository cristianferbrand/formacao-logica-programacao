let marca = "Apple"
console.log(marca !== "Samsung")

// = é atribuição
// == é para compara o valor
// === é para comparar o valor e o formato do conteúdo
// !== é diferente ?

// guardar o valor em uma variável de resultado TRUE?FALSE
let cpfBloqueado = "123.445.222-45"
let cpfUsuario = "222.111.222-09"
let ehCPFBloqueado = cpfUsuario === cpfBloqueado

console.log("O usuario está barrado ? " + ehCPFBloqueado)

let idadeMinima = 18
let idadeUsuario = 18
let idadePemitidaValida = idadeUsuario >= idadeMinima

console.log(idadePemitidaValida)

let idadeDeCorte = 50
let idadePessoa = 50

let resultadoEhTerceiraIdade = idadeDeCorte <= idadePessoa
console.log(resultadoEhTerceiraIdade)