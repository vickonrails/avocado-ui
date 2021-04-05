import React from 'react'
import { Activity, Save } from 'react-feather'

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
        <Button
          buttonType='solid'
          variant='primary'
          shape='curve'
          prefixIcon={<Activity />}
        >
          Button Text
        </Button>
        <Button
          variant='primary'
          buttonType='solid'
          size='sm'
          suffixIcon={<Save />}
        >
          Something
        </Button>
        <Button
          variant='primary'
          buttonType='solid'
          shape='round'
          prefixIcon={<Activity />}
        >
          Something
        </Button>
        <Button
          variant='primary'
          buttonType='solid'
          shape='curve'
          size='lg'
          prefixIcon={<Save />}
        >
          Something
        </Button>
        <Button variant='success' buttonType='link' shape='curve'>
          Something
        </Button>
      </div>
    </ThemeProvider>
  )
}

export default App
