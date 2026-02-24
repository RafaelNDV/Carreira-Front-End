// EX 01

// const produto = {
//     nome: 'Fone de ouvido',
//     preco: 149.9,
//     disponivel: true
// }

// console.log(produto)


// EX 02

// const configuracoes = {
//     tema : 'escuro',
//     notificacoes: 'muitas',
//     idioma: 'pt-BR'
// }

// console.log(configuracoes.tema, configuracoes['idioma'])



// EX 03

// const receita = {
//     nome: 'macarrão instantaneo',
//     ingredientes: ['água', 'Macarrão', 'Pozinho', 'garfo', 'panela'],
//     tempoPreparo: 8
// }

// console.log('Ingrediente complementar: ', receita.ingredientes[2])



// EX 04

// const carro = {
//     marca: 'Toyota',
//     modelo: 'Corolla',
//     ano: 2022,
//     modeloAntigo: 'Corolla XEi'
// }

// delete carro.modeloAntigo

// console.log(carro)


// EX 05

// const dispositivos = [
//     {nome: 'Impressora', status: 'ativo'},
//     {nome: 'Scanner', status: 'inativo'},
//     {nome: 'Projetor', status: 'ativo'}
// ]

// for(let dispositivo of dispositivos){
//     console.log(`Dispositivo: ${dispositivo.nome} | Status: ${dispositivo.status}`)
// }



// EX 06

// const maquina = {
//     nome: 'Esteira Transportadora',
//     funcionando:  false
// }

// maquina.exibirStatus = function exibirStatus(){
//     if(this.funcionando === true){
//         console.log(`A máquina ${this.nome} está em funcionamento.`)
//     }else{
//         console.log(`A máquina ${this.nome} está parada`)
//     }
// }

// maquina.exibirStatus()



// EX 07

// const array = [
//     ['nome', 'João'],
//     ['idade', 30],
//     ['cidade', 'Curitiba']
// ]

// function montarObjeto(array){
//     let novoObjeto = {}
//     for(let propriedade of array){
//         novoObjeto[propriedade[0]] = propriedade[1]
//     }
//     return novoObjeto
// }

// console.log(montarObjeto(array))



// EX 08

// const relatorio = {
//     temperatura: 75,
//     vibracao: 40,
//     pressao: 55,
//     nivelRuido: 30
// }

// console.log(Object.keys(relatorio))
// console.log(Object.values(relatorio))

// for(let [chave, valor] of Object.entries(relatorio)){
//     let status = ''
//     valor > 50 ? status = 'Alerta' : status = 'Ok'
//     console.log(`${chave}: ${valor} ${status}`)
// }



// EX 09

// const manutencao = {
//   jan: 2,
//   fev: 0,
//   mar: 5,
//   abr: 4,
//   mai: 5,
//   jun: 7
// };

// let totalDiasParados = 0
// let mesesParados = 0

// const arrayDias = Object.values(manutencao)

// for(let dia of arrayDias){
//     totalDiasParados += dia
//     if(dia > 0){mesesParados += 1}
// }
// console.log('Total de dias parados: ', totalDiasParados)
// console.log('Meses com manutenção registrada: ', mesesParados)
// if (totalDiasParados > 20){
//     console.log('Staus: Atenção! Acima do limite anual')
// }else{
//     console.log('Dentro do limite anual')
// }



// EX 10

const curso = {
  titulo: "JavaScript Intermediário",
  estudantes: [
    { nome: "Ana", progresso: 85 },
    { nome: "Carlos", progresso: 40 },
    { nome: "Juliana", progresso: 72 },
    { nome: "Pedro", progresso: 60 }
  ],
  gerarRelatorio: function(){
    let status = ''
    let somaGeral = 0
    let totalEstudantes = 0
    for(let estudante of this.estudantes){
        if(estudante.progresso >= 70){
            status = 'Aprovado'
        }else{
            status = 'Em andamento'
        }
        somaGeral += estudante.progresso
        totalEstudantes += 1
        console.log(`Estudante: ${estudante.nome} | Progresso: ${estudante.progresso} | Situação: ${status}`)
    }
    console.log('Total de estudantes: ', totalEstudantes)
    console.log(`Média geral da turma: ${somaGeral/totalEstudantes}%`)
  }
};

curso.gerarRelatorio();