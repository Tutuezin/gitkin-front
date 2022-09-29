import styled from "styled-components";
import { BiLogOutCircle } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <>
      <HeaderPage>
        <h1>GitKin</h1>
        <NavBar>
          <h3>Home</h3>
          <h3>Tecnologias</h3>
          <h3>Projetos</h3>
        </NavBar>
        <IconContext.Provider
          value={{
            style: {
              color: "#837e9f",
              fontSize: "4rem",
              cursor: "pointer",
            },
          }}
        >
          <BiLogOutCircle /* //TODO arrumar o hover depois */
            onMouseOver={({ target }) => (target.style.color = "#b6b2c9")}
            onMouseOut={({ target }) => (target.style.color = "#837e9f")}
          />
        </IconContext.Provider>
      </HeaderPage>
    </>
  );
}

const HeaderPage = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  font-family: "Poppins", sans-serif;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 8.5rem;
  background-color: #22212c;
  border-bottom: 0.1rem solid #837e9f;
  padding: 0 5rem 0 5rem;

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
