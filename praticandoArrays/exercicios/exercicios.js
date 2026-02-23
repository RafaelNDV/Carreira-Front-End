// EX 01

// const listaDeCompras = ['arroz', 'feijão', 'macarrão', 'tomate']

// console.log('Segundo item da lista: ', listaDeCompras[1])
// listaDeCompras[listaDeCompras.length - 1] = 'fruta'
// console.log('Lista após modificação: ', listaDeCompras)


// EX 02

// const despesas = [120, 80, 45.5, 200, 60]
// let total = 0
// for(valor of despesas){
//     total += valor
// }

// console.log('Total de despesas: R$', total)



// EX 03

// const estudantes = ['Carla', 'João', 'Marina', 'Lucas', 'Beatriz']

// for(nome of estudantes){
//     console.log('Estudante:', nome)
// }



// EX 04

// const mensagens = ['Pedido confirmado', 'Pagamento aprovado', 'Produto enviado']

// mensagens.forEach((valor, i) => {
//     console.log('Notificação:', valor)
// })



// EX 05

// const tarefas = ['Estudar', 'Lavar roupa', 'Fazer compras']

// tarefas.push('Pagar boletos')
// console.log('Lista após adicionar: ', tarefas)
// tarefas.pop()
// console.log('Lista após remover a última tarefa:', tarefas)


// EX 06

// const pedidos = ['camiseta', 'calça', 'tênis']

// const copiado = [...pedidos]

// copiado.push('teste')

// console.log(pedidos)
// console.log(copiado)



// EX 07

// const livros = ['Dom casmurro', 'O cortiço', 'Capitões da Areia', 'Iracema']
// const livroProcurado = 'O cortiço'

// if(livros.indexOf(livroProcurado) === 1){
//     console.log(`O livro ${livroProcurado} está disponível.`)
// }else{
//     console.log(`O livro ${livroProcurado} não está disponível.`)
// }


// EX 08

// const precos = [100, 80, 50, 120]

// const descontos = precos.map((preco) => {
//     return preco * 0.9
// })

// console.log(descontos)


// EX 09

// const participantes = [
//   { nome: 'Ana', idade: 17 },
//   { nome: 'Bruno', idade: 22 },
//   { nome: 'Carla', idade: 19 },
//   { nome: 'Daniel', idade: 15 },
//   { nome: 'Eduarda', idade: 25 }
// ];

// let liberados = participantes.filter(pessoa => {
//     return pessoa.idade >= 18
// })

// let nomesAprovados = liberados.map(p => p.nome)

// console.log(nomesAprovados)


// EX 10

const produtos = [
  { nome: 'Notebook', preco: 2500, quantidadeVendida: 75 },
  { nome: 'Mouse', preco: 100, quantidadeVendida: 180 },
  { nome: 'Teclado', preco: 150, quantidadeVendida: 125 },
  { nome: 'Monitor', preco: 900, quantidadeVendida: 95 }
];

let maisVendido = 0

console.log('Relatório de produtos vendidos:')
for(let produto of produtos){
    console.log(`Produto: ${produto.nome} | Preço: ${produto.preco} | Quantidade vendida: ${produto.quantidadeVendida}`)
}

let maisDe100 = produtos.filter((produto) => {
    return produto.quantidadeVendida > 100
})
console.log('Venderam mais de 100: ')
console.log(maisDe100)

console.log('Total de vendas por produto: ')
for(let produto of produtos){
    produto.totalDeVendas = produto.quantidadeVendida * produto.preco
    console.log(`${produto.nome}: R$ ${produto.totalDeVendas}`)

    if(maisVendido < produto.totalDeVendas){
        maisVendido = produto.totalDeVendas
    }
}

for(let produto of produtos){
    if(maisVendido === produto.totalDeVendas){
        console.log(`O produto mais lucrativo foi ${produto.nome} e o lucro total foi ${produto.totalDeVendas}`)
    }
}


