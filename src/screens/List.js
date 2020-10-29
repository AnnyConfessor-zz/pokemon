import React, { useEffect, useState } from 'react'
import { listPokemons } from '../services/pokeapi'
import styled from 'styled-components'

const List = () => {
    const [pokes, setPokes] = useState([])

    useEffect( async () => {
        const pokes = await listPokemons() //a list pokemon n precisa de params

        setPokes(pokes.results)
    }, [])

    // console.log(pokes)

    const Container = styled.div``

    return (
        <div className="poke-name">
            {pokes.map(item => <button>{item.name}</button>)}
        </div>
    )
}

export default List