import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import "./styles.css";

export const CheckboxDemo = ({texto}: {texto: string}) => (
    <form>
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <Checkbox.Root className="CheckboxRoot" defaultChecked id='c1'>
                <Checkbox.Indicator className="CheckboxIndicator">
                    <CheckIcon/>
                </Checkbox.Indicator>
            </Checkbox.Root>
            <label>
                {texto}
            </label>
        </div>
    </form>
)