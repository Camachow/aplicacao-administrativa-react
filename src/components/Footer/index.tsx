import styled from 'styled-components';
import facebook from './assets/facebook.png';
import instagram from './assets/instagram.png';
import whatsapp from './assets/whatsapp.png';
import google from './assets/google.png';


const StyledFooter = styled.footer`
    height: 100%;
    color: white;
    padding: 1em;
    background-color: var(--azul-escuro);
    text-align: center;
`;
const StyledList = styled.ul`
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: 0 auto;
`;

const StyledListItem = styled.li`
    list-style: none;
`;

function Footer(){
    return(
        <StyledFooter>
            <StyledList>
                <StyledListItem>
                    < a href='https://www.facebook.com/' target='_blank' rel='noreferrer'>
                        <img src={facebook} alt='Facebook'/>
                    </a>
                </StyledListItem>
                <StyledListItem>
                    < a href='https://www.instagram.com/' target='_blank' rel='noreferrer'>
                        <img src={instagram} alt='Instagram'/>
                    </a>
                </StyledListItem>
                <StyledListItem>
                    < a href='https://www.whatsapp.com/' target='_blank' rel='noreferrer'>
                        <img src={whatsapp} alt='Whatsapp'/>
                    </a>
                </StyledListItem>
                <StyledListItem>
                    < a href='https://www.google.com/' target='_blank' rel='noreferrer'>
                        <img src={google} alt='Google'/>
                    </a>
                </StyledListItem>
            </StyledList>
            <p>2024 © Desenvolvido por Rafael Camacho | Projeto fictício para estudo</p>
        </StyledFooter>
    )
}

export default Footer;