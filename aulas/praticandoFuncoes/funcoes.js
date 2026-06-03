// FUNÇÕES PADRÕES MESMO

// function calculaPotencia(num, exponencial){
//     return num ** exponencial
// }

// console.log(calculaPotencia(4, 3))

// EXPRESSÃO DE FUNÇÃO

// const fatorial = function f(numero){
//     if(numero === 0 || numero === 1) return 1
//     return numero * f(numero - 1)
// }

// console.log(fatorial(5))


// ARROW FUNCTION

// const calculaJuros = (valor, juros, tempo) => {
//     let taxaJuros = (juros/100) + 1
//     return valor * Math.pow(taxaJuros, tempo)
// }

// console.log(calculaJuros(1000, 5, 2))


// CALLBACK

// function soma (a, b) { return a + b }
// function multiplica(a, b) { return a * b }

// function calcula(fnOperacao, valorA, ValorB){
//     return fnOperacao(valorA, ValorB)
// }

// console.log(calcula(soma, 5, 5))
// console.log(calcula(multiplica, 5, 5))

const userId = '4545656'

const avisaUsuario = userId => console.log(`sessão de ${userId} está inativa`)

setTimeout(avisaUsuario, 2000, userId)