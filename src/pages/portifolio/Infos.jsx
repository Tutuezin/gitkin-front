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

export default function Social({ socials }) {
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
        {socials.location && (
          <Info>
            <FiMapPin />
            {socials.location}
          </Info>
        )}

        {socials.work && (
          <Info>
            <FiBriefcase />
            {socials.work}
          </Info>
        )}

        {socials.github && (
          <Info>
            <FiGithub />
            <a
              href={` https://github.com/${socials.github}`}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              {socials.github}
            </a>
          </Info>
        )}

        {socials.linkedin && (
          <Info>
            <FiLinkedin />
            <a
              href={`https://www.linkedin.com/in/${socials.linkedin}`}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              {socials.linkedin}
            </a>
          </Info>
        )}

        {socials.twitter && (
          <Info>
            <FiTwitter />
            <a
              href={`https://twitter.com/${socials.twitter}`}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              {`@${socials.twitter}`}
            </a>
          </Info>
        )}

        {socials.website && (
          <Info>
            <FiGlobe />
            <a
              href={socials.website}
              target={"_blank"}
              rel={"noreferrer noopener"}
            >
              {socials.website}
            </a>
          </Info>
        )}

        {socials.email && (
          <Info>
            <FiMail />
            {socials.email}
          </Info>
        )}
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

  a {
    color: #837e9f;

    :hover {
      color: #6d6dbf;
    }
  }
`;
