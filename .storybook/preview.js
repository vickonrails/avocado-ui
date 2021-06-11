import { ThemeProvider } from '../src/components'
import './styling.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={{ primaryColor: 'magenta' }}>
      <Story />
    </ThemeProvider>
  )
]
