import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getDetails } from "services/pokeapi";

const Container = styled.div`
  width: 100px;
  height: 100px;
  background-color: pink;
`;

const Details = () => {
  const [detail, setDetail] = useState();

  useEffect(async () => {
    const detail = await getDetails(2);

    setDetail(detail);
  }, []);

  console.log(detail);

  return <Container></Container>;
};

export default Details;
