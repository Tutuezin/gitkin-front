import styled from "styled-components";
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Divider } from "antd";
import logo from "../assets/images/logo.png";

export default function Header() {
  const navigate = useNavigate();

  return (
    <Section>
      <HeaderPage>
        <div>
          <img src={logo} height={50} width={60} alt="" />
          <h1>GitKin</h1>
        </div>
        <NavBar>
          <h3 onClick={() => navigate("/")}>Home</h3>
          {/*  <h3>Tecnologias</h3> */}
          <h3>Projetos</h3>
        </NavBar>

        <Hover>
          <BiLogOutCircle
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("name");

              navigate("/");
            }}
          />
        </Hover>
      </HeaderPage>
      <Divider />
    </Section>
  );
}

const Section = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 8.5rem;
  width: 100%;
  z-index: 1000;
`;

const HeaderPage = styled.header`
  margin: 0 auto;

  font-family: "Poppins", sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
  height: 8.5rem;
  background-color: #22212c;
  padding: 0 10rem;

  div {
    display: flex;
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

const NavBar = styled.header`
  cursor: pointer;
  display: flex;

  gap: 11rem;

  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #837e9f;
`;

const Hover = styled.div`
  cursor: pointer;
  color: #837e9f;
  font-size: 4rem;

  &:hover svg path {
    transition: all 0.3s ease 0s;
    fill: #b6b2c9;
  }
`;
