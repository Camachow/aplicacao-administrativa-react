import Cabecalho from './components/Cabecalho'
import './App.css'
import Container from './components/Container'
import Titulo from './components/Titulo'
import Footer from './components/Footer'
import Tabela from './components/Tabela'
import useDadosConsulta from './useDadosConsulta'

function App() {
  const {dados, erro} = useDadosConsulta();

  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas = {dados}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App
