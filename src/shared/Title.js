import React from 'react'
import styled from 'styled-components'

const Text = styled.div`
    font-family: Nunito Sans;
    font-weight: 900;
    font-size: 16px;
    color: ${props => props.theme.colors.white};
`

const Title = ({ data }) => {
    return(
        <Text>{data}</Text>
    )
}

export default Title