import Cabecalho from './components/Cabecalho'
import './App.css'
import Container from './components/Container'
import Titulo from './components/Titulo'
import Footer from './components/Footer'
import Tabela from './components/Tabela'
import Grafico from './components/Grafico'
import useDadosConsulta from './useDadosConsulta'
import useDadosProfissionais from './useDadosProfissionais'

function App() {
  const { dados: consultas, erro: consultasErro } = useDadosConsulta();
  const { dados: profissionais, erro: profissionaisErro } = useDadosProfissionais();

  if (consultasErro || profissionaisErro) {
    console.log("Erro ao carregar dados da API")
  }

  return (
    <>
      <Cabecalho/>
      <Container>
        <Titulo>Área Administrativa</Titulo>
        <Tabela consultas = {consultas}/>
        <Grafico consultas = {consultas} profissionais = {profissionais} />
      </Container>
      <Footer/>
    </>
  );
}

export default App
