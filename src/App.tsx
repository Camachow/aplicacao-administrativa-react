import Cabecalho from './components/Cabecalho'
import './App.css'
import Container from './components/Container'
import Titulo from './components/Titulo'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área Administrativa</Titulo>
      </Container>
      <Footer/>
    </>
  );
}

export default App
