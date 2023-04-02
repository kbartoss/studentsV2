import { createGlobalStyle } from 'styled-components'
import { MEDIA_QUERIES } from '../constants/mediaQueries'

const { md } = MEDIA_QUERIES

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      height: 100vh;
      width: 100%;
      overflow: hidden;
      font-family: 'Roboto', sans-serif;

      ${md} {
        display: flex;
      }
  }
`

export default GlobalStyles
