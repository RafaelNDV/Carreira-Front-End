// HOF -> Higher-Order Function === função que recebe outra função como parametro

function calcular(numero1, numero2, operacao){
    return operacao(numero1, numero2)
}

function soma(num1, num2){ // SOMA É UM CALLBACK
    return num1 + num2
}

const divisao = (num1, num2) => num1 / num2 // DIVISAO É UM CALLBACK

const resultadoSoma = calcular(3, 8, soma)

const resultadoDivisao = calcular(32, 8, divisao)

console.log(resultadoSoma)

console.log(resultadoDivisao)