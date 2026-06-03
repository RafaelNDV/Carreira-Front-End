const idade =  20

// if(idade >= 18){
//     console.log('É maior de idade!')
// }else{
//     console.log('É menor de idade!')
// }


// Entre 9 e 10: exelente
// Entre 7 e 8: bom
// Entre 4 e 6: médio
// Entre 0 e 3: ruim

const nota = 9

// if(9 <= nota){
//     console.log('Exelente')
// }else if(7 <= nota){
//     console.log('Bom')
// }else if(4 <= nota){
//     console.log('médio')
// }else{
//     console.log('ruim')
// }



// OPERADOR TERNÁRIO

// se condicional verdadeira moster 1 se não é verdadeira mostre o 2
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')

nota >= 9 ? console.log('Exelente') :
    nota >= 7 ? console.log('Bom') :
        nota >=  4 ? console.log('Médio') :
            console.log('ruim')
