import styled from "styled-components";

export const InputWrap = styled.div`
  .input {
    background-color: #22212c !important;
    width: 32.7rem !important;
    height: 6rem !important;
    border-radius: 0.5rem !important;

    &::placeholder {
      font-family: "Poppins", sans-serif !important;
      opacity: 1 !important;
      color: #fff !important;
      font-size: 1.6rem !important;
      font-weight: 400 !important;
    }
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

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Merriweather Sans", sans-serif;
  font-size: 2.3rem;
  color: #fff;

  border: none;
  border-radius: 0.5rem;

  width: 32.7rem;
  height: 5rem;
  background-color: #837e9f;

  svg {
    height: 1.1rem;
  }

  &:hover {
    transition: background 0.3s ease 0s, color 0.3s ease 0s;
    background-color: #b6b2c9;
    color: #837e9f;
  }
`;
