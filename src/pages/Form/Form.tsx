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
    ButtonBack, Ynio, CpfInput
} from "./style.ts";
import {useState} from "react";

const Form = () => {
    const [cpf, setCpf] = useState('');
    //const [phone, setPhone] = useState('');
    const [index, setIndex] = useState(0);

    function handleFoward() {
        setIndex(index + 1);
        console.log(cpf)
    }

    function handleBack() {
        setIndex(index - 1);
    }

    function handleInputCPFChange(event: any) {
        //setCpf(event.target.value); // Atualiza o estado com o valor digitado
        setCpf(event.target.value)
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    function handleInputPhoneChange(event: never) {
        //setPhone(event.target.value); // Atualiza o estado com o valor digitado
    }

    function handleSubmit() {
        //console.log(cpf.replace(/\D/g, ''))
       // console.log(phone)
        window.location.href = "br.com.cpqd.ynio.demo://login?cpf="+cpf.replace(/\D/g, '');
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
                                <CpfInput
                                    mask="999.999.999-99"
                                    value={cpf}
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
