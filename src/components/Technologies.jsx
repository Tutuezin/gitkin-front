import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function Technologies() {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Techs>
        <div>
          Tecnologias
          <IconContext.Provider
            value={{
              style: {
                cursor: "pointer",
                color: "#837e9f",
                fontSize: "2rem",
              },
            }}
          >
            <MdModeEdit
              onClick={() => {
                //TODO fazer algo para edicao das tecnologias
                setEdit(edit === true ? false : true);
              }}
            />
          </IconContext.Provider>
        </div>
      </Techs>
      ;
    </>
  );
}

const Techs = styled.div`
  margin-top: 3rem;
  width: 100%;
  height: 20.4rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  padding: 2rem 2rem 1rem 5rem;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #837e9f;

  div {
    display: flex;
    justify-content: space-between;
  }
`;
