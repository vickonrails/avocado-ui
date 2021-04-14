import React from 'react'
import { theme, ThemeProps } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { Header } from './components'

// extend the theme from the default theme.
// There's a current problem where we have to ensure the type matches ThemeProps
// We have to do this because there's no way to combine themes incrementally like what merge does in theme-ui or system-ui
// FIXME: Implement a merge function to merge themes together without doing all the extra work

const customTheme: ThemeProps = {
  ...theme,
  colors: {
    ...theme.colors,
    red: {
      ...theme.colors.red,
      '100': 'blue'
    }
  },
  components: {
    ...theme.components,
    buttonTheme: {
      ...theme.components.buttonTheme,
      variants: {
        ...theme.components.buttonTheme.variants,
        error: {
          default: 'blue',
          hover: 'red'
        }
      }
    }
  }
}

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={customTheme}>
      <Header />
    </ThemeProvider>
  )
}

export default App
