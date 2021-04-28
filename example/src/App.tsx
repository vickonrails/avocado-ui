import React from 'react'
import { theme, Button, CSSReset } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { ImageDemo, Avatar, Text, Header } from './components'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Button loading={true}>Get Started</Button>
      <Header>Header</Header>
      <Text />
      <Avatar />
      <ImageDemo />
    </ThemeProvider>
  )
}

export default App
