import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const theme = {
  colors: {
    orange: '#FD9A0D',
    purple: '#6625A3',
    darkPurple: '#4F1783',
    lightPurple: '#F8F5FB',
    lightPurple2: '#CEBAE2',
    newPurple: '#9D39E0',
    darkPink: '#E31963',
    red: '#FF5E5E',
    blue: '#13C6EA',
    blue2: '#3788E2',
    lightBlue: '#2B75FF',
    darkBlue: '#126CE3',
    green: '#0ACF80',
    darkGreen: '#08B76C',
    white: '#FFFFFF',
    black: '#121212',
    grey: '#D1D1D1',
    transparent: 'transparent'
  },
  textWeights: {
    normal: '400',
    semiBold: '600',
    bold: '700',
    extraBold: '800'
  },
  textSizes: {
    xxl: '4rem', // 72px
    xl: '2.8rem', // 46px
    llg: '2rem', // 26px
    lg: '1.8rem', // 30px
    mmd: '1.4rem',
    md: '1.15rem', // 22px
    sm: '1rem',
    xs: '0.888rem'
  },
  shadow: '0px 0px 11px #0000002C',
  space: {
    xs: '0.222rem', // 4px
    sm: '0.444rem', // 8px
    md: '0.666rem', // 12px
    lg: '0.888rem', // 18px
    xl: '1.111rem', // 20px
    xxl: '1.333rem' // 24px
  },
  blog: {
    cantooScribe: '',
    lecoleDeDemain: '',
    dysFriendly: '',
    actusCantoo: ''
  }
}
Object.assign(theme, {
  blog: {
    cantooScribe: theme.colors.orange,
    lecoleDeDemain: theme.colors.red,
    dysFriendly: theme.colors.green,
    actusCantoo: theme.colors.blue
  }
})

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
