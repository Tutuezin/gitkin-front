import styled from "styled-components";
import {
  FiMapPin,
  FiBriefcase,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiGlobe,
  FiMail,
} from "react-icons/fi";
import { IconContext } from "react-icons";

export default function Social() {
  return (
    <>
      <IconContext.Provider
        value={{
          style: {
            color: "#837e9f",
            fontSize: "2.5rem",
          },
        }}
      >
        <Info>
          <FiMapPin />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiBriefcase />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiGithub />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiLinkedin />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiTwitter />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiGlobe />
          birubirubiru birubirubiru
        </Info>
        <Info>
          <FiMail />
          birubirubiru birubirubiru
        </Info>
      </IconContext.Provider>
    </>
  );
}

const Info = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  gap: 2rem;

  font-family: "Merriweather Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
  color: #837e9f;
`;
