const numeros = [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10]

const numerosPares = numeros.filter((numero) => {
    return numero % 2 === 0
})

const numerosImpares = numeros.filter((numero) => {
    return numero % 2 === 1
})

console.log('Todos os números: ', numeros)
console.log('Todos os numeros pares: ', numerosPares)
console.log('Todos os números impares: ', numerosImpares)


const numerosDobrados = numeros.map((numero) => {
    return numero * 2
})

console.log('Nossa lista mapeada', numerosDobrados)