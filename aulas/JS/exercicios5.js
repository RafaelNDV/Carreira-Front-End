// EX 01

// function saudacao(){
//     console.log('Olá! Seja bem-vindo(a)!')
// }

// saudacao()


// EX 02

// function apresentarPessoa(nome, idade){
//     console.log(`Olá, meu nome é ${nome}, e tenho ${idade} anos`)
// }

// apresentarPessoa('Rafael', 22)


// EX 03

// function calcularIMC(peso, altura){
//     return peso/(altura * altura)
// }

// console.log(calcularIMC(71, 1.7))


// EX 04

// function verificarAprovacao(nota){
//     nota >= 7 ? console.log('Aprovado') : console.log('Reprovado')
// }

// verificarAprovacao(9)


// EX 05

// function ehPar(numero){
//     if(numero % 2 === 0){
//         return true
//     } else{
//         return false
//     }
// }

// console.log(ehPar(5))


// EX 06

// function soma(num1, num2){
//     return num1 + num2
// }

// console.log(`A soma dos números 2 e 7 é `, soma(2, 7))


// EX 07


// function valorTroco(valorCompra, valorPago){
//     if(valorCompra > valorPago){
//         console.log('Tu nem pode comprar fi')
//     }else if(valorCompra <= valorPago){
//         return valorPago - valorCompra
//     }else{
//         console.log('Sei oq tu fez não')
//     }
// }

// console.log('Valor do troco é :', valorTroco(100, 101))

// EX 08

// const soma = (num1, num2) => num1 + num2

// console.log(`A soma dos números 2 e 7 é `, soma(2, 7))


// EX 09

// function executarAcao(acao){
//     acao()
// }

// function acao(){
//     console.log('Executando ação')
// }

// executarAcao(acao)


// EX 10

let respostaUsuario = 3

function fazerPergunta(pergunta, respostaCerta){
    console.log(pergunta)
    if(respostaCerta === respostaUsuario){
        console.log('Resposta correta!')
    }else{
        console.log('Resposta errada')
    }
}

fazerPergunta('Quanto é 1 + 1', 2)