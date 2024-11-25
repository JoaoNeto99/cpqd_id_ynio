import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    font-family: sans-serif;
`;

const Card = styled.div`
    background: #ffffff;
    margin: 100px;
    padding: 50px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`;

const Logo = styled.img`
    color: #333;
    align-self: center;
    margin-bottom: 30px;
`;
const Wrapper = styled.div`
    display: flex; /* Garante que o conteúdo do Wrapper respeita flexbox */
    flex-direction: column; /* Para alinhamento vertical */
    width: 100%; /* Ocupa todo o espaço disponível no Card */
    padding: 10px;
`;

const Title = styled.h2`
    font-size: 26px;
    font-family: sans-serif;;
    color: #333;
    font-weight: bold;
    margin: 0 0 6px 0; /* Remove a margem padrão */
    align-self: flex-start;
`;

const Subtitle = styled.p`
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin: 0 0 30px 0; /* Remove a margem padrão */
    align-self: flex-start;
`;

const Input = styled.input`
    padding: 10px;
    border-top-width: 0;
    border-left-width: 0;
    border-right-width: 0;
    font-size: 14px;
    margin-bottom: 30px;
    background-color: white;
    color: #1a1a1a;

    &:focus {
        outline: none;
        border-color: #666;
    }
`;

const Button = styled.button`
    background-color: #4285f4; /* Azul do botão */
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 18px 28px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 20px;

    &:hover {
        background-color: #357ae8;
    }
`;

const Disclaimer = styled.p`
    font-size: 12px;
    color: #1a1a1a;
    margin-top: 20px;
    font-weight: bold;

    a {
        color: #4285f4;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`;

import logo from '../../../assets/logo.svg'

const Cpf = () => {
    return (
        <Container>
            <Card>
                <Logo src={logo}/>
                <Wrapper>
                    <Title>Verificação automática</Title>
                    <Subtitle>Insira seu CPF para continuar.</Subtitle>
                    <Input type="text" placeholder="CPF"/>
                </Wrapper>
                <Button>Próximo</Button>
                <Disclaimer>
                    Ao continuar, você estará compartilhando seu nome, email, telefone e
                    data de nascimento e concorda com a checagem dos seus dados pessoais
                    conforme a <a href="#">Política de Privacidade</a>.
                </Disclaimer>
            </Card>
        </Container>
    );
};

export default Cpf;
