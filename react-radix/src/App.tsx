import './App.css'
import { CheckboxDemo } from './componentes/Checkbox'
import PopoverDemo from './componentes/Popover'
import { SliderDemo } from './componentes/Slider'
import { SwitchDemo } from './componentes/Switch'

function App() {
  return (
    <>
      <PopoverDemo/>
      <SwitchDemo/>
      <SliderDemo/>
      <CheckboxDemo texto=' Aceite os termos e condições'/>
    </>
  )
}

export default App
