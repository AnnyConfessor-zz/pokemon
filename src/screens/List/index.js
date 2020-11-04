import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { listPokemons } from 'services/pokeapi'

import Card from './components/Card'

const List = () => {
    const [pokes, setPokes] = useState([])

    useEffect(async () => {
        const res = await listPokemons()

        setPokes(res.results)
    }, [])

    const Container = styled.div``

    return (
        <Container>
            <div className="poke-name">
                {pokes.map(item => <Card data={item} />)}
            </div>
        </Container>
    )
}

export default List