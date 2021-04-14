import React from 'react'
import { theme } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { Avatar } from './components'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <Avatar />
    </ThemeProvider>
  )
}

export default App
