import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  display: flex;

  min-height: 5rem;
  min-width: 32.7rem;
  padding-left: 15px;
  margin-bottom: 2rem;

  border-radius: 0.5rem;
  border: none;
  background-color: #22212c;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  color: #fff;

  &::placeholder {
    font-family: "Poppins", sans-serif;
    opacity: 1;
    color: #fff;
    font-size: 1.6rem;
    font-weight: 400;
  }

  outline: none; /* //TODO fazer uma transicao ao clicar no input */
`;

export const Button = styled.button`
  cursor: pointer;

  font-family: "Merriweather Sans", sans-serif;
  font-size: 2.3rem;
  color: #fff;

  border: none;
  border-radius: 0.5rem;

  width: 32.7rem;
  height: 5rem;
  background-color: #837e9f;

  &:hover {
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    background-color: #b6b2c9;
    color: #837e9f;
  }
`;
