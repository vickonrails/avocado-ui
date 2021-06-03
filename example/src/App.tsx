import React from 'react'
import { theme, CSSReset, Box } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <div className='App'>
        <Box mt={3}>Something about a box that I know of</Box>
      </div>
    </ThemeProvider>
  )
}

export default App
