import React, { useEffect, useState } from 'react';
import { listPokemons } from '../services/pokeapi'

const List = () => {
    const [pokes, setPokes] = useState({})

    useEffect( async () => {
        const pokes = await listPokemons() //a list pokemon n precisa de params
        console.log(pokes.results[0].url)

        setPokes(pokes)
    }, [])

    return (
        <button className="poke-name">
            {console.log(pokes.results)}
            
            {/* {pokes.map(pokes => <div>{pokes}</div>)} */}
        </button>
    )
}

export default List