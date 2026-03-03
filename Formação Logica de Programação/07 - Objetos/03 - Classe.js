// classe alem de guardar informações, também tem comportamentos, ou seja, funções
// Um modelo ou plano para criar objetos que compartilham características e comportamentos semelhantes
// principal objetivo, organizar e estruturar o código, permitindo a criação de instâncias com características específicas

class formaDebolo{
    constructor(saborDaMassa, saborRecheio){
        this.saborDaMassa = saborDaMassa
        this.saborRecheio = saborRecheio
    }
    escrever(){
        console.log(`Um delicioso bolo de ${this.saborDaMassa} com ${this.saborRecheio}`)
    }
    assar(){
        console.log("Assando o bolo de " + this.saborDaMassa)
    }
}

let boloFesta = new formaDebolo("massa de chocolate", "recheio de nutella")
let boloPremium = new formaDebolo("massa de baunilha", "recheio de morango")

boloFesta.escrever()
boloPremium.escrever()
boloPremium.assar()