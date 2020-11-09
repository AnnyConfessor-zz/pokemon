import React from "react";
import styled from "styled-components";

const ButtonRaw = styled.button`
  width: 100px;
  height: 50px;
  background-color: #ee3b3b;
  color: #ffffff;
  border: none;
  border-radius: 5px;
`;

const Button = () => {
  return <ButtonRaw>Details</ButtonRaw>;
};

export default Button;