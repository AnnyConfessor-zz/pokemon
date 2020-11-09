import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 400px;
  height: 100%;
  background-color: #60CDE4;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  display: flex;
`;

const Line = styled.div`
  width: 300px;
  height: 15px;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: white;
  margin: 0.5rem 0;
`;

const Pts = styled.h2`
  font-family: Rubik, sans-serif;
  line-height: 1.25;
  font-size: 13px;
  margin: 0 1rem;
`;

const TextFeatures = styled(Pts)`
  font-weight: 800;
  color: white;
`;

const Progress = () => {
  return (
    <Container alt="container-progress">
      <div alt="wrappers">
        <Wrapper alt="wrapper-progress">
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
      </div>
    </Container>
  );
};

export default Progress;
