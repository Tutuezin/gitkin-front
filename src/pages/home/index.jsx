import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiUser, FiArrowRight } from "react-icons/fi";
import home from "../../assets/images/home.png";
import logo from "../../assets/images/logo.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
      <Head>
        <Header>
          <div>
            <img src={logo} height={50} width={60} alt="" />
            <h1>GitKin</h1>
          </div>
          <NavBar>
            <Button className="login" onClick={() => navigate("/signin")}>
              <FiUser />
              ENTRAR
            </Button>
            <Button className="register" onClick={() => navigate("/signup")}>
              CRIAR CONTA
            </Button>
          </NavBar>
        </Header>
        <Divider />
      </Head>
      <Container>
        <h2>A solução perfeita para a criação do seu portifólio.</h2>
        <h3>
          Junte-se a essa família de devs, faça seu portifólio e nos mostre a
          direção dos seus objetivos!
        </h3>

        <Button className="createPortfolio" onClick={() => navigate("/signup")}>
          Criar Portifólio <FiArrowRight />{" "}
        </Button>

        <img src={home} height={624} width={999} alt="" />
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  h2 {
    width: 68rem;
    font-family: "Merriweather Sans", sans-serif;
    margin-top: 11rem;
    font-size: 5rem;
    font-weight: 700;
    color: #fff;
  }
  h3 {
    line-height: 2rem;
    width: 47.2rem;
    display: flex;
    font-family: "Merriweather Sans", sans-serif;
    margin: 2rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: #fff;
  }

  .createPortfolio {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    border-radius: 0.2rem;
    border: 1px solid #837e9f;
    height: 5rem;
    width: 17rem;
    font-size: 1.5rem;
    color: #fff;
    background-color: #22212c;
    border-color: #fff;
    transition: 0.3s;

    :hover {
      opacity: 0.7;
    }
  }

  img {
    margin-top: 3rem;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Divider = styled.div`
  height: 0.1rem;
  width: 100%;
  background-color: #837e9f;
`;

const Header = styled.header`
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 144rem;
  height: 8.5rem;
  background-color: #22212c;
  padding-left: 5rem;
  padding: 0 10rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: #837e9f;
  }
  h3 {
    font-size: 2rem;
    font-weight: 400;
    color: #837e9f;
    &:hover {
      transition: color 0.3s ease 0s;
      color: #b6b2c9;
    }
  }
`;

const Button = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font: 700 1.2rem "Poppins", sans-serif;
  gap: 0.3rem;

  svg {
    font-size: 2rem;
  }
`;

const NavBar = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 2rem;
  font-size: 2rem;
  color: #837e9f;

  .login {
    border-radius: 0.2rem;
    border: none;
    height: 5rem;
    width: 9rem;
    background-color: #22212c;
    transition: 0.3s;

    :hover {
      color: #fff;
    }
  }
  .register {
    border-radius: 0.2rem;
    border: 1px solid #837e9f;
    height: 4.5rem;
    width: 11rem;
    background-color: #22212c;
    border-color: #837e9f;
    transition: 0.3s;

    :hover {
      color: #fff;
      background-color: #837e9f;
    }
  }
`;
