import React from 'react'
import { ThemeContext } from '@emotion/react'

import { theme } from '../../theme'

export interface AvocadoThemeProps {
  primaryColor: string
}

export interface ThemeProviderProps {
  theme:
    | Partial<AvocadoThemeProps>
    | ((outerTheme: AvocadoThemeProps) => AvocadoThemeProps)
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export { ThemeProvider, ThemeContext, theme }
export type ThemeProps = typeof theme
