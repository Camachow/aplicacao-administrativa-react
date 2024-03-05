import styled from 'styled-components';
import logo from './assets/logoPD.png';
import perfil from './assets/perfil.png';

const StyledCabecalho = styled.header`
    display: flex;
    justify-content: space-between;
    align-items:center;
    padding: 2em 4em;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 2em;
`;

const StyledLink = styled.a`
    color: var(--azul-escuro);
    font-weight: 700;
`;


function Cabecalho() {
    return (
        <StyledCabecalho>
            <img src={logo} alt="Logo da empresa" style={{ maxWidth: '300px' }}/>
            <Container>
                <img src={perfil} alt="Imagem de perfil do usuário" />
                <StyledLink href="#">Sair</StyledLink>
            </Container>
        </StyledCabecalho>
    )
}

export default Cabecalho;