// import { theme } from '..'
import colors from '../colors'
// import borders from '../borders'
import spacing from '../spacing'

const selectTheme = {
  variants: {
    fill: {
      default: {
        background: colors.gray[6],
        textColor: colors.gray[9]
      },
      hover: {},
      focus: {}
    },
    outline: {
      default: colors.red[400],
      hover: colors.red[300]
    },
    unstyled: {
      default: colors.green[500],
      hover: colors.green[400]
    }
  },
  size: {
    sm: {
      verticalPadding: spacing['x-small'],
      horizontalPadding: spacing.small
    },
    md: {
      verticalPadding: spacing.small,
      horizontalPadding: spacing.medium
    },
    lg: {
      verticalPadding: spacing.medium,
      horizontalPadding: spacing.large
    }
  }
}

export type SelectTheme = typeof selectTheme
export { selectTheme }
