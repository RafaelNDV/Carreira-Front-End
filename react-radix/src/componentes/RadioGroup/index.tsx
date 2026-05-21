import { RadioGroup } from "radix-ui";
import "./styles.css";

interface Opcao {
  id: number;
  opcao: string;
}

const RadioGroupDemo = ({ opcoes }: { opcoes: Opcao[] }) => {
  return (
    <form>
      <RadioGroup.Root
        className="RadioGroupRoot"
        defaultValue="Outro"
        aria-label="Gênero"
      >
        {opcoes.map((g) => (
          <div className="RadioGroupWrapper">
            <RadioGroup.Item
              className="RadioGroupItem"
              value={g.opcao}
              id={`${g.id}`}
            >
              <RadioGroup.Indicator className="RadioGroupIndicator" />
            </RadioGroup.Item>
            <label className="Label" htmlFor={`${g.id}`}>
              {g.opcao}
            </label>
          </div>
        ))}
      </RadioGroup.Root>
    </form>
  );
};

export default RadioGroupDemo;