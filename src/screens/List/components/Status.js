import React from "react";
import styled from "styled-components";

const Container = styled.div`
  /* background: red; */
  /* box-shadow: 0px 30px 40px -15px #eee; */
  border-radius: 20px 20px 20px 20px;

  padding-top: 1rem;
  margin-left: 2rem;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  margin-left: 1rem;
`;

const Name = styled.p`
  font-weight: 800;
  color: #555;
`;

const Value = styled(Name)`
  font-family: Rubik, sans-serif;
  line-height: 1.25;
  font-size: 13px;
  margin: 0 1rem;
`;

const Progress = styled.div`
  width: 300px;
  height: 15px;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #D1D1D1;
  /* margin: 0.5rem 0; */
`;

const Status = ( { index, data }) => {
  return (
    <Container alt="container-status">
      <Content alt="wrappers">
        <Wrapper alt="wrapper-status">
          {/* data. */}
          <Name>HP</Name> 
          <Value>20</Value>
          <Progress />
        </Wrapper>
        <Wrapper alt="wrapper-status">
          <Name>HP</Name>
          <Value>20</Value>
          <Progress />
        </Wrapper>
        <Wrapper alt="wrapper-status">
          <Name>HP</Name>
          <Value>20</Value>
          <Progress />
        </Wrapper>
        <Wrapper alt="wrapper-status">
          <Name>HP</Name>
          <Value>20</Value>
          <Progress />
        </Wrapper>
        <Wrapper alt="wrapper-status">
          <Name>HP</Name>
          <Value>20</Value>
          <Progress />
        </Wrapper>
      </Content>
    </Container>
  );
};

export default Status;
