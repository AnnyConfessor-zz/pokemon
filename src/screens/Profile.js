import React, { useEffect, useState } from 'react';

import { getPokemon } from '../services/pokeapi'

const Profile = () => {
  const [data, setData] = useState(null)

  useEffect(async () => {
    const data = await getPokemon('ditto')

    setData(data)
  }, [])

  if (!data) return <div>Carregando...</div>

  return (
    <div>
      <p>{data.name}</p>
      <img src={data.sprites.front_shiny}/>
    </div>
  );
}

export default Profile;
