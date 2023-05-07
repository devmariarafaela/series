import React from "react";
import {Link} from 'react-router-dom'
import "./menu.css";
import coracao from '../Imagens/coracao.png';
import presente from '../Imagens/presente.png';
import estrela from '../Imagens/estrela.png';
import comentario from '../Imagens/comentario.png';


function Menu() {
  return(
    <div className="botao">
      <Link to="/Avaliados">
      <button className="botao3" >
        <img src={estrela} width="30"/>
        Avaliados
      </button>
      </Link>
      <button className="botao1">
        <img src={coracao} width="30"/>
        Favoritos
      </button>
      <button className="botao2" >
        <img src={presente} width="30"/>
        Desejados
      </button>
      <button className="botao4" >
        <img src={comentario} width="30"/>
        Comentários
      </button>

    </div>
    )
  }
  
  export default Menu;