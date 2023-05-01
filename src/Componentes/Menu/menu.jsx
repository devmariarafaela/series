import React from "react";
import "./menu.css";
import coracao from 'C:\\Users\\Maria\\Desktop\\BEES\\series\\src\\Componentes\\Imagens\\coracao.png';
import presente from 'C:\\Users\\Maria\\Desktop\\BEES\\series\\src\\Componentes\\Imagens\\presente.png';
import estrela from 'C:\\Users\\Maria\\Desktop\\BEES\\series\\src\\Componentes\\Imagens\\estrela.png';
import comentario from 'C:\\Users\\Maria\\Desktop\\BEES\\series\\src\\Componentes\\Imagens\\comentario.png';




function Menu() {
  return(
    <div className="botao">

      <button className="botao1">
        <img src={coracao} width="30"/>
        Favoritos
      </button>
      <button className="botao2" >
        <img src={presente} width="30"/>
        Desejados
      </button>
      <button className="botao3" >
        <img src={estrela} width="30"/>
        Avaliados
      </button>
      <button className="botao4" >
        <img src={comentario} width="30"/>
        Comentários
      </button>

    </div>
    )
  }
  
  export default Menu;