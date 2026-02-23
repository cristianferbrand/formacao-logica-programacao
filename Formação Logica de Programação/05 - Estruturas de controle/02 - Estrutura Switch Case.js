// Tópico: O Que É Um Switch Case no JavaScript?

// Imagine que você está organizando suas roupas por cores. Você tem uma pilha de camisetas vermelhas, azuis, verdes e amarelas. Quando você quiser usar uma camiseta de uma cor específica, você vai procurar na pilha até encontrar a cor certa, certo? O Switch Case no JavaScript é como isso, mas para o computador escolher coisas baseadas em diferentes valores!

// Tópico: Como Funciona o Switch Case?

// O Switch Case é uma maneira legal que o JavaScript tem de fazer escolhas. É como se o computador tivesse várias opções e escolhesse uma com base em um valor que você dá a ele. Vamos ver como isso funciona:

// 1. Primeiro, você diz ao computador o valor que quer verificar.
// 2. Depois, o computador olha para todas as opções que você forneceu e escolhe a opção certa.

// Tópico: Exemplos de Switch Case em JavaScript

// Vamos usar um exemplo para entender melhor. Vamos imaginar que estamos fazendo um programa sobre dias da semana e queremos mostrar o que você pode fazer em cada dia.

let dia = "terça"; // Você pode mudar isso para outros dias

switch (dia) {
  case "segunda":
    console.log("Dia de começar a semana com energia!");
    break;
  case "terça":
    console.log("Hora de aprender coisas novas!");
    break;
  case "quarta":
    console.log("Metade da semana, continue firme!");
    break;
  case "quinta":
    console.log("Quase lá, um pouco mais de esforço!");
    break;
  case "sexta":
    console.log("Dia de comemorar, o fim de semana está chegando!");
    break;
  default:
    console.log("Final de semana! Descanse e divirta-se!");
}
