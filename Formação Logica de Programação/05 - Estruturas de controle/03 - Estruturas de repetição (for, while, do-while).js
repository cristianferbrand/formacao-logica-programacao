// Exemplo de for em JavaScript

// O laço `for` é utilizado para executar um bloco de código várias vezes, de acordo com uma condição específica. O exemplo abaixo percorre um array de números e imprime cada elemento no console:

const numeros = [1, 2, 3, 4, 5];

for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

// Na primeira linha, criamos um array de números. Dentro do laço for, declaramos uma variável de controle i e a inicializamos com 0. A condição para continuar a execução é i < numeros.length, ou seja, enquanto i for menor que o tamanho do array numeros. Na última linha do loop, incrementamos i em 1 com i++.

// Exemplos

// for - laço (loop)
let pontosDeVida = 0

for(let contador = 0; contador < 10; contador++){
	pontosDeVida += 1
    console.log("Tomou poção mágica " + contador + " vezes")
}
console.log(pontosDeVida + " Total")

// while - enquanto
let contador = 0

while (contador < 3){
    console.log("olá")
    contador++
}

//do while - faz enquanto
let contadorDoWhile = 0
do{
    console.log("olá")
    contadorDoWhile++
} while (contadorDoWhile <3)

