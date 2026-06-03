// EX 01

// function saldar(nome){
//     if(nome){
//         console.log(`Olá, ${nome}! Bem-vindo(a)!`)
//     }else{
//         console.log(`Olá! Bem-vindo(a)!`)
//     }
// }

// saldar('Rafael')



// EX 02

// function calcularDesconto(valor, desconto){
//     console.log(`O valor após o desconto fica ${valor * ((100 - desconto)/100)}`)
// }

// calcularDesconto(100, 40)



// EX 03

// const calculaMedia = (num1, num2) => {
//     return (num1 + num2) / 2
// }
// console.log(calculaMedia(10, 5))



// EX 04

// const verificaParidade = (numero) => {
//     if(numero % 2 === 0){
//         console.log('Par')
//     }else{
//         console.log('Ímpar')
//     }
// }

// verificaParidade(9)



// EX 05

// function calcularFrete(distancia){
//     if(distancia <= 5){
//         console.log(5)
//     }else if(distancia <= 20){
//         console.log(0.5 * distancia)
//     }else{
//         console.log(20)
//     }
// }

// calcularFrete(19)


// EX 06

// function mensagemPersonalizada(nome, tipo){
//     if(tipo === 'vip'){
//         console.log(`Obrigado pela preferência, ${nome}! Você ganhou frete grátis.`)
//     }else if(tipo === 'novo'){
//         console.log(`Bem-vindo(a), ${nome}! Aproveite um cupom de boas-vindas.`)
//     }else{
//         console.log(`Obrigado pela sua compra, ${nome}!`)
//     }
// }

// function processarPedido(nome, tipo, mensagemPersonalizada){
//     console.log(`Processando pedido de ${nome}...`)
//     mensagemPersonalizada(nome, tipo)
// }

// processarPedido("Fernanda", "novo", mensagemPersonalizada);



// EX 07

// function mostrarResposta(nome){
//     setTimeout(() => console.log(`Olá, ${nome}! Aqui está a resposta para sua dúvida.`), 3000)
// }

// function responderUsuario(nome, mostrarResposta){
//     console.log('Processando sua pergunta...')
//     mostrarResposta(nome)
// }

// responderUsuario('Rafael', mostrarResposta)



// EX 08

// function gerarMensagem(nota){
//     if(nota >= 70){
//         console.log('Parabéns! Você foi aprovado!')
//     }else if(nota >= 50){
//         console.log('Precisa de reforço')
//     }else{
//         console.log('Reprovado')
//     }
// }

// function avaliarDesempenho(nota, gerarMensagem){
//     console.log('Pontuação: ', nota)
//     gerarMensagem(nota)
// }

// avaliarDesempenho(40, gerarMensagem)


// EX 09

// function calcularConsumo(potencia, horasPorDia){
//     return (potencia * horasPorDia * 30)/1000
// }
// function classificarConsumo(consumo){
//     if(consumo < 50){
//         return 'Consumo baixo'
//     }else if(consumo <= 199){
//         return 'Consumo Moderado'
//     }else{
//         return 'Consumo alto'
//     }
// }
// function exibirResumo(nomeAparelho, consumo, classificacao){
//     console.log(`${nomeAparelho} tem consumo de ${consumo} kWh/mês e é classificado como ${classificacao}.`)
// }

// const nomeAparelho = 'Geladeira'
// const consumo = calcularConsumo(500, 26)
// const classificacao = classificarConsumo(consumo)

// exibirResumo(nomeAparelho, consumo, classificacao)


// EX 10

// const participantes = [
//     {nome: 'Laura', pontuacao: 92},
//     {nome: 'Pedro', pontuacao: 67},
//     {nome: 'Clara', pontuacao: 44}
// ]

// function numeroSorteado(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }

// function sortear(participantes){
//     let numero = numeroSorteado(0, participantes.length - 1)
//     return participantes[numero]
// }

// function exibirNome(sorteado){
//     console.log('Sorteando...')
//     setTimeout(() => {
//         console.log(`Participante sorteado: ${sorteado.nome}`)
//         console.log('Pontuação: ', sorteado.pontuacao)
//         console.log(avaliarPontuacao(sorteado))
//     }, 3000)
// }

// function avaliarPontuacao(sorteado){
//     if(sorteado.pontuacao >= 80){
//         return 'Parabéns, você foi prêmiado'
//     }else if(sorteado.pontuacao >= 50){
//         return 'Você quase conseguiu! Fique de olho nos próximos sorterios'
//     }else{
//         return 'Infelizmente, não foi dessa vez'
//     }
// }

// function realizarSorteio(participantes){
//     let sorteado = sortear(participantes, numeroSorteado)

//     exibirNome(sorteado)
// }

// realizarSorteio(participantes)



// EX 11

function regressiva(numero){
    if(numero === 0){
        console.log('Lançamento!')
        return
    }
    console.log(numero)
    setTimeout(() => regressiva(numero - 1), 1000)
}

regressiva(5)