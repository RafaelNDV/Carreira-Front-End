import { Select } from "radix-ui";
import { TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import "./styles.css";
 
const quantidade = [1, 2, 3, 4, 5];
 
const SelectDemo = () => {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger" aria-label="Números">
        <Select.Value placeholder="Quantidade" />
        <Select.Icon className="SelectIcon">
          <TriangleDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <TriangleUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              {quantidade.map((q) => (
                <Select.Item className="SelectItem" value={`${q}`}>
                  <Select.ItemText>{q}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton>
            <TriangleUpIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};
 
export default SelectDemo;