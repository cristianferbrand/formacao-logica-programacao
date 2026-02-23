// AND ( && )
let idade = 18
let vistoVerificado = false
let resultado =  (idade >= 18) && (vistoVerificado === true) //true e false = false
console.log(resultado) 

// AND ( && ) - 100 moedas coletadas E 1 item estrela
let moedasColetadas = 99
let itemJogo = "estrela"
let resultadoJogo = (moedasColetadas >= 100) && (itemJogo === "estrela") //false e true = false
console.log(resultadoJogo)

// OR ( || ) - nosso boneco só pode sair se tiver sem chuva OU com guarda Chuva
let tempo = "chuva"
let item = "guarda chuva"
let podeSair = (tempo !== "chuva") || (item === "guarda chuva") //false ou true = true
console.log("nosso personagem pode sair ? " + podeSair)

// NOT  (!) - nega uma afirmação
let tempoDoDia = "chuva"
let resultadoClima = tempoDoDia === "chuva" //true
console.log(!!resultadoClima) // nega o true vira false nega novamente vira true

// NOT  (!) - nega uma afirmação
let tempoAgora = "chuva"
let horarioAgora = 8
let resultadoClimaAgora = !((tempoAgora !== "chuva") && (horarioAgora > 6)) //nega o resutlado de (false e true) = false vira true
console.log(resultadoClimaAgora)