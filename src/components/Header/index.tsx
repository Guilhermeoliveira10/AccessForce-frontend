import './style.css'
import salesforceIcon from '../../assets/salesforce-icon.png' 
import { useState } from 'react'

const Header = () => {

    const[ativo, setAtivo] = useState(false)

    return(
       <header className='header'>
            
            <img width={80} id="salesforce-icon" src={salesforceIcon} alt="Ícone Salesforce" />
            
            <nav id='nav-bar'>
                <ul id='nav-items'>
                    <li>Produtos</li>
                    <li>Costumer 360</li>
                    <li>Quem somos?</li>
                </ul>
            </nav>

            <div id='botao-e-menu-hamburguer'>
            
                <button id='teste-gratis'>Teste grátis</button>

                <div id='menu-hamburguer'>
                    <div id="linha1" className='linha'></div>
                    <div id="linha2" className='linha'></div>
                    <div id="linha3" className='linha'></div>
                </div>

            </div>

       </header> 
    )
}

export default Header