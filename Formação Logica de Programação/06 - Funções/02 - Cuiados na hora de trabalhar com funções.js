// função que chama todas as outras funções
// metodos são tambem funções, mas estão dentro de objetos

function main(){
    getData()
    checkData()
    checkValues()
    sendToDatabase()
}

function getData(){  
    console.log("Obtendo dados do usuário");
    if (1 < 3){
        console.log("Dados obtidos com sucesso");
    }
}

function checkData(){
    console.log("Verificando os dados do usuário");
}

function checkValues(){
    console.log("Verificando os valores do usuário");
}

function sendToDatabase(){
    console.log("Enviando os dados para o banco de dados");
}