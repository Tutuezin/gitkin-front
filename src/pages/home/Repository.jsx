import styled from "styled-components";
import { FiFolder } from "react-icons/fi";

import { IconContext } from "react-icons";

export default function Repository() {
  return (
    <>
      <Repo>
        <div>
          <IconContext.Provider
            value={{
              style: {
                cursor: "pointer",
                color: "#837e9f",
                fontSize: "2rem",
              },
            }}
          >
            <FiFolder />
          </IconContext.Provider>
          ReporeporeporepoReporepo
        </div>
        <p>
          desc desc desc desc desc desc desc desc desc desc desc desc desc desc
          desc desc desc desc desc desc desc desc desc descdesc desc desc desc
          desc desc desc desc desc desc desc descdesc desc desc
          {/* 225 caracteres */}
        </p>
      </Repo>
    </>
  );
}

const Repo = styled.div`
  margin-bottom: -1.5rem;
  width: 44rem;
  height: 16.3rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  padding: 3rem 2rem 1rem 2.5rem;
  font-family: "Merriweather Sans", sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #837e9f;

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  p {
    margin-top: 2rem;
  }
`;
