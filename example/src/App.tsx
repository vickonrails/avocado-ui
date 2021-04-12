import React from 'react'
import { theme, ThemeProps } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { Header, Main } from './components'

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
        ...theme.components.buttonTheme.variants
      }
    }
  }
}

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <Header />
      <Main />
    </ThemeProvider>
  )
}

export default App
