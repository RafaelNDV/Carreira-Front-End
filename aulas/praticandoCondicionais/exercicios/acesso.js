// EX 01

// const idade = 15

// const podeEntrar = idade >= 18 ? 'Pode entrar' : 'Não pode entrar'
// console.log(podeEntrar)



// EX 02

// const temperatura = 14

// if(temperatura <= 15){
//     console.log('Frio')
// }else if(temperatura <= 25){
//     console.log('Agradável')
// }else{
//     console.log('Quente')
// }



// EX 03

// const idade = 8

// if(idade < 12){
//     console.log('Infantil')
// }else if(idade < 18){
//     console.log('Juvenil')
// }else{
//     console.log('Adulto')
// }



// EX 04

// const diaSemana = 1
// let horario = 0

// switch(diaSemana){
//     case 0:
//         horario = 1
//         break
//     case 1:
//         horario = 0
//         break
//     case 2:
//         horario = 0
//         break
//     case 3: 
//         horario = 0
//         break
//     case 4:
//         horario = 0
//         break
//     case 5:
//         horario = 0
//         break
//     case 6:
//         horario = 1
//         break
//     default:
//         console.log('Dia inválido')
// }

// if(horario === 0){
//     console.log('O horário de funcionamento normal das 9h às 18h')
// }else{
//     console.log('O horário de funcionamento especial das 10h às 14h')
// }


// EX 05

// const usuario = 'admin'

// usuario === 'admin' ? console.log('login bem sucedido') : console.log('Usuário inválido')


// EX 06

// const fruta = 'laranja'

// if(fruta === 'laranja' || fruta === 'abacaxi'){
//     console.log('Fruta compatível com a receita')
// }else{
//     console.log('Fruta imcompatível com a receita')
// }


// EX 07

// const carrinhoVazio = false

// if(carrinhoVazio){
//     console.log('Não é possível finalizar a compra com o carrinho vazio')
// }else{
//     console.log('Compra finalizada com sucesso!')
// }


// EX 08

// const caso = 'recusado'

// switch(caso){
//     case 'pendente':
//         console.log('Pagamento pendente')
//         break
//     case 'aprovado':
//         console.log('Pagamento aprovado')
//         break
//     case 'recusado':
//         console.log('Pagamento recusado')
//         break
//     default:
//         console.log('Valor inválido')
// }


// EX 09

// const pontos  = 60
// const vidas = 0

// if(pontos >= 50 && vidas > 0){
//     console.log('Próximo nível liberado!')
// }else{
//     console.log('Não pode avançar para o próximo nível')
// }


// EX 10

const bateria = 65

if(bateria < 20){
    console.log('Crítica')
}else if(bateria >= 20){
    console.log('Moderada')
}else{
    console.log('Cheia')
}