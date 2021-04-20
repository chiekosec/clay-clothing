import styled, { css } from "styled-components";

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: 1px solid black;
  }
`;

const googleSigninStyles = css`
  background-color: #4285f4;
  color: white;
  border-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    color: white;
    border-color: #357ae8;
  }
`;

const getButtonStyles = (props) => {
  if (props.isGoogleSignIn) {
    return googleSigninStyles;
  }

  if (props.inverted) {
    return invertedButtonStyles;
  }
};

export const CustomButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: 1px solid black;
  cursor: pointer;
  transition: all 0.1s ease;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  ${getButtonStyles}
`;
