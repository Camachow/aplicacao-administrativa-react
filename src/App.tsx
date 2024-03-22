import Cabecalho from './components/Cabecalho'
import './App.css'
import Container from './components/Container'
import Titulo from './components/Titulo'
import Footer from './components/Footer'
import Tabela from './components/Tabela'
import Grafico from './components/Grafico'
import useDadosConsulta from './useDadosConsulta'
import useDadosProfissionais from './useDadosProfissionais'
import Avaliacao from './components/Avaliacao'
import Botao from './components/Botao'
import Subtitulo from './components/Subtitulo'

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
        <Botao>Cadastrar especialistas</Botao>
        <Titulo imagem="consulta">Consultas do dia</Titulo>
        <Tabela consultas = {consultas}/>
        <Titulo imagem="grafico">Consultas mensais por especialistas</Titulo>
        <Subtitulo>Janeiro/24</Subtitulo>
        <Grafico consultas = {consultas} profissionais = {profissionais} />
        <Titulo imagem="avaliacao">Avaliações de especialistas</Titulo>
        <Avaliacao profissionais = {profissionais}/>
      </Container>
      <Footer/>
    </>
  );
}

export default App
