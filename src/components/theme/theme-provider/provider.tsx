import React from 'react'
import { ThemeProvider as ThemeUIProvider, merge, Theme } from 'theme-ui'
import { base } from '@theme-ui/presets'

import { theme } from './avocado.theme'

import { theme as oldTheme } from '../../theme'

const baseTheme = merge(base as Theme, { ...(theme as Theme) })

export interface ThemeProviderProps {
  theme: any
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ theme, children }) => {
  return <ThemeUIProvider theme={theme}>{children}</ThemeUIProvider>
}

export { ThemeProvider, oldTheme as theme, baseTheme, merge }

export type ThemeProps = typeof oldTheme
