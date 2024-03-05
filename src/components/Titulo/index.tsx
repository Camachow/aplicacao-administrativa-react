import styled from "styled-components";
import grafico from "./assets/grafico.png";
import consulta from "./assets/consulta.png";

interface Props {
    imagem?: string;
    children?: React.ReactNode;
}

interface IImagens {
    avaliacao: string;
    consulta: string;
    grafico: string;
}

const StyledSpan = styled.span<Props>`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 25px;
    height: 25px;
    background-image: ${props => props.imagem ? `url(${props.imagem})` : 'none'};
`;

const StyledTitulo = styled.h2`
    color: var(--azul-claro);
`;

const StyledContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1em;
`;

function Titulo({imagem, children}: Props) {

    const imagens: IImagens = {
        avaliacao: consulta,
        consulta: consulta,
        grafico: grafico
    }

    return (
        <StyledContainer>
            {imagem && <StyledSpan imagem={imagens[imagem as keyof IImagens]}/>}
            <StyledTitulo>{children}</StyledTitulo>
        </StyledContainer>
    );
}

export default Titulo;