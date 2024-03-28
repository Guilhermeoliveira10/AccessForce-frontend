import './style.css'
import Header from '../../components/Header'
import CardIntegrantes from '../../components/CardIntegrantes'
import IntegranteLuizFoto from '../../assets/luizFoto.svg'

const Integrantes = () => {
    return (
        <main>
            <Header/>
            <div id='div-title'>
            <h1 className='title'>Integrantes</h1>
            </div>
            <CardIntegrantes nome = "Luiz Alecsander" fotoNome = {IntegranteLuizFoto} numeroRM='553034'/>
            

        </main>
        
    )
}

export default Integrantes