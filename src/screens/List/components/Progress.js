import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;

  background-color: white;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Line = styled.div`
  width: 300px;
  height: 15px;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #e9e8e7;
`;

const Pts = styled.h2`
  font-family: Rubik, sans-serif;
  line-height: 1.25;
  font-size: 13px;
  margin: 0 1rem;
`;

const TextFeatures = styled(Pts)`
    font-weight: 800;
    color: #a39f99;
`;

const Progress = () => {
  return (
    <Container>
      <Wrapper>
        <TextFeatures>HP</TextFeatures>
        <Pts>20</Pts>
        <Line />
      </Wrapper>
      <Wrapper>
        <TextFeatures>HP</TextFeatures>
        <Pts>20</Pts>
        <Line />
      </Wrapper>
      <Wrapper>
        <TextFeatures>HP</TextFeatures>
        <Pts>20</Pts>
        <Line />
      </Wrapper>
      <Wrapper>
        <TextFeatures>HP</TextFeatures>
        <Pts>20</Pts>
        <Line />
      </Wrapper>
      <Wrapper>
        <TextFeatures>HP</TextFeatures>
        <Pts>20</Pts>
        <Line />
      </Wrapper>
    </Container>
  );
};

export default Progress;
