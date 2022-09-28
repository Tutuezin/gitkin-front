import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <AuthInputs>
          <h2>Crie sua conta</h2>
          <Form>
            <Input type="email" placeholder="Seu e-mail"></Input>
            <Input type="text" placeholder="Seu nome"></Input>
            <Input type="password" placeholder="Sua senha"></Input>
            <Input type="password" placeholder="Confirme sua senha"></Input>
          </Form>
          <p>
            Ao se registrar, você aceita nossos <span>termos de uso</span> e a
            nossa <span>política de privacidade</span>.
          </p>

          <Button>Cadastrar</Button>
        </AuthInputs>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthInputs = styled.div`
  min-height: 66rem;
  min-width: 45.6rem;
  margin-top: 24.6rem;

  background-color: #302f3d;
  border-radius: 2rem;
  padding: 6.4rem;

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 7.1rem;
  }

  p {
    max-width: 32.7rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #fff;
  }
  span {
    color: #837e9f;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;

  min-height: 5rem;
  min-width: 32.7rem;
  padding-left: 15px;
  margin-bottom: 2rem;

  border-radius: 0.5rem;
  border: none;
  background-color: #22212c;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    opacity: 1;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
  }

  outline: none; //TODO fazer uma transicao ao clicar no input
`;

export const Button = styled.button`
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2.3rem;
  color: #fff;

  border: none;
  border-radius: 0.5rem;

  margin-top: 3.5rem;
  width: 32.7rem;
  height: 5rem;

  background-color: #837e9f;
`;
