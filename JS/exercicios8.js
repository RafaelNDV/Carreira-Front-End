// EX 01

// const pessoa = {
//     nome: 'Rafael',
//     idade: 22,
//     email: 'rafaelnestor01@gmail.com'
// }

// const {nome, idade, email } = pessoa

// console.log(nome, idade, email)



// EX 02

// const linguagens = ['Pynthon', 'Java', 'JavaScript']

// const [ling1, ling2, ling3] = linguagens

// console.log(ling1, ling2, ling3)



// EX 03

// function somaTotal(...resto){
//     let total = 0
//     for(let i = 0; i < resto.length; i++){
//         total += resto[i]
//     }
//     return total
// }

// console.log(somaTotal(5, 8, 8, 10))



// EX 04

// const frutas1 = ['Uva', 'Banana']
// const frutas2 = ['Maçã', 'Pêra']
// const frutasTotal = [...frutas1, ...frutas2]
// console.log(frutasTotal)



// EX 05

// const nomes = {
//     nome: 'Rafael'
// }
// const idades = {
//     idade: 22
// }

// const total = {...nomes, ...idades}

// console.log(total)



// EX 06

// function ola(nome){
//     if(nome){
//         console.log('Olá,', nome)
//     }else{
//         console.log('olá, visitante')
//     }
// }

// ola()



// EX 07

// const agora = new Date()
// console.log(agora.toLocaleDateString('pt-br'))



// EX 08

// import {soma} from "./ex/ex8.js"

// console.log(soma(8, 10))



// EX 09

function Livro(titulo, autor){
    this.titulo = titulo
    this.autor = autor
    this.descrever = function(){
        console.log(`O livro ${this.titulo} foi escrito pelo autor ${this.autor}`)
    } 
}

const livro1 = new Livro('Vasco da gama', 'Jozão')
const livro2 = new Livro('Flamengo', 'Arrascaeta')

console.log(livro1, livro2)



// EX 10

livro1.descrever()

