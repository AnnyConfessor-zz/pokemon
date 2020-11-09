import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getPokemon } from "services/pokeapi";

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

// const Type = styled(Title)`
//   color: #133689;
// `;

const Texts = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const res = await getPokemon(1);
      setPoke(res);
      // console.log(res)
    }
    FetchData();
  }, []);

  return (
    <Container alt="container-texts">
      <Title>{poke.name}</Title>
      <Subtitle>Height: {poke.height} m</Subtitle>
      <Subtitle>Weight: {poke.weight} kg</Subtitle>
      {/* <Type>Water Absorto</Type> */}
    </Container>
  );
};

export default Texts;
