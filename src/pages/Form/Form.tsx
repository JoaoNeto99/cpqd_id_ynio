import logo from '../../assets/logo.svg'
import ynio_logo from '../../assets/ynio_logo.png'
import {
    Container,
    Card,
    Logo,
    Wrapper,
    Title,
    Subtitle,
    Input,
    Button,
    Disclaimer,
    WrapperButton,
    ButtonBack, Ynio
} from "./style.ts";
import {useState} from "react";

const Form = () => {
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');
    const [index, setIndex] = useState(0);

    function handleFoward() {
        setIndex(index + 1);
    }

    function handleBack() {
        setIndex(index - 1);
    }

    function handleInputCPFChange(event: any) {
        setCpf(event.target.value); // Atualiza o estado com o valor digitado
    }

    function handleInputPhoneChange(event: any) {
        setPhone(event.target.value); // Atualiza o estado com o valor digitado
    }

    function handleSubmit() {
        console.log(cpf)
        console.log(phone)
        window.location.href = "meuapp://abrir?info="+cpf;
    }

    return (
        <Container>
            <Card>
                <Logo src={logo}/>
                <Title>Verificação automática</Title>
                {
                    index == 0 && (
                        <>
                            <Wrapper>
                                <Subtitle>Insira seu CPF para continuar.</Subtitle>
                                <Input
                                    type="text"
                                    placeholder="CPF"
                                    onChange={handleInputCPFChange}
                                />
                            </Wrapper>
                            <Button onClick={handleFoward}>Próximo</Button>
                            <Disclaimer>
                                Ao continuar, você estará compartilhando seu nome, email, telefone e
                                data de nascimento e concorda com a checagem dos seus dados pessoais
                                conforme a <a href="#">Política de Privacidade</a>.
                            </Disclaimer>
                        </>
                    )

                }
                {
                    index == 1 && (
                        <>
                            <Wrapper>
                                <Subtitle>Precisamos apenas de mais um dado cadastral!</Subtitle>
                                <Input
                                    type="text"
                                    placeholder="Telefone"
                                    onChange={handleInputPhoneChange}
                                />
                            </Wrapper>
                            <WrapperButton>
                                <ButtonBack onClick={handleBack}>Voltar</ButtonBack>
                                <Button onClick={handleSubmit}>Concluir</Button>
                            </WrapperButton>
                        </>
                    )
                }
                <Ynio src={ynio_logo}/>
            </Card>
        </Container>
    );
};

export default Form;
