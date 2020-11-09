import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Texts from "./XXXTexts";

import { getPokemon } from "services/pokeapi";

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
  height: 28, 95px;
  background-color: #ffffff;
  color: #1552e1;
  border: none;
  border-radius: 10px;
  font-weight: 900;
`;

const Infos = () => {
  const [poke, setPoke] = useState([]);

  useEffect(() => {
    async function FetchData() {
      const res = await getPokemon(1);
      setPoke(res);
      console.log(res);
    }
    FetchData();
  }, []);

  if (poke.sprites === undefined) {
    <div>Carregando...</div>;
  }

  return (
    <Container alt="container-infos">
      <Wrapper>
        <Texts />
        {/* <Button>{poke.types[0].type.name}</Button> */}
      </Wrapper>
    </Container>
  );
};

export default Infos;
