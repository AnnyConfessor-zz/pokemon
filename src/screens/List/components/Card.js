import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Title from 'shared/Title'

import { getPokemon } from '../../../services/pokeapi'

const Container = styled.div`
    /* width: 1000px; */
    margin-top: 1rem;
    display: flex;
    vertical-align: center;
    background-color: ${props => props.theme.colors.lightPurple};
`

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.lightBlue};
    border-radius: 25px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        object-fit: cover;
    }
`

const Progress = styled(Wrapper)`
    background-color: ${props => props.theme.colors.goldenYellow};
`

const Button = styled(Wrapper)`
    background-color: ${props => props.theme.colors.goldenYellow};
`

// const Title = styled.div`
//     font-family: Nunito Sans;
//     font-weight: 900;
//     font-size: 16px;
//     color: ${props => props.theme.colors.white};
// `

const Card = ( ) => {
const [data, setData] = useState([])

  useEffect(async () => {
    const data = await getPokemon('ditto')
    
    setData(data)
  }, [])

  if (data.sprites == undefined) return <div>Carregando...</div>

	return (
			<Container alt="container-card">
					<Wrapper alt="wrapper-card">
							<img src={data.sprites.back_default}/>
							<Title data={data.name} />
							<p>Ordem: {data.order}</p>
							<p>ID: {data.id}</p>
					</Wrapper>
					<Progress>
							Progress component here
					</Progress>
					<Button>Button commponent here</Button>
			</Container>
	)
}

export default Card
