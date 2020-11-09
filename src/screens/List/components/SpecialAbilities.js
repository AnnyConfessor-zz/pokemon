import React from 'react'
import styled from 'styled-components'

const Container = styled.span`
text-decoration: none;
display: flex;
color: white;
`

const SpecialAbilities = ({ data }) => (
  <Container>
    {data.map(item => item.ability.name).join(', ')}
  </Container>
)

export default SpecialAbilities