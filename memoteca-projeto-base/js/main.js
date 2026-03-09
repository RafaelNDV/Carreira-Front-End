import ui from './ui.js'
import api from './api.js'

const btnCancelar = document.querySelector('#botao-cancelar')
const textoPensamento = document.querySelector('#pensamento-conteudo')
const textoAutoria = document.querySelector('#pensamento-autoria')


btnCancelar.addEventListener('click', () => {
    textoAutoria.value = ''
    textoPensamento.value = ''
})

document.addEventListener('DOMContentLoaded', () => {
    ui.renderizarPensamentos()

    const formularioPensamento = document.getElementById('pensamento-form')
    formularioPensamento.addEventListener('submit', manipularSubmissaoFormulario)
})

async function manipularSubmissaoFormulario(event){
    event.preventDefault()
    const id = document.getElementById('pensamento-id').value
    const conteudo = document.getElementById('pensamento-conteudo').value
    const autoria = document.getElementById('pensamento-autoria').value

    try{
        await api.salvarPensamentos({conteudo, autoria})
        ui.renderizarPensamentos()
    }catch{
        alert('Error ao salvar pensamento')
    }
}