import Header from "../../components/Header"
import TextImageButton from "../../components/TextImageButton"
import Costumer360 from '../../assets/Costumer360.svg'
import './style.css'

const Home = () => {
    return (
        <main>
            <Header />

            <TextImageButton
                text='Tenha tudo em um só lugar e entregue sucesso  com o Costumer 360 da Salesforce.  '
                image={Costumer360}
                buttonVariant='primary'
                buttonText='Faça o Teste Grátis' />

            <section className="subtitle">
                <h1>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h1>
            </section>
        </main>
    )
}

export default Home