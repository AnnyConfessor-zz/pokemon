import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { getPokemon } from '../services/pokeapi'

const Container = styled.div`
width: 100px;
height: 100px;
display: flex;
flex-direction: column;


img { 
  background-color: red;
}

button {
  background-color: blue;
}
`

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(async () => {
    const data = await getPokemon('ditto')

    setData(data)
  }, [])

  console.log(data)

  if (!data) return <div>Carregando...</div>

  return (
    <Container>
        <img src={data.sprites.front_shiny}/>
        <button>{data.name}</button>
    </Container>
  );
}

export default Profile;
