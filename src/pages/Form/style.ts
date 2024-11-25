import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: #f5f5f5;
    font-family: sans-serif;
`;

export const Card = styled.div`
    background: #ffffff;
    margin: 100px 100px 140px 100px;
    padding: 50px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
    width: 50%;
`;

export const Logo = styled.img`
    color: #333;
    align-self: center;
    margin-bottom: 80px;
`;

export const Wrapper = styled.div`
    display: flex; /* Garante que o conteúdo do Wrapper respeita flexbox */
    flex-direction: column; /* Para alinhamento vertical */
    width: 100%; /* Ocupa todo o espaço disponível no Card */
`;

export const Title = styled.h2`
    font-size: 26px;
    font-family: sans-serif;;
    color: #333;
    font-weight: bold;
    margin: 0 0 6px 0; /* Remove a margem padrão */
    align-self: flex-start;
`;

export const Subtitle = styled.p`
    font-size: 16px;
    color: #333;
    font-weight: bold;
    margin: 0 0 30px 0; /* Remove a margem padrão */
    align-self: flex-start;
`;

export const Input = styled.input`
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

export const WrapperButton = styled.div`
    display: flex;
    flex-direction: row; /* Para alinhamento vertical */
    justify-content: flex-end;
    width: 100%; /* Ocupa todo o espaço disponível no Card */
`;

export const ButtonBack = styled.button`
    background-color: white; /* Azul do botão */
    color: #4285f4;
    font-size: 16px;
    font-weight: bold;
    padding: 18px 28px;
    border: 1px solid #4285f4;
    border-radius: 6px;
    cursor: pointer;
    align-self: flex-end;
    margin-bottom: 20px;

    &:hover {
        background-color: #e1e1e1;
    }
`;

export const Button = styled.button`
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
    margin-left: 20px;

    &:hover {
        background-color: #236de1;
    }
`;

export const Disclaimer = styled.p`
    font-size: 14px;
    color: #181717;
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

export const Ynio = styled.img`
    width: 110px;
    margin-top: 100px;
    align-self: center;
`;
