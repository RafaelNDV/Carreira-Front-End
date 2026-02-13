// Entre 9 e 10: exelente
// Entre 7 e 8: bom
// Entre 4 e 6: médio
// Entre 0 e 3: ruim

const nota = 8

switch(nota){
    case 10:
    case 9:
        console.log('Exelente')
        break
    case 8:
    case 7:
        console.log('Bom')
        break
    case 6:
    case 5:
    case 4:
        console.log('mediana')
        break
    case 3:
    case 2:
    case 1:
    case 0:
        console.log('ruim')
        break
    default:
        console.log('Valor inválido')
        break
}