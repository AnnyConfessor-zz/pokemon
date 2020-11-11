import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 120px 50px 200px;
  /* background-color: green; */
`;

const Name = styled.p`
  font-weight: bold;
  color: #999;
  text-align: right;
  text-transform: capitalize;
`;

const Value = styled(Name)`
  font-family: Rubik, sans-serif;
  font-weight: lighter;
  font-size: 14px;
  text-align: center;
  color: black;
`;

const ProgressWrapper = styled.div`
  width: 200px;
  height: 12px;
  margin-bottom: 1rem;
  border-radius: 4px;
  background-color: #d1d1d1;
  overflow: hidden;
  border-radius: 5px;
`;

const Progress = styled.div`
  width: calc(100% * (${props => props.value} * 0.005));
  height: 100%;
  background-color: ${props => getProgressColor(props.value)};
`;

const getProgressColor = value => {
  if (value >= 100) return '#5a9c39'
  if (value >= 70) return '#f5c400'
  if (value > 30) return '#f59700'
  return '#de4141'
}

const Status = ({ name, value}) => {
  const parsedName = (() => name.split('-').join(' '))()

  return (
    <Container alt="container-status">
      <Name>{parsedName}</Name>
      <Value>{value}</Value>
      <ProgressWrapper>
        <Progress value={value} />
      </ProgressWrapper>
    </Container>
  );
};

export default Status;
