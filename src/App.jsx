import './App.css';
import { Header } from './components/Header';
import { Contador } from './components/Contador/contador';
import { Lista } from './components/Lista/lista';
import { Footer } from './components/footer/footer';
import { Banner } from './components/Banner/banner';

function App() {

  return (
    <>
      {/* title = propriedade */}
      <Header title="Projeto React" subTitulo="Sub Titulo"/>

    <main className="container">
      
      <h1>conteudo do projeto react</h1>
      

      <div>
        <a href="#">Vai para Contatos</a>
      </div>
    </main>
    
    <Contador />

    <Lista />

    <Banner />

    <Footer />
    </>
  )
}

export default App
