import './style.css'
import Header from '../../components/Header'
import CardIntegrantes from '../../components/CardIntegrantes'
import IntegranteLuizFoto from '../../assets/luizFoto.svg'
import IntegranteNatanFoto from '../../assets/natanFoto.svg'
import IntegranteGuilhermeFoto from '../../assets/guilhermeFoto.svg'
import Footer from '../../components/Footer'

const Integrantes = () => {
    return (
        <main>
            <Header />
            <div id='div-title'>
                <h1 className='title'>Integrantes</h1>
            </div>

            <div id="card-grid">
                <CardIntegrantes nome="Luiz Alecsander" fotoNome={IntegranteLuizFoto} numeroRM='553034' LinkedInIntegrante='' />
                <CardIntegrantes nome="Natan Junior" fotoNome={IntegranteNatanFoto} numeroRM='552626' LinkedInIntegrante='https://www.linkedin.com/in/natan-jrl' />
                <CardIntegrantes nome="Guilherme Augusto" fotoNome={IntegranteGuilhermeFoto} numeroRM='554176' LinkedInIntegrante='' />
            </div>
            <Footer />

        </main>

    )
}

export default Integrantes