import "./login.css"
import Logo from '../../img/logo-salesforce.png'
import Menuicon from '../../img/menu-icon.png'

const Login = () => {


    return (
        <section id="login">
            <img src={Logo} alt="logo" />
            <h2>Bem-vindo</h2>
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
            </form>
            <footer>
                <a href="">Ainda não sou cliente</a>
                <a href="">Esqueci minha senha</a>
            </footer>
        </section>
    )
}

export default Login;