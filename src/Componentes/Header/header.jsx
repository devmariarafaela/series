import React from "react";
import "./header.css";
import fotoperfil from 'C:\\Users\\Maria\\Desktop\\BEES\\series\\src\\Componentes\\Imagens\\perfil.jpeg';

function Header (props){
    return(
        <div className="principal">
            <div className="imagem-perfil">
            <img src= {fotoperfil} width="120" style={{ borderRadius: '80%' }}   />
            </div>
            
            <div className="nome">
             <h1>Maria Rafaela</h1>
            </div>

            <div className="assistido">
            <p>50<br/>Vistos </p>
                    <p>05<br/>Vou Assistir</p>
            </div>
                  
        </div>

    )
    
}
export default Header;