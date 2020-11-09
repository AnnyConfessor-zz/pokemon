import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { listPokemons, getPokemon } from "services/pokeapi";

import SearchBar from "shared/SearchBar";
import Card from "./components/Card";

const Container = styled.div``;

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(false);

  const getPokemons = async () => {
    setLoading(true);

    try {
      let response = await listPokemons();

      response = await Promise.all(response.results.map(item => getPokemon(item.name)))

      setPokemons(response)
    } catch (err) {
      throw new Error(err);
    }

    setLoading(false)
  }

  useEffect(() => {
    getPokemons();
  }, []);

  if (loading) return <div>Carregando...</div>

  return (
    <Container alt="container-list">
      <SearchBar />
      {pokemons.map((item, index) => <Card index={index} data={item} />)}
    </Container>
  );
};

export default List;
