import './style.css'
import Header from "../../components/Header"
import TextImageButton from "../../components/TextImageButton"
import Costumer360Round from '../../assets/Costumer360.svg'
import MediumCard from "../../components/MediumCard"
import CardImageGuy from "../../assets/CardImageGuy.svg"
import CardImageLady from "../../assets/CardImageLady.svg"
import CardImageGuy2 from "../../assets/CardImageGuy2.svg"

import Footer from '../../components/Footer'



const Home = () => {
    return (
        <main>
            <Header />

            <TextImageButton
                text='Tenha tudo em um só lugar e entregue sucesso  com o Costumer 360 da Salesforce.  '
                image={Costumer360Round}
                buttonVariant='primary'
                buttonText='Faça o Teste Grátis' />

            <section className="subtitle">
                <h1>Saiba como os produtos Salesforce ajudam você a reduzir custos e economizar tempo.</h1>
            </section>
            <section className="cards">
                <MediumCard
                    text="
                Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo."
                    image={CardImageGuy} />


                <MediumCard
                    text="
                    Feche mais negócios e acelere o crescimento com o CRM nº1."
                    image={CardImageLady} />


                <MediumCard
                    text="
                    Gaste menos com serviços escaláveis que os clientes adoram."
                    image={CardImageGuy2} />


            </section>

            <Footer />

        </main>
    )
}

export default Home