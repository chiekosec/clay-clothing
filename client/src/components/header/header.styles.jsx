import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const OptionContainerStyles = css`
  padding-left: 30px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 0 61px;
  margin-top: 10px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding-left: 7.5px;
  img {
    height: 100%;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
