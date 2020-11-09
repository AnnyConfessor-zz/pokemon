import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  colors: {
    goldenYellow: '#FFDE00', //Pikachu
    orange: '#ffad52', //Charmander
    lightPink: '#F1AAB7', //Jigglypuff
    lightPurple: '#F8F5FB',
    goldFoil: '#B3A125', //Eevee
    red: '#FF0000', //Pikachu
    bostonRed: '#CC0000', //Pikachu
    blue: '#A1D9EF', //Squirtle
    lightCobaltblue2: '#84ADD7', //Blastoise
    deepTaupe: '#7B675B', // Blastoise
    lightBlue: '#2B75FF',
    ceruleanBlue: '#3B4CCA', 
    darkBlue: '#1552E1', //sendo usado ok
    DdarkSeaGreen: '#89C893', //Bulbasaur
    turquoiseGreen: '#08B76C', //Bulbasaur
    white: '#FFFFFF',
    black: '#121212',
    darkGrey: '#66625c',
    grey: '#D1D1D1',
    transparent: 'transparent'
  },
}

export const BaseStyle = createGlobalStyle`
  ${reset}

  body, html {
    font-family: "Nunito", sans-serif;
    font-weight: 500;
    font-size: 14px !important;
  }

  * {
    box-sizing: border-box;
  }

  p {
    margin-bottom: 0.75rem;
  }

  a {
    text-decoration: unset;
    color: unset;
  }

  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`
