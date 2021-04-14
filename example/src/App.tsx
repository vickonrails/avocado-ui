import React from 'react'

import { Separator, ThemeProvider, baseTheme, merge, Heading } from 'avocado-ui'
import { Theme } from 'theme-ui'
import { Header, Main } from './components'

// const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 96]

const extendedTheme = {
  fonts: {
    body: 'system-ui, sans-serif',
    heading: '"Avenir Next", sans-serif',
    monospace: 'Menlo, monospace'
  }
}

const theme = merge(baseTheme as Theme, {
  ...extendedTheme
})

const App = () => {
  return (
    <ThemeProvider theme={{ ...baseTheme, ...theme }}>
      <Header />
      <Separator />
      <Main />

      <Heading level='h1'>Something Fishy Going on</Heading>
      <Heading level='h2'>Something Fishy Going on</Heading>
      <Heading level='h3'>Something Fishy Going on</Heading>
      <Heading level='h4'>Something Fishy Going on</Heading>
      <Heading level='h5'>Something Fishy Going on</Heading>
      <Heading level='h6'>Something Fishy Going on</Heading>
    </ThemeProvider>
  )
}

export default App
