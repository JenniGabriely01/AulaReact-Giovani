import './App.css'
import { Header } from './components/Header'

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

    <Contador title="Fazendo Contador"/>
    </>
  )
}

export default App
