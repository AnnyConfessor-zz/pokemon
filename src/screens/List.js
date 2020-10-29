import React, { useEffect, useState } from 'react';
import { listPokemons } from '../services/pokeapi'

const List = () => {
    const [pokes, setPokes] = useState([])

    useEffect( async () => {
        const pokes = await listPokemons() //a list pokemon n precisa de params

        setPokes(pokes.results)
    }, [])

    console.log(pokes)

    return (
        <div className="poke-name">
            {pokes.map(item => <button>{item.name}</button>)}
        </div>
    )
}

export default List