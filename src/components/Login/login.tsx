import "./login.css"

const Login = () => {
    

    return (
        <section id="login">
            <form action="">
                <div id="user-info">
                    <div className="field">
                        <input type="text" name="username" placeholder="Nome"/>
                    </div>
                    <div className="field">
                        <input type="password" name="password" placeholder="Senha"/>
                    </div>
                    <div id="remember-me">
                        <input type="checkbox"/> <span>Lembrar de mim</span>
                    </div>
                    <button id="submit">Entrar</button>
                </div>

            </form>
        </section>
    )
}

export default Login;