import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Register() {
  const navigate = useNavigate();
  return (
    <>
      <Header>GitKin</Header>
    </>
  );
}

export const Header = styled.header`
  display: flex;
  align-items: center;

  height: 8.5rem;
  border-bottom: 0.1rem solid #837e9f;
  padding-left: 5rem;

  color: #837e9f;
  font-size: 35px;
  font-weight: 700;
`;
