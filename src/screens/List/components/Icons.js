import React from "react";
import styled from "styled-components";

import icons from "./../../../assets/images";

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Icon = ({ name, ...props }) => {
    console.log('aaa', icons[name])
  return <Img src={icons[name]} alt="icon component" {...props} />;
};

export default Icon;
