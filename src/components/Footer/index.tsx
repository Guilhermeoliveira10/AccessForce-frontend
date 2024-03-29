import './style.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <section>
                <h3>Entre em contato: 0800 891 1887</h3>
                <h3>Conheça os integrantes do <Link id="link" to="/integrantes" ><span>Accessforce</span></Link></h3>
            </section>
        </footer>
    )
}

export default Footer