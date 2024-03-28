import React from 'react';
import './index.css';
 
interface Integrante {
  nome: string;
  numeroRM: string;
  fotoNome: string; // Renomeando a propriedade para fotoNome
}
 
const integrantes: Integrante[] = [
  {
    nome: 'Natan Junior',
    numeroRM: '552626',
    fotoNome: 'foto_do_natan.jpg' // Nome do arquivo de imagem
  },
  {
    nome: 'Luiz Alecsander',
    numeroRM: '553034',
    fotoNome: 'luiz.png' // Nome do arquivo de imagem
  },
  {
    nome: 'Guilherme Augusto',
    numeroRM: '554176',
    fotoNome: 'guilherme.png' // Nome do arquivo de imagem
  }
];
 
const IntegrantesPage: React.FC = () => {
  return (
    <div className="integrantes-container">
      <h1 className="titulo">Integrantes</h1>
      <div className="cards-container">
        {integrantes.map((integrante, index) => (
          <div key={index} className="card">
            {/* Atualizando o caminho da imagem */}
            <img src={`./img/${integrante.fotoNome}`} alt={integrante.nome} />
            <div>
              <h2>{integrante.nome}</h2>
              <p>Número RM: {integrante.numeroRM}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default IntegrantesPage;