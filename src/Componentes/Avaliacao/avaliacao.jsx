import React from "react";
import "./avaliacao.css";
import imagem1 from '../Imagens/imagem1.jpg';
import imagem2 from '../Imagens/imagem2.jpg';

function Avaliacao (){
    return(
        <div className="avaliacao">
            <div className="subtitulo">
                Ultimas Avaliações
            </div>
            <div className="cards">
                <div className="card">
                    <img src={imagem1} alt="imagem1"/>
                    <div className="info">
                        <h3>Anne with E</h3>
                        <p> E é uma história de amadurecimento sobre uma garota de fora que, contra todas as probabilidades e numerosos desafios, luta por amor e aceitação e por seu lugar no mundo.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={imagem2} alt="imagem2"/>
                    <div className="info">
                        <h3>Breaking Bad</h3>
                        <p>Um professor do secundário com cancro do pulmão terminal junta-se a um ex-aluno para fabricar e vender metanfetaminas como forma de garantir o futuro da sua família.</p>
                    </div>
                </div>
            </div>
        </div>
    )    
}
export default Avaliacao;

