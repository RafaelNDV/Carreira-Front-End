import { Dialog } from "radix-ui";
import "./styles.css";

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="zin">Editar perfil</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <Dialog.Title className="DialogTitle">Editar perfil</Dialog.Title>
        <Dialog.Description className="DialogDescription">
          Faça as mudanças no seu perfil e selecione salvar.
        </Dialog.Description>
        <fieldset>
          <label className="rato" htmlFor="name">Nome</label>
          <input id="name" defaultValue="Agarikov" />
        </fieldset>
        <fieldset>
          <label className="rato" htmlFor="username">Sobrenome</label>
          <input id="username" defaultValue="@agarikov" />
        </fieldset>
        <div className="buttonWrapper">
          <Dialog.Close asChild>
            <button className="zin">Salvar mudanças</button>
          </Dialog.Close>
        </div>
        <Dialog.Close asChild>
          X
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;