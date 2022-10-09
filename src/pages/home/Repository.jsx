import styled from "styled-components";
import { FiFolder, FiTrash } from "react-icons/fi";

import { IconContext } from "react-icons";

export default function Repository({
  repositoryName,
  description,
  url,
  repositoryId,
  deleteRepositories,
  authentication,
}) {
  return (
    <>
      <Repo>
        <div>
          <section>
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
            <a href={url} target={"_blank"} rel={"noreferrer noopener"}>
              {repositoryName}
            </a>
          </section>

          <FiTrash
            onClick={() => deleteRepositories(repositoryId)}
            className="trash"
          />
        </div>
        <p>{description}</p>
        {/* 225 caracteres */}
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

  a {
    color: #837e9f;

    :hover {
      color: #6d6dbf;
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .trash {
      cursor: pointer;
      color: #837e9f;
      font-size: 2rem;
    }
  }

  section {
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1.5rem;
    font-weight: 400;
  }
`;
