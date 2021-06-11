import React from 'react'
import { ThemeContext } from '@emotion/react'

import { theme } from '../../theme'

// export interface AvocadoThemeProps {
//   primaryColor: string
// }

export interface ThemeProviderProps {
  theme: Partial<ThemeProps> | ((outerTheme: ThemeProps) => ThemeProps)
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: appTheme,
  children
}) => {
  console.log(`AppTheme: ${JSON.stringify(appTheme)}`)
  console.log(`InnerTheme: ${JSON.stringify(theme)}`)
  return (
    <ThemeContext.Provider value={appTheme}>{children}</ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext, theme }
export type ThemeProps = typeof theme
