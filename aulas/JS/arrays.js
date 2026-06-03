const frutas = ['Uva', 'Banana', 'Kiwi', 'Maçã', 'Morango']

console.log(frutas)

// console.log('Primeira fruta', frutas[0])
// console.log('Última fruta: ', frutas[frutas.length - 1])

// console.log('Total de frutas: ', frutas.length)

// frutas.push('Melancia')

// console.log('Total de frutas depois de adicionar melância: ', frutas.length)

// console.log('Última fruta: ', frutas[frutas.length - 1])

// forma de remover o intem, passo a posição e quantos quero remover
// frutas.splice(2, 1)

// console.log('Depois de remover')
// console.log(frutas)

for(let i = 0; i < frutas.length; i++){
    console.log('indice: ', i)
    console.log(frutas[i])
}

console.log('Usando o forEach:')

frutas.forEach((valor, indice) => {
    console.log('indice: ', indice, valor)
})

console.log('Usando for of')

for(const fruta of frutas){
    console.log('fruta da vez: ', fruta)
}