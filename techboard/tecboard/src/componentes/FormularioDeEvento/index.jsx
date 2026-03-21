import "./formulario-de-evento-estilos.css";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { Selected } from "../CampoSelect";
import { BotaoCriarEvento } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor="nomeEvento">Qual é o nome do evento?</Label>
          <CampoDeEntrada
            type="text"
            id="nomeEvento"
            placeholder="Summer dev hits"
            name="nomeEvento"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <Selected id="temaEvento" name="temaEvento"/>
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <BotaoCriarEvento>Criar Evento</BotaoCriarEvento>
      </div>
    </form>
  );
}
