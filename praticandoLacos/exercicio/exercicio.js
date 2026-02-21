// EX 01

// const numeroFinal = 5

// for(let i = 1; i <= numeroFinal; i++){
//     console.log(i)
// }


// EX 02

// for(let i = 10; i >= 0; i--){
//     setTimeout(() => {
//         console.log(i)
//     }, (10 - i) * 1000)
// }
// setTimeout(() => {
//     console.log('Lançar')
// }, 11000)


// EX 03

// const numeroFinal = 10

// for(let i = 1; i <= 10; i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }



// EX 04

// const senha = 'seguranc@2025'

// for(let i = 0; i < senha.length; i++){
//     console.log(senha[i])
// }


// EX 05

// const entradas = ['Ana', 'Bruno', 'Carla', 'fim', 'Daniel']

// for(let i = 0; i < entradas.length; i++){
//     if(entradas[i] === 'fim'){
//         break
//     }else{
//         console.log('Nome:', entradas[i])
//     }
// }



// EX 06

// for(let i = 1; i <= 20; i++){
//     if(i === 10){
//         console.log('Número proibido encontrado! Encerrando...')
//         break
//     }
//     console.log(i)
// }



// EX 07

// let economiaTotal = 0

// for(let i = 1; i <= 10; i++){
//     economiaTotal += i
//     console.log(`Dia ${i}: R$${economiaTotal}`)
// }



// EX 08

// const tempoMinimo = 5
// const temperaturaIdeal = 3

// for(let i = 1; i <= 5; i++){
//     console.log('Aquecendo... segundo', i)
//     if(i === 3){
//         console.log('Temperatura ideal atingida.')
//     }
// }

// console.log(`Tempo total de aquecimento: 5 segundos`)



// EX 09

// const caixas = [12, -1, 8, 0, -5, 3, 7, 14]
// let caixaAceita = 0

// for(let i = 0; i < caixas.length; i++){
//     if(caixas[i] >= 0){
//         console.log('Caixa processada:', caixas[i])
//         caixaAceita += 1
//     }else{
//         console.log('CAixa danificada, ignorada', caixas[i])
//     }

//     if(caixaAceita === 5){
//         console.log('Limite de caixas processadas atingida 5')
//         break
//     }
// }



// EX 10

const tentativas = ['1234', 'admin', 'vasco', 'secreto']
const senhaCorreta = 'secreto'

let contador = 0

while(tentativas[contador] !==  senhaCorreta){
    console.log(`Tentativa ${contador + 1} inválida.`)

    if(contador === 2){
        console.log('Limite de tentativas atingido')
        break
    }
    contador++
}

if(tentativas[contador] === senhaCorreta){
    console.log('Acesso permitido!')
}else{
    console.log('Não conseguiu se logar')
}
