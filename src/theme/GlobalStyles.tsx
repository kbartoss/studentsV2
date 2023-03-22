import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
      height: 100vh;
      overflow: hidden;
      font-family: 'Roboto', sans-serif;
      overflow-x: hidden;

      @media (max-width: 768px) {
        display: flex;
      }
  }
`

export default GlobalStyles
