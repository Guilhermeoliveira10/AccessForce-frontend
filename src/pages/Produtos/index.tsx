import "./style.css"
import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import Footer from "../../components/Footer"

import SalesCloudLabel from "../../assets/ProductCardImages/SalesCloud.svg"
import SalesCloudIcon from "../../assets/ProductCardImages/SalesCloudIcon.svg"
import SalesCloudCRMImage from "../../assets/ProductCardImages/SalesCloudCRM.svg"
import ServiceCloudLabel from "../../assets/ProductCardImages/ServiceCloud.svg"
import ServiceCloudIcon from "../../assets/ProductCardImages/ServiceCloudIcon.svg"
import ServiceCloudCRMImage from "../../assets/ProductCardImages/ServiceCloudCRM.svg"
import MarketingCloudLabel from "../../assets/ProductCardImages/MarketingCloud.svg"
import MarketingCloudIcon from "../../assets/ProductCardImages/MarketingCloudIcon.svg"
import MarketingCloudCRMImage from "../../assets/ProductCardImages/MarketingCloudImage.svg"




const Produtos = () => {
    return (
        <main>

            <Header />

            <section id="title">
                <h1>Conheça os nossos produtos e entregue sucesso ao cliente</h1>
            </section>

            <section id="card-grid">

                <ProductCard leftHeaderImg={SalesCloudLabel} rightHeaderImg={SalesCloudIcon} text="Com o Sales Cloud, você aumenta a eficiência   das suas vendas e reduz custos." cardImage={SalesCloudCRMImage} altImage={["Sales Cloud", "Ícone do Sales Cloud", "Imagem do CRM Sales Cloud."]} />

                <ProductCard leftHeaderImg={ServiceCloudLabel} rightHeaderImg={ServiceCloudIcon} text="Encante clientes e reduza custos com o atendimento escalável do Service Cloud" cardImage={ServiceCloudCRMImage} altImage={["Service Cloud", "Ícone do Service Cloud", "Imagem do CRM Service Cloud."]} />

                <ProductCard leftHeaderImg={MarketingCloudLabel} rightHeaderImg={MarketingCloudIcon} text="Torne seu investimento em marketing mais eficaz e faça cada momento valer a pena com o Marketing Cloud." cardImage={MarketingCloudCRMImage} altImage={["Marketing Cloud", "Ícone do Marketing Cloud", "Imagem do CRM Marketing Cloud."]} />

            </section>

            <Footer/>

        </main>
    )
}

export default Produtos