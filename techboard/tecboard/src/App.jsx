import "./App.css";
import { FormularioDeEvento } from './componentes/FormularioDeEvento'

// no react, componentes são FUNÇÕES

// props é um OBJETO
// props.children

function App() {
  return (
    <main>
      <header>
        <img src="/logo_tec.png" alt="" />
      </header>
      <section>
        <img src="/banner_tec.png" alt="" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
