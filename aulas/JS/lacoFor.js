// ESTRUTURA DO FOR
// for(let contador = 1; contador <= 5; contador++){
//     console.log('Número atual: ', contador)
// }

for(let numero = 0; numero <= 15; numero++){
    if(numero % 2 === 0){
        console.log('Número par encontrado: ', numero)
    }
}

const palavra = 'calopsita'

for(let cont = 0; cont < palavra.length; cont++){
    console.log(palavra[cont])
}