import './style.css'
import salesforceIcon from '../../assets/salesforce-icon.png' 
import { useState } from 'react'

const Header = () => {

    const[ativo, setAtivo] = useState(false)

    function alternar(){
        setAtivo(!ativo)
    }

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

                <div onClick={alternar} id='menu-hamburguer'>
                    <div id="linha1" className='linha'></div>
                    <div id="linha2" className='linha'></div>
                    <div id="linha3" className='linha'></div>
                </div>

                {ativo? <nav id='nav-bar-lateral'>
                            <ul id='nav-items-laterais'>
                                <li><a href="*">Produtos</a></li>
                                <li><a href="*">Costumer 360</a></li>
                                <li><a href="*">Quem somos?</a></li>
                            </ul>
                        </nav>
                :
                <></>
                }
                
            </div>

       </header> 
       
    )
}

export default Header