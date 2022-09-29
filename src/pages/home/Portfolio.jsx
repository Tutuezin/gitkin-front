import styled from "styled-components";
import Header from "../../components/Header";
import profileImg from "../../assets/images/profileImg.jpeg";
import { MdModeEdit } from "react-icons/md";
import {
  FiMapPin,
  FiGithub,
  FiBriefcase,
  FiLinkedin,
  FiTwitter,
  FiGlobe,
  FiMail,
} from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Portfolio() {
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
          <Infos>
            <IconContext.Provider
              value={{
                style: {
                  color: "#837e9f",
                  fontSize: "2.5rem",
                },
              }}
            >
              {/* //TODO refatorar em outro componente */}
              <span>
                <FiMapPin />
                birubirubiru birubirubiru
              </span>
              <span>
                <FiBriefcase />
                birubirubiru
              </span>
              <span>
                <FiGithub />
                birubirubiru
              </span>
              <span>
                <FiLinkedin />
                birubirubiru
              </span>
              <span>
                <FiTwitter />
                birubirubiru
              </span>
              <span>
                <FiGlobe />
                birubirubiru
              </span>
              <span>
                <FiMail />
                birubirubiru
              </span>
            </IconContext.Provider>
          </Infos>
        </ProfileInfos>

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

          <Input maxLength="400" /*  disabled */ />
        </AboutMe>
      </Container>
    </>
  );
}

export const AboutMe = styled.div`
  width: 100%;
  height: 16rem;
  background-color: #302f3d;
  border-radius: 1rem;

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

  outline: none;
`;

export const Container = styled.div`
  display: flex;
  padding: 11.7rem 5rem 0 5rem;
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

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem 3rem 4rem;

  margin-top: 5rem;
  min-width: 34.8rem;
  height: 34.8rem;
  background-color: #302f3d;
  border-radius: 1rem;

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
