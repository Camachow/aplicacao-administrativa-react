import { Rating } from "@mui/material"
import IProfissional from "../../../types/IProfissional"
import styled from "styled-components"

const ContainerEstilizazdo = styled.div`
    flex: 40%;
    max-widht: 100%;
    background-color: #ffffff;
    padding: 1em;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 1em 2em 1em;
    align-itens: center;
    justify-content: space-between;
`

const ImagemEstilizada = styled.img`
    width: 64px;
    height: 64px;
    border: 2px solid var(--azul-claro);
    border-radius: 50%;
    margin-right: 1em;
`

const ListaEstilizada = styled.ul`
    list-style-type: none;
    display: flex;
    align-itens: center;
    justify-content: space-between;
    width: 100%;
    padding: 0;
`

const ItemInformacoesEstilizado = styled.li`
    flex-grow: 1;
`
 

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
`

const ParagrafoEstilizado = styled.p`
    margin: .5em 0;
    font-size: 14px
`

function Card ({profissional} : {profissional: IProfissional}) {
    return (
        <ContainerEstilizazdo>
            <ListaEstilizada>
                <li>
                    <ImagemEstilizada src={profissional.imagem}
                    alt={'Foto de perfil do profissional' + profissional.nome}/>
                </li>
                <ItemInformacoesEstilizado>
                    <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
                    <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
                </ItemInformacoesEstilizado>
                <li>
                    <Rating
                        name="simple-control" // component name to avoid warning
                        value={profissional.nota}
                        readOnly={true}
                        sx={{alignItems: "center"}}
                    />
                </li>
            </ListaEstilizada>
        </ContainerEstilizazdo>
    )
}

export default Card