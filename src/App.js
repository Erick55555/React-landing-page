import './App.css';
import './js/scripts.js'
import { PrimerBloqueComponente } from './componentes/PrimerBloqueComponente';
import { ContenidoCentralComponente } from './componentes/ContenidoCentralComponente';
import { EncabezadoComponente } from './componentes/EncabezadoComponente';
import { FooterComponente } from './componentes/FooterComponente';
import { ListaMarcasComponente } from './componentes/ListaMarcasComponente';
import { ListaCategoriasComponente } from './componentes/ListaCategoriasComponente';
import Modal1Componente from './componentes/Modal1Conponente';

function App() {
  return (
    <div className='container-fluid bg-black'>
      <EncabezadoComponente></EncabezadoComponente>
      <PrimerBloqueComponente></PrimerBloqueComponente>
      <ListaMarcasComponente></ListaMarcasComponente>
      <ContenidoCentralComponente></ContenidoCentralComponente>
      <ListaCategoriasComponente></ListaCategoriasComponente>
      <FooterComponente></FooterComponente>
    </div>
  );
}


export default App;
