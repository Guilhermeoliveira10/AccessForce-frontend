import React from 'react';
import './styles.css';
import Logo from '../../img/logo-salesforce.png';
import BackgroundCadastro from '../../img/background-cadastro.png';

const Cadastro = () => {
    return (
        <section id="cadastro-register">
            <img src={Logo} alt="logo" className="logo" />
            <h2><br/>Cadastre-se já!
            </h2>
            <h3>Experimente a solução completa de CRM da Salesforce por 30 dias grátis</h3>
            <form id='form-register'>
                <div id="user-info-register">
                    <div className="field-register">
                        <input type="text" name="username" placeholder="Nome" />
                    </div>
                    <div className="field-register">
                        <input type="text" name="lastname" placeholder="Sobrenome" />
                    </div>
                    <div className="field-register">
                        <input type="email" name="email" placeholder="Email corporativo" />
                    </div>
                    <div className="field-register">
                        <input type="password" name="password" placeholder="Senha" />
                    </div>
                    <div className="field-register">
                        <input type="tel" name="phone" placeholder="Telefone" />
                    </div>
                    <div className="field-register">
                        <input type="text" name="country" placeholder="País/Região" />
                    </div>
                    <div className="remember-me-register">
                        <input type="checkbox" id="agreement" name="agreement" /> <span>Estou de acordo com o Main Services Agreement.</span>
                        
                    </div>
                    <button id="submit-register">Cadastrar</button>
                </div>
                <a href="">Já sou cliente</a>
                <div className="background-cadastro"></div>
            </form>
        </section>
    );
};

export default Cadastro;