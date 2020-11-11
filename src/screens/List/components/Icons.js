import React from "react";
import styled from "styled-components";

import icons from "./../../../assets/images";

const Figure = styled.figure``

const Img = styled.img`
  width: 100px;
  height: 100px;
`;

const Icon = ({ name }) => {
  console.log('ICONS', icons.lupa)

  return (
    <Figure>
      <Img src={icons[name]} alt="icon component" />
    </Figure>
  )
};

export default Icon;
