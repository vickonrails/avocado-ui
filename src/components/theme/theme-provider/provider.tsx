import React from 'react'
import { ThemeContext } from '@emotion/react'

import { theme } from '../../theme'
import { generateTheme, UserTheme } from '../../../utils/generateTheme'

// export interface AvocadoThemeProps {
//   primaryColor: string
// }

export interface ThemeProviderProps {
  theme: Partial<UserTheme> | ((outerTheme: UserTheme) => UserTheme)
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  theme: userTheme,
  children
}) => {
  // @ts-ignore
  const { primaryColor, secondaryColor, focusColor } = userTheme
  const mergedTheme = generateTheme({
    primaryColor,
    secondaryColor,
    focusColor
  })

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext, theme }
export type ThemeProps = typeof theme
