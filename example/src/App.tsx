import React from 'react'
import { ThemeProvider } from 'theme-ui'

import { Separator } from 'avocado-ui'
import { Header, Main } from './components'

const theme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: 'red'
  }
}

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Separator />
      <Main />
    </ThemeProvider>
  )
}

export default App
