//JSON - JavaScript Object Notation
//chave e valor com o objetivo de transferir dados

let invoice = {
    name: "Cristinfer",
    age: 32,
    products: {
        0: ["notebook", 2500],
        1: ["smartphone", 1500],
        2: ["tablet", 800]
    }
}

function generateInvoice(invoice) {
    console.log(`O comprador é ${invoice.name}`)
    console.log(`Idade é ${invoice.age}`)
    console.log("------------")
    for (let index in invoice.products){
        let [productName, productPrice] = invoice.products[index]
        console.log(`- ${productName}: R$ ${productPrice}`)
    }
}