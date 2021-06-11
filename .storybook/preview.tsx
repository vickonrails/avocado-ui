import { ThemeProvider, theme, ThemeProps } from '../src/components'
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

// const appTheme: ThemeProps = {
//   ...theme,
//   // components: {
//   //   ...theme.components,
//   //   buttonTheme: {
//   //     ...theme.components.buttonTheme,
//   //     variants: {
//   //       ...theme.components.buttonTheme.variants,
//   //       primary: {
//   //         default: `red`,
//   //         hover: `green`
//   //       }
//   //     }
//   //   }
//   // }
//   colors: {
//     ...theme.colors,
//     primary: 'red'
//   }
// }

const appTheme = {
  primaryColor: `green`,
  secondaryColor: `#00A400`
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={appTheme}>
      <Story />
    </ThemeProvider>
  )
]
