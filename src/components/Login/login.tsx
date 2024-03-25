import "./login.css"

const Login = () => {
    

    return (
        <section id="login">
            <form action="">
                <div className="field">
                    <input type="text" name="username" placeholder="Username"/>
                </div>
                <div className="field">
                    <input type="password" name="password" placeholder="Password"/>
                </div>
                <div id="remember-me">
                    <input type="checkbox"/> <span>Lembrar de mim</span>
                </div>
                <button>Entrar</button>

            </form>
        </section>
    )
}

export default Login;