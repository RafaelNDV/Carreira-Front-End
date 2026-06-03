import './todo-form.style.css'
import { TextInput } from '../TextInput'
import { SaveButton } from '../SaveButton'

export function TodoForm ({ onSubmit, defaultValue }){
    return(
        <form action={ onSubmit } className="form-salvar-item">
            <TextInput 
            required 
            placeholder='Digite o item que deseja adicionar' name='description'
            defaultValue={defaultValue}
            />
            <SaveButton>Salvar item</SaveButton>
        </form>
    )
}