import colors from './colors'
import borders from './borders'
import spacing from './spacing'
import { buttonTheme } from './components'

const theme = {
  colors,
  borders,
  spacing,
  components: {
    buttonTheme
  }
}

export type ThemeProps = typeof theme
export { theme }
