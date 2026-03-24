import "./formulario-de-evento-estilos.css";
import { TituloFormulario } from "../TituloFormulario";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { Selected } from "../CampoSelect";
import { BotaoCriarEvento } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";

export function FormularioDeEvento({ temas, aoSubmeter }) {
  function aoFormSubmetido(formData) {
    console.log("opa, tá na hora de criar evento", formData);
    const evento = 
      {
        capa: formData.get('capa'),
        tema: temas.find(function (item){
          return item.id == formData.get('temaEvento')
        }),
        data: new Date(formData.get('dataEvento')),
        titulo: formData.get('nomeEvento'),
      }
    aoSubmeter(evento)
  }

  return (
    <form className="form-evento" action={aoFormSubmetido}>
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
          <Label htmlFor="nomeEvento">Qual o endereço da imagem de capa?</Label>
          <CampoDeEntrada
            type="text"
            id="capa"
            placeholder="http://..."
            name="capa"
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="dataEvento">Data do evento</Label>
          <CampoDeEntrada type="date" id="dataEvento" name="dataEvento" />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor="temaEvento">Tema do evento</Label>
          <Selected id="temaEvento" name="temaEvento" itens={temas} />
        </CampoDeFormulario>
      </div>
      <div className="acoes">
        <BotaoCriarEvento>Criar Evento</BotaoCriarEvento>
      </div>
    </form>
  );
}
