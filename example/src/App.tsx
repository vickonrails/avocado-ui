import React, { useContext } from 'react'

import {
  Button,
  ThemeProvider,
  theme,
  ThemeContext,
  ThemeProps
} from 'avocado-ui'
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
          Something
        </Button>
        <Button variant='primary' size='md'>
          Something
        </Button>
        <Button variant='primary' size='lg'>
          Something
        </Button>
        <ButtonEnquire variant='primary' size='lg'>
          Something
        </ButtonEnquire>
      </div>
    </ThemeProvider>
  )
}

const ButtonEnquire = ({ children, ...props }: any) => {
  const theme = useContext(ThemeContext)
  console.log(theme)
  return <Button {...props}>{children}</Button>
}

export default App
