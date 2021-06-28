import colors from './colors'
import borders from './borders'
import spacing from './spacing'
import typography from './typography'

import {
  buttonTheme,
  inputTheme,
  avatarTheme,
  imageTheme,
  spinnerTheme,
  linkTheme
} from './components'

const theme = {
  colors,
  borders,
  spacing,
  typography,
  components: {
    buttonTheme,
    inputTheme,
    avatarTheme,
    imageTheme,
    linkTheme,
    spinnerTheme
  }
}

export type ThemeProps = typeof theme
export { theme }
