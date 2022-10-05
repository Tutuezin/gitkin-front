import styled from "styled-components";
import Header from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { MdModeEdit } from "react-icons/md";
import { IconContext } from "react-icons";
import { useRef, useState } from "react";
import Social from "./Infos";
import AboutMe from "./About";
import Technologies from "./Technologies";
import Repository from "./Repository";
import jwt from "jwt-decode";

import axios from "axios";

export default function Portfolio() {
  // const test = useRef();
  const localToken = localStorage.getItem("token");
  const localName = localStorage.getItem("name");

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const { userName } = jwt(localToken);

  (async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/${userName}`);
      setPicture(data.picture);
      setName(data.name);
      localStorage.setItem("name", data.name);
      setOccupation(data.occupation);
      setMemberSince(data.createdAt.substr(0, 4));
      setAboutMe(data.aboutMe);
    } catch (error) {
      console.log(error);
    }
  })();

  const editProfile = async (aboutMe) => {
    const newInfos = {
      picture,
      occupation,
      aboutMe,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };

    try {
      const { data } = await axios.put(
        `http://localhost:4000/${userName}`,
        newInfos,
        config
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  //TODO refatorar se necessario
  function stringAvatar(name) {
    return `${name.split(" ")[0][0]} ${name.split(" ")[1][0]}`;
  }

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
              {picture ? (
                <img width={175} height={175} src={picture} alt="" />
              ) : (
                <Avatar>{stringAvatar(localName)}</Avatar>
              )}

              <h2>{name}</h2>
              <h3>{`@${userName}`}</h3>
              <h4>{occupation}</h4>
            </ProfilePicture>
            <MemberSince>{`membro desde ${memberSince}`}</MemberSince>
          </Profile>

          <Infos /* ref={test} */>
            <Social />
          </Infos>
        </ProfileInfos>

        <Section>
          <AboutMe aboutMe={aboutMe} editProfile={editProfile} />
          <Technologies />

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
            <Repository />
            <Repository />
          </Repositories>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 11.7rem 5rem 0 5rem;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ProfileInfos = styled.div`
  margin-right: 6rem;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  min-width: 34.8rem;
  height: 40rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
`;

const Avatar = styled.div`
  font-family: "Merriweather Sans", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #837e9f;
  color: #fff;
  border-radius: 13.4rem;

  width: 17.5rem;
  height: 17.5rem;
  font-size: 3.5rem;
  font-weight: 700;
  z-index: 0;
`;

const Edit = styled.div`
  cursor: pointer;

  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 1.8rem 1.8rem 0 0;

  color: #837e9f;
  font-size: 2.4rem;
`;

const ProfilePicture = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    border-radius: 13.4rem;
    margin-top: 2.9rem;
  }

  h2 {
    font-family: "Merriweather Sans", sans-serif;
    margin-top: 2rem;
    font-size: 2.2rem;
    font-weight: 700;
    color: #b6b2c9;
  }
  h3 {
    display: flex;
    font-family: "Merriweather Sans", sans-serif;
    margin-top: 1rem;
    font-size: 1.7rem;
    font-weight: 400;
    color: #b6b2c9;
  }

  h4 {
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #b6b2c9;
  }
`;

const MemberSince = styled.div`
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
  color: #b6b2c9;
`;

const Infos = styled.ul`
  display: flex;
  flex-direction: column;

  padding: 3rem 2rem 3rem 4rem;

  margin: 5rem 0;
  min-width: 34.8rem;
  max-height: 34.8rem;
  background-color: #302f3d;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.2);
`;

export const AddRepositories = styled.div`
  margin-top: 2.5rem;
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
