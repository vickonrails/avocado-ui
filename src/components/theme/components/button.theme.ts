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
    sm: `${spacing[2]} ${spacing[3]}`,
    md: `${spacing[3]} ${spacing[4]}`,
    lg: `${spacing[4]} ${spacing[5]}`
  }
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
