const readLine = require('readline')

const leitor = readLine.createInterface({
    input: process.stdin, output: process.stdout
})

console.log('Seja bem vindo ao quiz de Java Script')
console.log('Responda apenas com as letras a b ou c')

let acertos = 0

leitor.question('1) Qual palavra usamos para criar uma função?\n(a) define\n(b) fuction\n(c) create\n > ', resposta1 => {
    if(resposta1 === 'b'){acertos++}

    leitor.question('2) Qual dessas é uma estrutura de repetição?\n(a) loopar\n(b) repeat\n(c) for\n > ', resposta2 => {
        resposta2 === 'c' ? acertos++ : console.log('era C fio')

        leitor.question('3) Qual valor é considerado falsy em JavaScript?\n(a) 1\n(b) 0\n(c) "texto"\n > ', resposta3 => {
            resposta3 === 'b' ? acertos++ : console.log('era B fio')

            switch(acertos){
                case 3:
                    console.log('Parabéns acertou tudo')
                    break
                case 2:
                    console.log('Boa acertou duas')
                    break
                case 1:
                    console.log('Mais ou menos, acertou uma')
                    break
                case 0:
                    console.log('Vishh, nem uma')
                    break
                default:
                    console.log('Vish fi o que foi que tu fez?')
            }

            leitor.close()
        })
    })
})

