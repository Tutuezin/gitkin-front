import styled from "styled-components";
import Header from "../../components/Header";
import profileImg from "../../assets/images/a.png";
import { MdModeEdit } from "react-icons/md";
import {
  FiMapPin,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiGlobe,
  FiMail,
  FiPlus,
  FiFolder,
} from "react-icons/fi";
import { IconContext } from "react-icons";
import { useRef } from "react";
import Social from "../../components/Infos";

export default function Portfolio() {
  // const test = useRef();

  return (
    <>
      <Header />

      <Container>
        <ProfileInfos>
          <Profile>
            <Edit>
              <MdModeEdit />
            </Edit>
            <ProfilePicture>
              <img width={175} height={175} src={profileImg} alt="" />
              <h2>Arthur Alcantara</h2>
              <h3>Full Stack Developer</h3>
            </ProfilePicture>
            <MemberSince>membro desde 2022</MemberSince>
          </Profile>

          <Infos /* ref={test} */>
            <Social />
          </Infos>
        </ProfileInfos>

        <Section>
          {/* //TODO refatorar "about me" em outro componente */}
          <AboutMe>
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
                <MdModeEdit />
              </IconContext.Provider>
            </div>
            <Input
              maxLength="400"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                }
              }}
              disabled
            />
          </AboutMe>
          <Technologies>
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
                <MdModeEdit />
              </IconContext.Provider>
            </div>
          </Technologies>
          <AddRepositories>
            <div>
              Meus Projetos
              <IconContext.Provider
                value={{
                  style: {
                    cursor: "pointer",
                    color: "#837e9f",
                    fontSize: "3rem",
                  },
                }}
              >
                <FiPlus />
              </IconContext.Provider>
            </div>
          </AddRepositories>
          <Repositories>
            <Repositorie>
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
                desc desc desc desc desc desc desc desc desc desc desc desc desc
                desc desc desc desc desc desc desc desc desc desc descdesc desc
                desc desc desc desc desc desc desc desc desc descdesc desc desc
                {/* 225 caracteres */}
              </p>
            </Repositorie>
          </Repositories>
        </Section>
      </Container>
    </>
  );
}

export const Container = styled.div`
  display: flex;
  padding: 11.7rem 5rem 0 5rem;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProfileInfos = styled.div`
  margin-right: 6rem;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 34.8rem;
  height: 40rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const Edit = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1.8rem 1.8rem 0 0;

  color: #837e9f;
  font-size: 2.4rem;
`;

export const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 13.4rem;
    margin-top: 2.9rem;
  }

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    margin-top: 1rem;
    font-size: 2.3rem;
    font-weight: 700;
    color: #837e9f;
  }

  h3 {
    font-family: "Merriweather Sans", sans-serif;
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: 400;
    color: #837e9f;
  }
`;

export const MemberSince = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  margin-top: 4.5rem;
  border-top: 0.2rem solid #22212c;

  font-family: "Merriweather Sans", sans-serif;
  font-size: 1.5rem;
  font-weight: 400;
  color: #837e9f;
`;

//TODO refatorar "infos" em outro componente
export const Infos = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem 3rem 4rem;

  margin: 5rem 0;
  min-width: 34.8rem;
  max-height: 34.8rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);

  span {
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
    gap: 2rem;

    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #837e9f;
  }
`;

//TODO refatorar "about me" em um componente
export const AboutMe = styled.div`
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

export const Input = styled.textarea`
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

//TODO refatorar "Tecnologias" em um componente
export const Technologies = styled.div`
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

//TODO refatorar "repositorios" em um componente
export const AddRepositories = styled.div`
  margin-top: 4rem;
  margin-bottom: 2.5rem;
  width: 100%;
  height: 6.4rem;
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
    align-items: center;
  }
`;

export const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 4.5rem;
  width: 100%;
`;

export const Repositorie = styled.div`
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
