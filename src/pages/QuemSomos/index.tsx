import './style.css'

import Header from '../../components/Header'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

import SalesforceBuildingImage from '../../assets/SalesforceBuildingImage.svg'
import CRMImage from '../../assets/CRMImage.svg'
import SalesforceMascotGroup from '../../assets/SalesforceMascots.webp'
import { Link } from 'react-router-dom'


const QuemSomos = () => {
    return (
        <main>

            <Header />

            <section className='top-content'>
                <div className='title-image-and-description'>
                    <h1 id='quem-somos-title'>
                        Quem somos nós?
                    </h1>
                    <img className='salesforce-building-image' id='mobile-image' src={SalesforceBuildingImage} alt="" />
                    <h3 className='description-text'>A Salesforce é uma empresa de softwares focada na solução de gerenciamento de relacionamento.  </h3>
                    <h3 className='description-text'>Nosso objetivo é aproximar empresas e pessoas. </h3>

                </div>

                <img className='salesforce-building-image' id='tablet-or-higher-image' src={SalesforceBuildingImage} alt="" />
            </section>

            <section className='middle-content'>
                <div className='title-image-and-description'>
                    <h1 id='quem-somos-title'>
                        O que é CRM?
                    </h1>
                    <img className='CRMImage' src={CRMImage} alt="" />

                    <div className='CRM-description-text-area'>
                        <h3 className='crm-description-text'>A sigla CRM vem de Customer Relationship Management, em português podemos traduzir para Gestão de Relacionamento com o Cliente.  </h3>

                        <h3 className='crm-description-text'>
                            O CRM armazena informações de clientes atuais e potenciais e suas atividades e pontos de contato com a empresa, incluindo visitas a sites, ligações telefônicas, e-mails, entre outras interações. </h3>

                        <h3 className='crm-description-text'>Dessa forma, o software de CRM reúne e integra dados valiosos para preparar e atualizar suas equipes com informações pessoais dos clientes, histórico e preferência de compras. Isso o torna uma ferramenta valiosa a qualquer empresa. </h3>

                    </div>



                </div>
            </section>

            <section className='bottom-content'>
                <h1 className='bottom-title'>
                    Vá em direção ao sucesso do cliente ao lado da Salesforce
                </h1>
                <img id='mascots-group-image' src={SalesforceMascotGroup} alt="" />
                <Link to={"*"}><Button variant='secondary' text='Teste grátis o CRM da Salesforce' id='bottom-button' onClick={() => { }} /></Link>
            </section>

            <Footer />
        </main>
    )
}

export default QuemSomos