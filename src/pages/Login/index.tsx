import "./style.css"
import { Link } from "react-router-dom"

import Logo from '../../img/logo-salesforce.png'
import SalesforceMascote from '../../assets/mascote-salesforce.svg'

const Login = () => {


    return (
        <section id="login">
            <div className="form-container">
                <Link to="/">
                    <img id="sf-logo" src={Logo} alt="logo" />
                </Link>

                <h2>Bem-vindo ao AccessForce</h2>
                <form action="">
                    <div id="user-info">
                        <div className="field">
                            <input type="text" name="username" placeholder="Nome" />
                        </div>
                        <div className="field">
                            <input type="password" name="password" placeholder="Senha" />
                        </div>
                        <div id="remember-me">
                            <input type="checkbox" /> <span>Lembrar de mim</span>
                        </div>
                        <button id="submit">Entrar</button>
                    </div>
                    <footer>
                        <Link to="/cadastro">Ainda não sou cliente</Link>
                        <a href="">Esqueci minha senha</a>
                    </footer>
                </form>

            </div>
            <div id="div-mascote">
                <img src={SalesforceMascote} alt="mascote salesforce" id="mascote" />
            </div>
        </section>
    )
}

export default Login;