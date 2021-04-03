import colors from '../colors'
import borders from '../borders'
import { spacing } from '../spacing'

const buttonTheme = {
  variants: {
    primary: colors.primary,
    error: colors.red[400],
    success: colors.green[500],
    warning: colors.yellow[500]
  },
  borders: {
    round: borders.full,
    curve: borders.sm
  },
  size: {
    sm: `${spacing['x-small']} ${spacing.small}`,
    md: `${spacing.small} ${spacing.medium}`,
    lg: `${spacing.medium} ${spacing.large}`
  }
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
