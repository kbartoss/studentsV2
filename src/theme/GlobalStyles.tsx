import { createGlobalStyle } from 'styled-components'

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

      @media (max-width: 768px) {
        display: flex;
      }
  }
`

export default GlobalStyles
