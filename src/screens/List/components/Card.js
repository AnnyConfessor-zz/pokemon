import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
padding: 1rem;
`

const Card = ({ data }) => (
    <Wrapper>
        {data.name}
    </Wrapper>
)

export default Card
