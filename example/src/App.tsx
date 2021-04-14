import React from 'react'
import { theme } from 'avocado-ui'
import { ThemeProvider } from '@emotion/react'

import { Typography } from './components'

// extend the theme from the default theme.
// There's a current problem where we have to ensure the type matches ThemeProps
// We have to do this because there's no way to combine themes incrementally like what merge does in theme-ui or system-ui
// FIXME: Implement a merge function to merge themes together without doing all the extra work

const App = () => {
  return (
    // Pass custom theme to theme provider
    <ThemeProvider theme={theme}>
      <Typography />
    </ThemeProvider>
  )
}

export default App
