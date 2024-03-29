import React from 'react'
import './style.css'
import Header from '../../components/Header'
import TextImageButton from '../../components/TextImageButton'

import Costumer360Round from '../../assets/Costumer360.svg'
import CostumerThreeSixtyImage from '../../assets/Costumer360Img.svg'
import ResourcesImage from '../../assets/Costumer360Resources.svg'
import MiniCard from '../../components/MiniCard'
import Footer from '../../components/Footer'


import SantanderIcon from '../../assets/IconMiniCard/SantanderImage.png'
import UberEatsIcon from '../../assets/IconMiniCard/UberEatsImage.png'
import AAAgroupIcon from '../../assets/IconMiniCard/AAAGroupImage.png'
import YetiIcon from '../../assets/IconMiniCard/YetiImage.png'
import EinsteinLady from '../../assets/EinsteinLady.svg'


const CostumerThreeSixty = () => {
    return (
        <div>
            <Header />

            <section className='top-content'>
                <section className='costumer-image-text'>
                    <img width={360} src={CostumerThreeSixtyImage} alt="Costumer 360" />

                    <h1>Todos os melhores aplicativos. Tudo em um só lugar.</h1>

                    <section className='costumer-text'>
                        <h3>
                            O Customer 360 é todo o nosso portfólio de produtos unido e ajuda você a se conectar com seus clientes de uma maneira totalmente nova e eficiente.
                        </h3>
                    </section>
                </section>

                <section className='costumer-round-image'>
                    <img src={Costumer360Round} alt="" />
                </section>
            </section>


            <section className='costumer-resources'>
                <img className='costumer-resources-img' src={ResourcesImage} alt="Recursos do Costumer 360, incluem Vendas, Atendimento ao cliente, Marketing, Commerce, Slack, Plataforma, Net Zero, Pequenas empresas" />
            </section>

            <section className='cards-title'>
                <h1>As melhores empresas estão com a Salesforce e usam o Costumer 360.</h1>
            </section>

            <section className='mini-cards-section'>
                <div className='mini-cards-area'>

                    <div className="line">
                        <MiniCard img={SantanderIcon} />
                        <MiniCard img={UberEatsIcon} />
                    </div>

                    <div className="line">
                        <MiniCard img={AAAgroupIcon} />
                        <MiniCard img={YetiIcon} />
                    </div>
                </div>
            </section>

            <TextImageButton
                text='Dados + IA + CRM. Essa é a genialidade do Customer 360.'
                image={EinsteinLady}
                buttonVariant='secondary'
                buttonText='Faça o Teste Grátis' />


            <Footer />

        </div>

    )
}

export default CostumerThreeSixty