import React from "react";
import styled from "styled-components";

const Figure = styled.div`
  width: 120px;
  height: 120px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Image = ({ name, image }) => (
  <Figure>
    <img src={image} alt={name} />
  </Figure>
);

export default Image;
