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
        <Button buttonType='solid' variant='primary' shape='round'>
          Button Text
        </Button>
        <Button variant='error' buttonType='ghost' shape='round' size='lg'>
          Something
        </Button>
        <Button variant='success' buttonType='outline' size='sm'>
          Something
        </Button>
        <Button variant='warning' buttonType='link'>
          Something
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
