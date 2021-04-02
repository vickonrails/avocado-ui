import colors from './colors'
import borders from './borders'
import { buttonTheme } from './components'

const theme = {
  colors,
  borders,
  components: {
    buttonTheme
  }
}

export type ThemeProps = typeof theme
export default theme
