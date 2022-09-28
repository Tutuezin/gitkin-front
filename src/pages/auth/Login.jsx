import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Form, Input, Button } from "../../components/authComponents";

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Container>
        <BackToLogin>
          <h1>GitKin</h1>
          <h2>Faça seu login na plataforma</h2>
        </BackToLogin>
        <AuthInputs>
          <Form>
            <Input type="email" placeholder="Seu e-mail"></Input>
            <Input type="password" placeholder="Sua senha"></Input>
            <Button>Cadastrar</Button>
          </Form>
          <p>
            Não tem uma conta? <span>Registre-se!</span>
          </p>
        </AuthInputs>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  max-width: 103.6rem;
`;

export const AuthInputs = styled.div`
  min-height: 35rem;
  min-width: 45.6rem;
  margin-top: 30rem;

  background-color: #302f3d;
  border-radius: 1rem;
  padding: 6.4rem;

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 7.1rem;
  }

  p {
    margin-top: 2.4rem;
    max-width: 32.7rem;
    text-align: center;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    color: #fff;
  }
  span {
    cursor: pointer;
    color: #837e9f;
  }
`;

export const BackToLogin = styled.div`
  width: 48rem;

  h1 {
    font-family: "Poppins", sans-serif;
    margin-top: 34.3rem;
    margin-bottom: 3.9rem;

    font-weight: 400;
    font-size: 5rem;
    color: #fff;
  }

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 5.4rem;
    font-weight: 700;
    color: #fff;
  }
`;
