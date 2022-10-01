import { Form, Input } from "antd";
import validator from "email-validator";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, InputWrap } from "../../components/authComponents";
import { FiArrowLeft } from "react-icons/fi";

export default function Register() {
  const navigate = useNavigate();

  const [form] = Form.useForm();

  return (
    <>
      <Container>
        <AuthInputs>
          <h2>Crie sua conta</h2>
          <Form
            form={form}
            className="form"
            onFinish={(values) => {
              console.log(values);
            }}
          >
            <InputWrap>
              <Form.Item
                name="email"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Digite seu e-mail!",
                  },
                  {
                    validator: (_, value) => {
                      if (!validator.validate(value))
                        return Promise.reject("Digite um e-mail válido");
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <Input className="input" placeholder="Seu e-mail" />
              </Form.Item>
            </InputWrap>
            <InputWrap>
              <Form.Item
                name="name"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Digite seu nome!",
                  },
                ]}
              >
                <Input className="input" placeholder="Seu nome" />
              </Form.Item>
            </InputWrap>
            <InputWrap>
              <Form.Item
                name="password"
                validateFirst
                rules={[
                  {
                    required: true,
                    message: "Digita uma senha!",
                  },
                ]}
              >
                <Input.Password className="input" placeholder="Sua senha" />
              </Form.Item>
            </InputWrap>
            <InputWrap>
              <Form.Item
                name="confirmPassword"
                rules={[
                  {
                    required: true,
                    message: "Confirme sua senha!",
                  },
                  {
                    validator: (_, value) => {
                      if (value !== form.getFieldValue("password"))
                        return Promise.reject("Senhas não coincidem");
                      return Promise.resolve();
                    },
                  },
                ]}
                dependencies={["password"]}
              >
                <Input.Password
                  className="input"
                  placeholder="Confirme sua senha"
                />
              </Form.Item>
            </InputWrap>
            <p>
              Ao se registrar, você aceita nossos <span>termos de uso</span> e a
              nossa <span>política de privacidade</span>.
            </p>
            <Button type="submit">Cadastrar</Button>
          </Form>
        </AuthInputs>
        <BackToLogin>
          <h1>GitKin</h1>
          <h2>A solução perfeita para a criação do seu portifólio.</h2>
          <h3>
            Junte-se a essa família de devs, faça seus portifólio e nos mostre a
            direção dos seus objetivos!
          </h3>
          <p onClick={() => navigate("/signin")}>
            <FiArrowLeft />
            Voltar para login
          </p>
        </BackToLogin>
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
  .form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  min-height: 66rem;
  min-width: 45.6rem;
  margin-top: 22rem;

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
    margin-bottom: 1.5rem;

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

export const BackToLogin = styled.div`
  width: 48rem;

  h1 {
    font-family: "Poppins", sans-serif;
    margin-top: 34.3rem;
    margin-bottom: 3.9rem;

    font-size: 5rem;
    color: #fff;
  }

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 3.6rem;
    font-weight: 700;
    color: #fff;
  }
  h3 {
    line-height: 2.2rem;
    margin-top: 3rem;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #b9b9b9;
  }

  p {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-family: "Poppins", sans-serif;

    margin-top: 9rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: #837e9f;

    &:hover {
      transition: color 0.3s ease 0s;
      color: #b6b2c9;
    }
  }
`;
