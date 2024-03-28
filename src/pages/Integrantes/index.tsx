import './style.css'
import Header from '../../components/Header'
import CardIntegrantes from '../../components/CardIntegrantes'
import IntegranteLuizFoto from '../../assets/luizFoto.svg'
import IntegranteNatanFoto from '../../assets/natanFoto.svg'  
import IntegranteGuilhermeFoto from '../../assets/guilhermeFoto.svg'


const Integrantes = () => {
    return (
        <main>
            <Header/>
            <div id='div-title'>
            <h1 className='title'>Integrantes</h1>
            </div>
            <CardIntegrantes nome = "Luiz Alecsander" fotoNome = {IntegranteLuizFoto} numeroRM='553034'/>
            <CardIntegrantes nome = "Natan Junior" fotoNome = {IntegranteNatanFoto} numeroRM='552626'/>
            <CardIntegrantes nome = "Guilherme Augusto" fotoNome = {IntegranteGuilhermeFoto} numeroRM='554176'/>

        </main>
        
    )
}

export default Integrantes