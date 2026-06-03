// CONTAR QUANTOS NÚMERO PARES E IMPARES TEMOS ENTRE 0 E 100

let totalNumerosPares = 0
let totalNumerosImpares = 0

for(let i = 0; i <= 100; i++){
    i % 2 === 0 ? totalNumerosPares++ :totalNumerosImpares++
}
console.log(`O total de números pares foi ${totalNumerosPares} e o total de números ímpares foi ${totalNumerosImpares}`)