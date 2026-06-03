// EX 01

// const nomes = ['Rafael', 'Nestor', 'Duarte', 'Vasoncelos', 'Cynthia']

// nomes.forEach((nome) => {
//     console.log(nome)
// })

// EX 02

// const frutas = ['Maçã', 'Banana', 'Melancia']

// console.log(frutas)

// frutas.push('Uva')
// frutas.shift()

// console.log(frutas)

// EX 03

// const cidades = ['Limoeiro do Norte', 'Tabuleiro do Norte', 'Fortaleza', 'RJ']

// console.log(cidades.length)

// EX 04

// const numeros = [7, 3, 6, 10, 16, 8, 1, 0, 17, 20]

// let somaTotal = 0
// numeros.forEach((numero) => {
//     somaTotal += numero
// })

// console.log(somaTotal)


// EX 05

// const notas = [0, 10, 6, 5]

// let somaTotal = 0
// for(let nota of notas){
//     somaTotal += nota
// }
// let media = somaTotal / notas.length

// console.log(media)


// EX 06

// const nomes = ['Rafael', 'Nestor', 'Duarte']

// nomes.forEach((nome) => {
//     console.log(`Olá ${nome}!`)
// })


// EX 07

// const produtos = [10, 20, 100, 1]

// let produtoDesconto = produtos.map((produto) => {
//     return produto * 0.9
// })

// console.log(produtoDesconto)



// EX 08

// const idades = [10, 12, 19, 8, 34, 98, 56]

// let maiorIdade = idades.filter((idade) => {
//     return idade >= 18
// })

// console.log(maiorIdade)



// EX 09

// const precos = [10, 76, 93, 64, 89, 15, 11]

// let somaTotal = 0

// for(let preco of precos){
//     somaTotal += preco
// }
// console.log('Valor total: ', somaTotal)
// console.log('Valor total após o desconto: ', somaTotal * 0.8)



// EX 10

const tarefas = ['Duolingo', 'Ler', 'Estudar']
const feito = [false, false, true]

let tarefasConcluidas = tarefas.filter((tarefa, indice) => {
    if(!feito[indice]){
        return tarefa
    }
})

console.log(tarefasConcluidas)