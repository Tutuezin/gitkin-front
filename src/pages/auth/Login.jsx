import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { InputWrap, Button } from "../../components/authComponents";
import validator from "email-validator";
import { toast, ToastContainer } from "react-toastify";
import { useContext, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import UserContext from "../../contexts/UserContext";
import API from "../../utils/api";
import { FiArrowLeft } from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Login() {
  const navigate = useNavigate();
  const { setToken, setUserName } = useContext(UserContext);

  const [form] = Form.useForm();
  const [disable, setDisable] = useState(false);
  const [loader, setLoader] = useState("Entrar");

  const signIn = async (values) => {
    const body = {
      email: values.email,
      password: values.password,
    };

    setDisable(true);
    setLoader(<ThreeDots color="white" />);

    try {
      const { data } = await API.post("/signin", body);
      setToken(data.token);
      localStorage.setItem("token", data.token);
      setUserName(data.body.userName);
      navigate(`/${data.body.userName}`);
    } catch (error) {
      if (error.response.status === 401) notify();
      setDisable(false);
      setLoader("Entrar");
    }
  };

  //TODO refatorar em outro arquivo
  const notify = () =>
    toast.error("Email ou senha incorretos!", {
      theme: "dark",
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <Container>
        <ConnectPlatform>
          <IconContext.Provider
            value={{
              style: {
                cursor: "pointer",
                color: "#fff",
                fontSize: "3rem",
              },
            }}
          >
            <FiArrowLeft onClick={() => navigate("/")} />
          </IconContext.Provider>
          <h1>GitKin</h1>
          <h2>Faça seu login na plataforma</h2>
        </ConnectPlatform>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <AuthInputs>
          <Form
            form={form}
            className="form"
            onFinish={(values) => {
              signIn(values);
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
                <Input
                  disabled={disable}
                  className="input"
                  placeholder="Seu e-mail"
                />
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
                <Input.Password
                  disabled={disable}
                  className="input"
                  placeholder="Sua senha"
                />
              </Form.Item>
            </InputWrap>
            <Button disabled={disable}>{loader}</Button>
          </Form>
          <p>
            Não tem uma conta?
            <span onClick={() => navigate("/signup")}> Registre-se!</span>
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
  .form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

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
    &:hover {
      transition: color 0.3s ease 0s;
      color: #b6b2c9;
    }
  }
`;

export const ConnectPlatform = styled.div`
  width: 48rem;
  margin-top: 30rem;

  h1 {
    font-family: "Poppins", sans-serif;
    margin-bottom: 3.9rem;
    margin-top: 2rem;
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
