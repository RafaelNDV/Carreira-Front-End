// const pessoa = {
//     nome: 'Ana',
//     idade: 26,
//     temCNH: true
// }

// pessoa.sobrenome = 'Paula'

// console.log('Nome: ', pessoa.nome)
// console.log('Sobrenome: ', pessoa.sobrenome)

const livro = {
    titulo: 'O hobbit',
    paginas: 310
}

livro.publicado = true
livro.idiomas = ['Ingles', 'Portugues', 'Espanhol']

livro.idiomas.push('Mandarim')
livro.idiomas.push('Francês')

console.log('Livros antes: ', livro)

delete livro.paginas

console.log('Livro depois: ', livro)

console.log('Autor do livro', livro['autor'])

const autor = {
    nome: 'J. R. R. TOKEN',
    nacionalidade: 'Britanico',
    idade: 98
}

console.log('Autor', autor)

livro.autor = autor

console.log(livro)