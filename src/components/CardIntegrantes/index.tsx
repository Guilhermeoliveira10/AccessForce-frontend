import React from 'react';
import './style.css';
import LinkedInIcon from '../../assets/linkedinIcon.svg'
 
interface IntegranteProps {
  nome: string;
  numeroRM: string;
  fotoNome: string;
}
 
const CardIntegrantes = (integranteProps: IntegranteProps) => {
  return (
    <div className="card-integrante">
      <img src={integranteProps.fotoNome} />  
      <h2>{integranteProps.nome}</h2>
      <div id="rm-social-icon">
        <h2>{integranteProps.numeroRM}</h2>
        <img src={LinkedInIcon}/>
      </div>
    </div>
  );
};
 
export default CardIntegrantes;