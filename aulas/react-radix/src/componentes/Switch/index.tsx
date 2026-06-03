import { Switch } from "radix-ui";
import "./styles.css";

export const SwitchDemo = () => (
    <form>
        <div style={{ display: 'flex', alignItems: 'center'}}>
            <label className="Label" htmlFor='teste-switch' style={{ paddingRight: 15}}>
                Teste Switch
            </label>
            <Switch.Root className="SwitchRoot" id="teste-switch">
                <Switch.Thumb className="SwitchThumb" />
            </Switch.Root>
        </div>
    </form>
)