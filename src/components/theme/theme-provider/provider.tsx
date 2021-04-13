import React from 'react'
import { ThemeProvider as ThemeUIProvider, merge } from 'theme-ui'
import { base } from '@theme-ui/presets'

import { theme } from '../../theme'

const baseTheme = { ...base }

export interface ThemeProviderProps {
  theme: any
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
}

export { ThemeProvider, theme, baseTheme, merge }

export type ThemeProps = typeof theme
