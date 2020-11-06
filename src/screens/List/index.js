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

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    border: 1rem solid green;

    /* .poke-name {
        border: 1px solid blue;
    } */
`

    return (
        <Container alt="container-list">
            <div className="poke-name">
                {pokes.map(item => <Card data={item}/>)}
            </div>
        </Container>
    )
}

export default List