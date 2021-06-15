import React from 'react'
import { ThemeProvider } from '@avocado-ui/react'

const appTheme = {
  // primaryColor: `green`,
  // secondaryColor: `#00A400`,
  // focusColor: `#b7eb8f`
}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={appTheme}>{element}</ThemeProvider>
}
