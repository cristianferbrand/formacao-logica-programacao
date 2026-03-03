// classe alem de guardar informações, também tem comportamentos, ou seja, funções

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