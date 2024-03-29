import './style.css';
import Logo from '../../img/logo-salesforce.png';
import CostumerSuccess from '../../assets/CostumerSuccess.svg'

import { Link } from 'react-router-dom';

const Cadastro = () => {
    return (
        <section id="cadastro-register">

            <div className='image-side'>
                <img id='salesforce-boy' src={CostumerSuccess} alt="Sucesso do Cliente" />
            </div>

            <div className='form-side'>

                <img id='salesforce-logo' src={Logo} alt="logo" className="logo" />
                <h2><br />Cadastre-se já!
                </h2>
                <h3 id='title-register'>Experimente a solução completa de CRM da Salesforce por 30 dias grátis</h3>
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
                        <div className="check-box-agreement">
                            <input type="checkbox" id="agreement" name="agreement" />
                            <span>Estou de acordo com o Main Services Agreement.</span>

                        </div>
                        <Link id='link' to="/">
                            <button id="submit-register">Cadastrar</button>
                        </Link>

                    </div>
                    <Link id='already-cliente' to="/login">Já sou cliente</Link>
                </form>
            </div>
        </section>
    );
};

export default Cadastro;