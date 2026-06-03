// const pessoa = {
//     nome: 'Roberta R',
//     nascimento: '2020-01-01',
//     cpf: '23445667889',
//     pontuacao: 4576,
//     trofeus: ['speedruunner', 'indie']
// }

// console.log(pessoa.nome, pessoa.trofeus[0], pessoa.trofeus[1])

// delete pessoa.cpf

// console.log(pessoa)

// function exibeTrofeus(listaTrofeus){
//     for(const trofeu of listaTrofeus){
//         console.log(`tem o troféu ${trofeu}`)
//     }
// }

// exibeTrofeus(pessoa.trofeus)


// const user = {
//     nome: 'Roberta R',
//     nascimento: '2020-01-01',
//     cpf: '23445667889',
//     pontuacao: 4576,
//     trofeus: ['speedruunner', 'indie']
// }

// user.calculaIdade = function calculaIdade(){
//     const anoNascimento = Number(this.nascimento.slice(0, 4))
//     const idade = new Date().getFullYear() - anoNascimento
//     console.log(idade)
// }

// user.calculaIdade()


// const clientes = [
//     {nome: 'Marina M', ativo: true},
//     {nome: 'Rafael R', ativo: false},
//     {nome: 'Fabio F', ativo: false}
// ]

// for(let cliente of clientes){
//     for(let chave in cliente){
//         console.log(cliente[chave])
//     }
// }