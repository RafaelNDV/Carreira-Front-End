import { Popover } from "radix-ui"
import './styles.css'

const PopoverDemo = () => {
    return (
        <Popover.Root>
            <Popover.Trigger className="PopoverTrigger">Mais informações</Popover.Trigger>
            <Popover.Portal>
                <Popover.Content className="PopoverContent">
                    Mais algumas informações
                    <Popover.Arrow className="PopoverArrow"/>
                </Popover.Content>
            </Popover.Portal>
        </Popover.Root>    
    )
}

export default PopoverDemo