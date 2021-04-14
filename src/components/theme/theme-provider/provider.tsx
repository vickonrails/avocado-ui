import React from 'react'
import { ThemeContext } from '@emotion/react'

import { theme as AvocadoTheme, theme } from '../../theme'

interface Theme {}

export interface ThemeProviderProps {
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme)
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  const finalTheme = { ...AvocadoTheme, ...theme }

  console.log(`FINAL THEME: ${finalTheme}`)

  return (
    <ThemeContext.Provider value={finalTheme}>{children}</ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext, theme }
export type ThemeProps = typeof theme
