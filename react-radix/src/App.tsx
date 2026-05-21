import './App.css'
import { CheckboxDemo } from './componentes/Checkbox'
import PopoverDemo from './componentes/Popover'
import { SliderDemo } from './componentes/Slider'
import { SwitchDemo } from './componentes/Switch'
import RadioGroupDemo from './componentes/RadioGroup'
import SelectDemo from './componentes/Select'
import ToastDemo from './componentes/Toast'
import AccordionDemo from './componentes/Acordeon'
import DialogDemo from './componentes/Dialog'
import MenuBarDemo from './componentes/Menubar'

function App() {
  return (
    <div id='root'>
      <PopoverDemo/>
      <SwitchDemo/>
      <SliderDemo/>
      <CheckboxDemo texto=' Aceite os termos e condições'/>
      <RadioGroupDemo opcoes={[{id: 1, opcao: 'Masculino'}, {id: 2, opcao: 'Feminino'}, {id: 3, opcao: 'Outro'}, {id: 4, opcao: 'Mais um'}]}/>
      <SelectDemo/>
      <ToastDemo/>
      <AccordionDemo/>
      <DialogDemo/>
      <MenuBarDemo/>
    </div>
  )
}

export default App
