import './campo-select-estilos.css'

export function Selected({ itens, ...rest }){
    return(
        <select {...rest} className='campo-select' defaultValue="">
            <option value="" disabled>Selecione uma opção</option>
            {itens.map(function (item) {
                return <option key={item.id} value={item.id}>{item.nome}</option>
            })}
        </select>
    )
}