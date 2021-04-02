import colors from '../colors'
import borders from '../borders'

const buttonTheme = {
  variants: {
    primary: colors.primary
  },
  borders: {
    round: borders.sm,
    circle: borders.circle
  }
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
