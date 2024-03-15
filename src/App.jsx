import { Header } from './components/Header';
import { Footer } from './components/footer/footer';
import Router from './Router';
import './App.css';

function App() {

  return (
    <>
      {/* title = propriedade */}
      <Header title="Projeto React" subTitulo="Sub Titulo" />

      <Router />

      <Footer />
    </>
  )
}

export default App
