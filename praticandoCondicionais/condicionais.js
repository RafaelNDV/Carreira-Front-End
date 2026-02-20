// const num1 = 2
// const num2 = 8
// const operacao = 'multiplicação'

// if(operacao === 'soma'){
//     console.log(num1 + num2)
// }else if(operacao === 'multiplicação'){
//     console.log(num1 * num2)
// }else{
//     console.log('Operção inválida')
// }


// const salario = 12000

// if(salario >= 11000){
//     console.log('Aumento de 3%, então salario: ', salario * 1.03)
// }else if(salario >= 7000){
//     console.log('Aumento de 5%, então salario: ', salario * 1.05)
// }else if(salario >= 4000){
//     console.log('Aumento de 7%, então salario: ', salario * 1.07)
// }else if(salario > 0){
//     console.log('Aumento de 9%, então salario: ', salario * 1.09)
// }else{
//     console.log('Valor inválido')
// }


// Exercicio para analisar se um ano é bissexto

// const ano = 1992

// if((ano % 4 === 0 && ano % 100 !== 0) || (ano % 100 === 0 && ano % 400 === 0)){
//     console.log(`O ano ${ano} é bissexto`)
// }else{
//     console.log('Não é bissexto')
// }


// Exercicio de bônus na nota

// const nome = 'Roberta'
// const nota = 8
// const faltas = 2

// const bonus = nota >= 8 && faltas <= 2 ? true : false

// console.log('O bonus é', bonus)


// Exercicio para usar o Switch

const user = 3

switch(user){
    case 1:
        console.log('Acesso limitado')
        break
    case 2:
        console.log('acesso total ao app')
        break
    case 3:
        console.log('Acesso total ao app e bônus')
        break
    default:
        console.log('Tipo de user desconhecido')
        break
}