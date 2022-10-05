import styled from "styled-components";
import { MdModeEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { useState } from "react";

export default function AboutMe({ aboutMe }) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <About edit={edit}>
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
                setEdit(edit === true ? false : true);
              }}
            />
          </IconContext.Provider>
        </div>
        <Input
          //TODO fazer um contador de caracteres descendo
          maxLength="400"
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
            }
          }}
          disabled={edit}
          placeholder={aboutMe}
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
  outline: ${({ edit }) => (edit ? "none" : "1px solid #b6b2c9")};

  padding: 2rem 2rem 1rem 5rem;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  color: #b6b2c9;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    justify-content: space-between;
  }
`;

const Input = styled.textarea`
  height: 9rem;
  width: 100%;
  margin-top: 2rem;

  border-radius: 0.5rem;
  border: none;
  background-color: #302f3d;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;

  resize: none;
  outline: none;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    opacity: 1;
    color: #b6b2c9;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 1.7rem;
  }
`;
