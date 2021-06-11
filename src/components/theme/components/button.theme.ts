import colors from '../colors'
import borders from '../borders'
import spacing from '../spacing'
import { UserTheme } from '../../../utils/generateTheme'

const buttonTheme = {
  variants: {
    primary: {
      default: colors.primary,
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

/**
 * generateButtonTheme - generates Button theme from UserTheme values
 * @param {UserTheme} userTheme - theme variables entered by the user
 * @param {ButtonTheme} buttonTheme - base button theme
 */
export const generateButtonTheme = (
  userTheme: UserTheme,
  buttonTheme: ButtonTheme
): ButtonTheme => {
  const { primaryColor, secondaryColor } = userTheme

  const newButtonTheme: ButtonTheme = {
    ...buttonTheme,
    variants: {
      ...buttonTheme.variants,
      primary: {
        default: primaryColor || buttonTheme.variants.primary.default,
        hover: secondaryColor || buttonTheme.variants.primary.hover
      }
    }
  }

  return newButtonTheme
}

export type ButtonTheme = typeof buttonTheme
export { buttonTheme }
