import './todo-form.style.css'
import { TextInput } from '../TextInput'
import { SaveButton } from '../SaveButton'

export function TodoForm ({ onSubmit }){
    return(
        <form action={ onSubmit } className="form-salvar-item">
            <TextInput required placeholder='Digite o item que deseja adicionar' name='description'/>
            <SaveButton>Salvar item</SaveButton>
        </form>
    )
}