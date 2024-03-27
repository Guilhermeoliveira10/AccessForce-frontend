import './App.css'
import Header from './components/Header'
import TextImageButton from './components/TextImageButton'
import Costumer360 from './assets/Costumer360.svg'

function App() {

  return (
    <>
      <Header />

      <TextImageButton
        text='Tenha tudo em um só lugar e entregue sucesso  com o Costumer 360 da Salesforce.  '
        image={Costumer360}
        buttonVariant='primary'
        buttonText='Faça o Teste Grátis'
      />

      {/* <Login/> */}
    </>
  )
}

export default App
