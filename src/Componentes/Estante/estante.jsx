import React from "react";
import "./estante.css";
import imagem1 from '../Imagens/imagem1.jpg';
import imagem2 from '../Imagens/imagem2.jpg';
import imagem3 from '../Imagens/imagem3.jpg';
import imagem4 from '../Imagens/imagem4.jpg';
import imagem5 from '../Imagens/imagem5.jpg';
import imagem6 from '../Imagens/imagem6.jpg';
import imagem7 from '../Imagens/imagem7.jpg';
import imagem8 from '../Imagens/imagem8.jpg';
import imagem9 from '../Imagens/imagem9.jpg';
import imagem10 from '../Imagens/imagem10.jpg';



function Estante (){
    return (
        <div className="estante">

            <div className="titulo">
                Estante de Series
            </div>

            <div className="series">
            <div className="container">
      <img className="image" src={imagem1} alt="Imagem 1" />
      <img className="image" src={imagem2} alt="Imagem 2" />
      <img className="image" src={imagem3} alt="Imagem 3" />
      <img className="image" src={imagem4} alt="Imagem 4" />
      <img className="image" src={imagem5} alt="Imagem 5" />
      <img className="image" src={imagem6} alt="Imagem 6" />
      <img className="image" src={imagem7} alt="Imagem 7" />
      <img className="image" src={imagem8} alt="Imagem 8" />
      <img className="image" src={imagem9} alt="Imagem 9" />
      <img className="image" src={imagem10} alt="Imagem 10" />
    </div>
            </div>
        </div>
    )
    
}
export default Estante;