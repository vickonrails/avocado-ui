import React from 'react'

import { Button, ThemeProvider, theme, ThemeProps } from 'avocado-ui'
import 'avocado-ui/dist/index.css'

const customTheme: ThemeProps = {
  ...theme,
  colors: {
    ...theme.colors
  },
  components: {
    ...theme.components,
    buttonTheme: {
      ...theme.components.buttonTheme,
      variants: {
        primary: '#fff'
      }
    }
  }
}

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className='container btn-group'>
        <Button variant='primary' size='sm'>
          Text
        </Button>
        <Button variant='primary' size='md'>
          Something
        </Button>
        <Button variant='primary' size='lg'>
          Something
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
