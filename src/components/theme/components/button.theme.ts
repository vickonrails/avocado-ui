import colors from '../colors'
import borders from '../borders'
import { spacing } from '../spacing'

const buttonTheme = {
  variants: {
    primary: {
      default: colors.blue[500],
      hover: colors.blue[400]
    },
    error: {
      default: colors.red[400],
      hover: colors.red[300]
    },
    success: {
      default: colors.green[500],
      hover: colors.green[400]
    },
    warning: {
      default: colors.yellow[500],
      hover: colors.yellow[500]
    }
  },
  borders: {
    round: borders.full,
    curve: borders.sm
  },
  size: {
    sm: `${spacing.small} ${spacing.medium}`,
    md: `${spacing.small} ${spacing.medium}`,
    lg: `${spacing.medium} ${spacing.large}`
  }
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
