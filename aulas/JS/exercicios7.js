// EX 01

const eu = {
    nome: 'Rafael Nestor Duarte Vasconcelos',
    idade: 22,
    profissao: 'Desenvolvedor'
}

//console.log(eu)


// EX 02

//console.log(eu.nome)


// EX 03

eu.idade = 16

// console.log(eu.idade)


// EX 04

eu.cidade = 'Fortaleza'

// console.log(eu)


// EX 05

// function apresentar(pessoa){[
//     console.log(`${pessoa.nome}, tem ${pessoa.idade} anos de idade e trabalha como ${pessoa.profissao}.`)
// ]}

// apresentar(eu)



// EX 06

// const pessoas = [
//     {nome: 'Rafael', idade: 15},
//     {nome: 'Cynthia', idade: 24},
//     {nome: 'Fernanda', idade: 49}
// ]



// // EX 07

// const maiores = pessoas.filter(pessoa => {
//     return pessoa.idade >= 18
// })

// console.log(maiores)



// EX 08

// const usuario = {
//     nome: 'Leandro',
//     saudacao: function() {
//         console.log('Olá, ', usuario.nome)
//     }
// }

// usuario.saudacao()


// EX 09

// // O objeto que o exercicio pediu não existe tentei fazer no array, e entendi porque dá errado, ele retorna um index
// for(const chave in pessoas){
//     console.log('A chave é: ', chave, 'e o valor é: ', pessoas[chave])
// }


// EX 10

const produto = {
    preco: 8, 
    quantidade: 28
}

console.log('O valor total da compra foi R$', produto.preco * produto.quantidade)