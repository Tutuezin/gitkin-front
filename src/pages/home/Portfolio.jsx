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
import * as homeUtils from "../../utils/homeUtils";

import { Modal, Form, Input } from "antd";

export default function Portfolio() {
  //TODO usar o useRef para usar a barra de navegação
  // const test = useRef();
  const localToken = localStorage.getItem("token");

  const [picture, setPicture] = useState("");
  const [name, setName] = useState("");
  const [stringAvatar, setStringAvatar] = useState("");
  const [occupation, setOccupation] = useState("");
  const [memberSince, setMemberSince] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [location, setLocation] = useState("");
  const [work, setWork] = useState("");
  const [github, setGithub] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [twitter, setTwitter] = useState("");
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");

  const { userName, id } = jwt(localToken);
  const { confirm } = Modal;
  const [form] = Form.useForm();

  (async () => {
    try {
      const { data } = await axios.get(`http://localhost:4000/${userName}`);
      setPicture(data.picture);
      setName(data.name);
      homeUtils.splitString(name, setStringAvatar);
      setOccupation(data.occupation);
      setMemberSince(data.createdAt.substr(0, 4));
      setAboutMe(data.aboutMe);
      setLocation(data.socials[0]?.location);
      setWork(data.socials[0]?.work);
      setGithub(data.socials[0]?.github);
      setLinkedin(data.socials[0]?.linkedin);
      setTwitter(data.socials[0]?.twitter);
      setWebsite(data.socials[0]?.website);
      setEmail(data.socials[0]?.email);
    } catch (error) {
      console.log(error);
    }
  })();

  const editProfile = async (aboutMe) => {
    const newInfos = {
      aboutMe,
    };

    console.log(newInfos);

    const config = {
      headers: {
        Authorization: `Bearer ${localToken}`,
      },
    };

    try {
      await axios.put(`http://localhost:4000/${userName}`, newInfos, config);
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

    console.log(socials);

    try {
      await axios.put(`http://localhost:4000/${userName}`, profile, config);

      await axios.put(
        `http://localhost:4000/${userName}/${id}`,
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
              {/* //TODO transformar isso em um componente pelo amor de DEUS */}
              <MdModeEdit
                onClick={() => {
                  confirm({
                    icon: false,
                    title: "Meu Perfil",
                    onOk(_) {
                      form.submit();
                    },
                    afterClose: () => form.resetFields(),
                    maskClosable: true,
                    content: (
                      <Form
                        form={form}
                        className="form"
                        layout="vertical"
                        onFinish={(values) => {
                          editSocials(values);
                        }}
                      >
                        <section className="sectionInputs">
                          <InputWrap>
                            <Form.Item
                              name="name"
                              label="Seu Nome"
                              initialValue={name}
                              required={false}
                              rules={[
                                {
                                  required: true,
                                  message: "Seu nome é obrigatório!",
                                },
                              ]}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                          <InputWrap>
                            <Form.Item
                              name="picture"
                              label="Foto"
                              initialValue={picture}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                        </section>

                        <section className="sectionInputs">
                          <InputWrap>
                            <Form.Item
                              name="occupation"
                              label="Ocupação"
                              initialValue={occupation}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                          <InputWrap>
                            <Form.Item
                              name="location"
                              label="Localização"
                              initialValue={location}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                        </section>

                        <section className="sectionInputs">
                          <InputWrap>
                            <Form.Item
                              name="work"
                              label="Empresa"
                              initialValue={work}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                          <InputWrap>
                            <Form.Item
                              name="github"
                              label="GitHub"
                              initialValue={github}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                        </section>

                        <section className="sectionInputs">
                          <InputWrap>
                            <Form.Item
                              name="linkedin"
                              label="Linkedin"
                              initialValue={linkedin}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                          <InputWrap>
                            <Form.Item
                              name="twitter"
                              label="Twitter"
                              initialValue={twitter}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                        </section>

                        <section className="sectionInputs">
                          <InputWrap>
                            <Form.Item
                              name="website"
                              label="Website"
                              initialValue={website}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                          <InputWrap>
                            <Form.Item
                              name="email"
                              label="Email"
                              initialValue={email}
                            >
                              <Input className="input" />
                            </Form.Item>
                          </InputWrap>
                        </section>
                      </Form>
                    ),
                  });
                }}
              />
            </Edit>
            <ProfilePicture>
              {picture ? (
                <img width={175} height={175} src={picture} alt="" />
              ) : (
                <Avatar>{/* stringAvatar(localName) */ stringAvatar}</Avatar>
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

const InputWrap = styled.div`
  label {
    color: #fff;
    font: 400 1.3rem "Merriweather Sans", sans-serif;
  }
  .ant-form-item-label {
    padding-bottom: 0.5rem;
  }

  .input {
    background-color: #22212c !important;
    width: 30rem !important;
    height: 5rem !important;
    border-radius: 0.5rem !important;

    color: #fff !important;
    font: 400 1.6rem "Poppins", sans-serif !important;

    input {
      width: 32.7rem !important;
      height: 5rem !important;
      border: none !important;
      background-color: #22212c !important;

      font-family: "Poppins", sans-serif !important;
      font-size: 1.6rem !important;
      color: #fff !important;

      &::placeholder {
        font-family: "Poppins", sans-serif !important;
        opacity: 1 !important;
        color: #fff !important;
        font-size: 1.6rem !important;
        font-weight: 400 !important;
      }
    }
    .ant-input-suffix svg path {
      fill: #fff !important;
    }
  }
  .ant-form-item {
    margin: 0 !important;
  }
`;

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
