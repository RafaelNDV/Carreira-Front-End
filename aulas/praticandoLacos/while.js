// const numeroSecreto = 8
// let numeroAleatorio = 0
// let tentativas = 0

// while(numeroSecreto !== numeroAleatorio){
//     numeroAleatorio = Math.floor(Math.random() * (50 - 1 + 1) + 1)
//     tentativas++
// }

// console.log(`Adivinhou em ${tentativas} tentativas`)


// let tentativas = 0
// let numero = 0

// do{
//     numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)
//     tentativas ++
// }while(numero % 2 !== 0)

// console.log(tentativas)


const texto = 'luz azul'
let textoInvertido = ''

for(let i = texto.length - 1; i >= 0; i--){
    if(texto[i] === ' '){
        continue
    }
    textoInvertido += texto[i]
}

if(textoInvertido === texto){
    console.log(`${texto} é palindromo`)
}else{
    console.log(`${texto} não é palíndromo`)
}