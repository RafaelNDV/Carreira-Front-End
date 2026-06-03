const pessoa = {
    nome: 'Nathália',
    idade: 17,
    profissao: 'Estudante'
}

// console.log(pessoa.nome)
// console.log(pessoa.idade)

const {nome, idade} = pessoa

console.log(nome)
console.log(idade)

function saudacao({nome, idade}){
    console.log('Olá,', nome, idade)
}

saudacao(pessoa)

const frutas = ['Uva', 'banana']

const [primeira, segunda] = frutas

console.log(primeira)