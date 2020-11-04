import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getPokemon } from '../services/pokeapi'

const Container = styled.div`
width: 300px;
height: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: black;
border-radius: 7%;
box-shadow: 100px 100px 60px #e9e8e7;

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

figure {
  object-fit: cover;
}

h2 {
  font-size: 20px;
  color: #D1D1D1;
  /* margin-top: 10px; */
}

h3 {
  font-size: 15px;
  color: #D1D1D1;
  margin-top: 10px;
}
`

const PokemonCard = () => {
  const [data, setData] = useState([])

  useEffect(async () => {
    const data = await getPokemon('ditto')

    setData(data)
  }, [])

  console.log(data)

  if (!data) return <div>Carregando...</div>

  return (
    <Container>
      <div className="card">
        {/* <figure>
          <img src={data.sprites.front_shiny}/>
        </figure>
        <h2>{data.name}</h2>
        <h3>oi</h3> */}
      </div>
    </Container>
  );
}

export default PokemonCard;
