import colors from '../colors'
import borders from '../borders'
import { spacing } from '../spacing'

const buttonTheme = {
  variants: {
    primary: colors.primary
  },
  borders: {
    round: borders.sm,
    circle: borders.circle
  },
  size: {
    sm: `${spacing['x-small']} ${spacing.small}`,
    md: `${spacing.small} ${spacing.medium}`,
    lg: `${spacing.medium} ${spacing.large}`
  }
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
