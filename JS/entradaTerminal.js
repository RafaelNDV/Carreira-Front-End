const readLine = require('readline')

const leitor = readLine.createInterface({input: process.stdin,output: process.stdout})

leitor.question('Qual é o seu nome? ', (nome) => {
    console.log('Olá,', nome)
    console.log('Seja muito bem vindo')

    leitor.question('Qual é a sua idade? ', (idade) => {
        idade >= 18 ? console.log('Uau você já pode tirar a CNH') : console.log('Você ainda não pode tirar a sua CNH')

        leitor.close()
    })
})