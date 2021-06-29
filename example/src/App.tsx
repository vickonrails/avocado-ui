import React from 'react'
import { ThemeProvider, CSSReset, Select, Box } from 'avocado-ui'

import './index.css'

const App = () => {
  return (
    <ThemeProvider theme={{}}>
      <CSSReset />
      <Box block>
        <Select
          options={[
            { displayText: 'Male', value: 'male' },
            { displayText: 'Female', value: 'female' }
          ]}
          labelText='Label Text'
        />
      </Box>

      <Box block>
        <Select
          options={[
            { displayText: 'Male', value: 'male' },
            { displayText: 'Female', value: 'female' }
          ]}
          labelText='Label Text'
          fullWidth
        />
      </Box>
    </ThemeProvider>
  )
}

export default App
