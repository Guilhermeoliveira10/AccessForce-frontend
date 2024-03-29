import './style.css'
import salesforceIcon from '../../assets/salesforce-icon.png'
import { useState } from 'react'
import { Link } from "react-router-dom";

const Header = () => {

    const [menuAtivo, setMenuAtivo] = useState(false)

    function alternarMenu() {
        setMenuAtivo(!menuAtivo)
    }

    return (
        <header className='header'>


            <Link to="/">
                <img width={90} id="salesforce-icon" src={salesforceIcon} alt="Ícone Salesforce" />
            </Link>


            <nav id='nav-bar'>
                <ul id='nav-items'>
                    <li><Link id='link' to="/produtos">Produtos</Link></li>
                    <li><Link id='link' to="/costumer360">Costumer 360</Link></li>
                    <li><Link id='link' to="/quem-somos">Quem somos?</Link></li>
                </ul>
            </nav>

            <div id='botao-e-menu-hamburguer'>

                <Link to="/cadastro">
                    <button id='teste-gratis'>Teste grátis</button>
                </Link>


                <div onClick={alternarMenu} id='menu-hamburguer' >
                    <div id="linha1" className='linha'></div>
                    <div id="linha2" className='linha'></div>
                    <div id="linha3" className='linha'></div>
                </div>

                <nav id='nav-bar-lateral' style={{ transform: `${menuAtivo ? "translateX(10%)" : "translateX(110%)"}` }}>
                    <ul id='nav-items-laterais'>
                        <li><Link to="/produtos">Produtos</Link></li>
                        <li><Link to="/costumer360">Costumer 360</Link></li>
                        <li><Link to="/quem-somos">Quem somos?</Link></li>
                    </ul>
                </nav>

            </div>

        </header>
    )
}

export default Header