//JSON - JavaScript Object Notation
//chave e valor com o objetivo de transferir dados

let name = "Cristinfer"
let age = 32
let products = ["notebook", "smartphone", "tablet"]
let productsValues = [2500, 1500, 800]

generateInvoice(name, products, productsValues, age)

function generateInvoice(name, products, productsValues, age) {
    console.log("O comprador é " + name)
    console.log("Idade é " + age)
    console.log("------------")
    console.log("Produtos é " + products[0])
    console.log("Valor é " + productsValues[0])
}