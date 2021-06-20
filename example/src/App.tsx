import React from 'react'
import { ThemeProvider, CSSReset, Box } from 'avocado-ui'

import './index.css'
import { Header } from './components'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <CSSReset />
      <div className='App'>
        <Header />
        <Box mt={3}>Something about a box that I know of</Box>
      </div>
    </ThemeProvider>
  )
}

export default App
