import React from 'react';
import './style.css';
import LinkedInIcon from '../../assets/linkedinIcon.svg'
import { Link } from 'react-router-dom';
Link

interface IntegranteProps {
  nome: string;
  numeroRM: string;
  fotoNome: string;
  LinkedInIntegrante: string;
}

const CardIntegrantes = (integranteProps: IntegranteProps) => {
  return (
    <div className="card-integrante">
      <img src={integranteProps.fotoNome} />
      <h2>{integranteProps.nome}</h2>
      <div id="rm-social-icon">
        <h2>{`RM: ${integranteProps.numeroRM}`}</h2>
        <Link target="_blank" to={integranteProps.LinkedInIntegrante}><img className='social-icon' src={LinkedInIcon} /></Link>
      </div>
    </div>
  );
};

export default CardIntegrantes;