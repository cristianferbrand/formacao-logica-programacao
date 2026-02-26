// ação: fazer uma torrada
// entrada: pão
// ação: torrada

torrar()

function torrar(){
    console.log("Torrando o pão");
    injetarPao() // Função que chama função
}

function injetarPao(){
    console.log("Preparando para injetar pão na torradeira");
    console.log("Finalizado");
}