import './campo-select-estilos.css'

export function Selected(props){
    return(
        <select className='campo-select' {...props}>
            <option value="vermelhor">Vermelho</option>
            <option value="azul">Azul</option>
        </select>
    )
}