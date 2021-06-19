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

const appTheme = {
  // primaryColor: `green`,
  // secondaryColor: `#00A400`,
  // focusColor: `#b7eb8f`
}

console.log(ThemeProvider)

export const decorators = [
  (Story) => (
    <ThemeProvider theme={appTheme}>
      <Story />
    </ThemeProvider>
  )
]
