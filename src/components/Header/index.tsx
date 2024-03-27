import './style.css'
import salesforceIcon from '../../assets/salesforce-icon.png'
import { useState } from 'react'

const Header = () => {

    const [menuAtivo, setMenuAtivo] = useState(false)

    function alternarMenu() {
        setMenuAtivo(!menuAtivo)
    }

    return (
        <header className='header'>

            <img width={90} id="salesforce-icon" src={salesforceIcon} alt="Ícone Salesforce" />

            <nav id='nav-bar'>
                <ul id='nav-items'>
                    <li>Produtos</li>
                    <li>Costumer 360</li>
                    <li>Quem somos?</li>
                </ul>
            </nav>

            <div id='botao-e-menu-hamburguer'>

                <button id='teste-gratis'>Teste grátis</button>

                <div onClick={alternarMenu} id='menu-hamburguer' >
                    <div id="linha1" className='linha'></div>
                    <div id="linha2" className='linha'></div>
                    <div id="linha3" className='linha'></div>
                </div>

                <nav id='nav-bar-lateral' style={{ transform: `${menuAtivo ? "translateX(0%)" : "translateX(100%)"}` }}>
                    <ul id='nav-items-laterais'>
                        <li><a href="*">Produtos</a></li>
                        <li><a href="*">Costumer 360</a></li>
                        <li><a href="*">Quem somos?</a></li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header