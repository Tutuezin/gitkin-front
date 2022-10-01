import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function AboutMe() {
  const [editAbout, setEditAbout] = useState(false);

  return (
    <>
      <About>
        <div>
          Sobre mim
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
                //TODO fazer algo para deixar mais claro que a textarea foi liberada
                setEditAbout(editAbout === true ? false : true);
              }}
            />
          </IconContext.Provider>
        </div>
        <Input
          maxLength="400"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          disabled={editAbout}
        />
      </About>
    </>
  );
}

const About = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 16rem;
  background-color: #302f3d;
  border-radius: 1rem;

  padding: 2rem 2rem 1rem 5rem;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #837e9f;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Input = styled.textarea`
  height: 10rem;
  width: 100%;
  padding-left: 1.5rem;
  margin-top: 1.5rem;

  border-radius: 0.5rem;
  border: none;
  background-color: #302f3d;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;

  resize: none;
  outline: none;
`;
