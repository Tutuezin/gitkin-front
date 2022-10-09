import styled from "styled-components";
import Header from "../../components/Header";
import { FiPlus } from "react-icons/fi";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import Social from "./Infos";
import AboutMe from "./About";
//import Technologies from "./Technologies";
import Repository from "./Repository";
import jwt from "jwt-decode";
import axios from "axios";
import * as homeUtils from "../../utils/homeUtils";
import { useParams } from "react-router-dom";
import EditButton from "../../components/EditButton";
import { useAuthContext } from "../../provider";
import ProfileModal from "../../components/ProfileModal";

export default function Portfolio() {
  //TODO usar o useRef para usar a barra de navegação
  // const test = useRef();
  const localToken = localStorage.getItem("token");
  const [authentication, setAuthentication] = useState(false);
  const { username } = useParams();
  const [state, actions] = useAuthContext();
  const {
    name,
    picture,
    occupation,
    memberSince,
    aboutMe,
    location,
    work,
    github,
    linkedin,
    twitter,
    website,
    email,
    stringAvatar,
    repositories,
  } = state;

  // GET ALL INFOS
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`http://localhost:4000/${username}`);
        const [{ email, github, linkedin, location, twitter, website, work }] =
          data.socials;
        const reduce = {
          name: data.name,
          picture: data.picture,
          occupation: data.occupation,
          memberSince: data.createdAt.substr(0, 4),
          aboutMe: data.aboutMe,
          location,
          work,
          github,
          linkedin,
          twitter,
          website,
          email,
          repositories: data.repositories,
        };
        actions.setAll(reduce);
        homeUtils.splitString(data.name, actions.setName);
      } catch (error) {
        console.log(error);
      }
    })();
    const localToken = localStorage.getItem("token");
    try {
      localToken && jwt(localToken);
      setAuthentication(true);
    } catch {}
  }, []);

  const setStates = (data) => {
    actions.setAll(data);
    homeUtils.splitString(data.name, actions.setName);
  };

  const editProfile = async (aboutMe) => {
    const newInfos = {
      aboutMe,
    };

    const config = {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };
    try {
      await axios.put(`http://localhost:4000/${username}`, newInfos, config);
    } catch (error) {
      console.log(error.response);
    }
  };

  //TODO refatorar em outro componente
  const editSocials = async (newSocials) => {
    const config = {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };

    const profile = {
      name: newSocials.name,
      picture: newSocials.picture,
      occupation: newSocials.occupation,
    };

    const socials = {
      location: newSocials.location,
      work: newSocials.work,
      github: newSocials.github,
      linkedin: newSocials.linkedin,
      twitter: newSocials.twitter,
      website: newSocials.website,
      email: newSocials.email,
    };

    try {
      const { id } = jwt(localToken);

      await axios.put(`http://localhost:4000/${username}`, profile, config);

      await axios.put(
        `http://localhost:4000/${username}/${id}`,
        socials,
        config
      );
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <>
      <Header />

      <Container>
        <ProfileInfos>
          <Profile>
            <Edit>
              <EditButton authentication={authentication}>
                <ProfileModal
                  {...state}
                  editSocials={editSocials}
                  setStates={setStates}
                />
              </EditButton>
            </Edit>
            <ProfilePicture>
              {picture ? (
                <img width={175} height={175} src={picture} alt="" />
              ) : name ? (
                <Avatar>{stringAvatar}</Avatar>
              ) : (
                <Avatar></Avatar>
              )}

              <h2>{name}</h2>
              <h3>{`@${username}`}</h3>
              <h4>{occupation}</h4>
            </ProfilePicture>
            <MemberSince>{`membro desde ${memberSince}`}</MemberSince>
          </Profile>

          <Infos>
            <Social
              socials={{
                location,
                work,
                github,
                linkedin,
                twitter,
                website,
                email,
              }}
            />
          </Infos>
        </ProfileInfos>

        <Section>
          <AboutMe
            aboutMe={aboutMe}
            editProfile={editProfile}
            authentication={authentication}
          />
          {/*  <Technologies authentication={authentication} /> */}

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
                <EditButton authentication={authentication}>
                  <FiPlus />
                </EditButton>
              </IconContext.Provider>
            </div>
          </AddRepositories>
          <Repositories>
            {repositories &&
              repositories.map((item, index) => {
                return (
                  <Repository
                    key={index}
                    repositoryName={item.repositoryName}
                    description={item.description}
                    url={item.url}
                  />
                );
              })}
          </Repositories>
        </Section>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  padding: 11.7rem 5rem 0 5rem;
  max-width: 144rem;
  margin: 0 auto;

  /*  @media (max-width: 902px) {
    flex-direction: column;
    justify-content: center;
    padding: 11.7rem 0 0 7rem;
  } */
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
  height: 41rem;
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
    margin: 1rem 0;
    font-size: 1.7rem;
    font-weight: 400;
    color: #b6b2c989;
  }

  h4 {
    margin-bottom: 2rem;
    font-family: "Merriweather Sans", sans-serif;
    font-size: 1.5rem;
    font-weight: 400;
    color: #b6b2c989;
  }
`;

const MemberSince = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
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

const AddRepositories = styled.div`
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

const Repositories = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 4.5rem;
  width: 100%;
`;
