import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { listPokemons, getPokemon } from "services/pokeapi";

import SearchInput from "./components/SearchInput";
import Card from "./components/Card";

const Container = styled.div``;

const NavbarContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 1.5rem 0;
`;

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemons = async (name) => {
    setLoading(true);

    try {
      let response;

      if (!!name) {
        response = [await getPokemon(name)]
      } else {
        response = await listPokemons();

        response = await Promise.all(
          response.results.map((item) => getPokemon(item.name))
        );
      }

      setPokemons(response);
    } catch (err) {
      throw new Error(err);
    }

    setLoading(false);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <Container alt="container-list">
      <NavbarContainer>
        <SearchInput onPress={getPokemons} />
      </NavbarContainer>
      {loading ? <div>Carregando...</div> : pokemons.map((item, index) => (
        <Card index={index} data={item}/>
        ))}
    </Container>
  );
};

export default List;
