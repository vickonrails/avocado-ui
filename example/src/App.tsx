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
        ...theme.components.buttonTheme.variants,
        primary: '#fff'
      }
    }
  }
}

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <div className='container btn-group'>
        <Button buttonType='solid' variant='primary' shape='curve'>
          Button Text
        </Button>
        <Button variant='error' buttonType='ghost' shape='round'>
          Something
        </Button>
        <Button variant='success' buttonType='outline' size='sm' shape='square'>
          Something
        </Button>
        <Button variant='warning' buttonType='solid' shape='round'>
          Something
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
