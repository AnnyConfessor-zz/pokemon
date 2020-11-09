import React from "react";
import styled from "styled-components";

import WrapperImage from "./Image";
import Infos from "./XXXInfos";

const ContainerCard = styled.div`
`;

const Wrapper = styled.div`
  width: 488px;
  height: 268px;
  border-radius: 20px 20px 20px 20px;
  background: linear-gradient(
    109.26deg,
    rgba(133, 168, 251, 0.7) 2.03%,
    rgba(76, 124, 238, 0.7) 50.26%,
    rgba(21, 82, 225, 0.7) 96.52%
  );
  box-shadow: 0px 30px 40px -15px #1552e1;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = () => {
  return (
    <ContainerCard alt="container-card">
      <Wrapper alt="wrapper">
        <WrapperImage />
        <Infos/>
      </Wrapper>
    </ContainerCard>
  );
};

export default Card;
