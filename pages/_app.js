import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AluraCommons'

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,700;1,400&display=swap');

  // Reset CSS
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Ubuntu', sans-serif;
  }

  body {
    background-color: #D9E6F6;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;

  }

  ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: '#0070f3',
    white: '#fff'
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
