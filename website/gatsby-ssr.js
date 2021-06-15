import React from 'react'
import { ThemeProvider } from '@avocado-ui/react'

const appTheme = {}

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={appTheme}>{element}</ThemeProvider>
}
