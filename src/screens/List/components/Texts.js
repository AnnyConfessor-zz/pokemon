import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 150px;
  height: 130px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h1`
  font-style: Rubik;
  color: #ffffff;
  font-weight: 700;
  font-size: 20px;
`;

const Subtitle = styled(Title)`
  color: #cfdcfa;
`;

const Type = styled(Title)`
  color: #133689;
`;

const Texts = () => {
  return (
    <Container alt="container-texts">
      <Title>Vaporeon</Title>
      <Subtitle>Height: 1.0 m</Subtitle>
      <Subtitle>Weight: 29.0 kg</Subtitle>
      <Type>Water Absorto</Type>
    </Container>
  );
};

export default Texts;
