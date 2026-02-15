// function saudacao(nome){ // nome é um parametro da função saudacao
//     console.log('Olá, ', nome)
// }

// ARROW FUNCTION
const saudacao = nome => {console.log('Vida longa e prospera', nome)}

saudacao('Rafael') // 'Rafael' é o argumento
saudacao('Jéssica')

// function calcularDobro(numero){
//     return numero * 2
// }

const calcularDobro = numero => {return numero * 2}

console.log(calcularDobro(8))