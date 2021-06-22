import React from 'react'
import { ThemeProvider, CSSReset, Card } from 'avocado-ui'

import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <CSSReset />
      <div className='App'>
        <Card p={8} br={4} showShadow>
          Something about a box that I know of
        </Card>
      </div>
    </ThemeProvider>
  )
}

export default App
