import './App.css';
import Header from "./Componentes/Header/header"
import Menu from './Componentes/Menu/menu';
import Estante from './Componentes/Estante/estante';
import Avaliacao from './Componentes/Avaliacao/avaliacao';


function App() {
  return (
  <div className='fundo'>
        
    <div className='App'>
      <Header/>
      <Menu/>
      <Estante/>
      <Avaliacao/>      
    </div>
  </div>
        
  );
}

export default App;
