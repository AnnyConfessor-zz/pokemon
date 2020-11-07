import React from "react";
import styled from "styled-components";

import Texts from "./Texts";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  width: 99px;
  height: 28,95px;
  background-color: #FFFFFF;
  color: #1552E1;
  border: none;
  border-radius: 10px;
  font-weight: 900;
`

const Infos = () => {
  return (
    <Container alt="container-infos">
      <Wrapper>
        <Texts />
        <Button>Water</Button>
      </Wrapper>
    </Container>
  );
};

export default Infos;
