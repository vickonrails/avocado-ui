import React from 'react'
import { theme } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { Text } from './components'

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <Text />
    </ThemeProvider>
  )
}

export default App
