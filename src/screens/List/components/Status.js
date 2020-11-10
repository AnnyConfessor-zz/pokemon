import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 100px 90px 100px;
  /* background-color: green; */
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

const ProgressWrapper = styled.div`
  width: 200px;
  height: 15px;
  margin-bottom: 1rem;
  border-radius: 5px;
  background-color: #d1d1d1;
  overflow: hidden;
  border-radius: 5px;
`;

const Progress = styled.div`
  width: calc(100% - ${(props) => props.value * 0.1});
  height: 100%;
  /* background: red; */
`;

const Status = ({ name, value }) => {
  //name e value sendo extraídos para um componet superior
  // const [status, setStatus] = useState("");

  return (
    <Container alt="container-status">
      {/* <Wrapper> */}
      <Name>{name}</Name>
      <Value>{value}</Value>
      {/* </Wrapper> */}
      <ProgressWrapper>
        <Progress value={50} />
      </ProgressWrapper>
    </Container>
  );
};

export default Status;
