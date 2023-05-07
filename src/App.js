import './App.css';
import {BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import Header from "./Componentes/Header/header"
import Menu from './Componentes/Menu/menu';
import Estante from './Componentes/Estante/estante';
import Avaliacao from './Componentes/Avaliacao/avaliacao';


function App() {
  return (
  <div className='fundo'> 
   <Router>
   
    <div className='App'>
      <Header/>
      <Menu/>
  
       <Routes>
       <Route path='/' element={<Estante />} />
       <Route path='/Avaliados' element={<Avaliacao />} />
       <Route path='/Home' element={<Header />} />
                 
        </Routes>
         
    </div>
    </Router>
    
  </div>
  
        
  );
}

export default App;