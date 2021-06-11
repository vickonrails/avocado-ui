import { UserTheme } from '../../../utils/generateTheme'
import colors from '../colors'

export const spinnerTheme = {
  sizes: {
    sm: '1em',
    md: '1.25em',
    lg: '1.5em'
  },
  variants: {
    primary: colors.primary,
    warning: colors.yellow[500],
    error: colors.red[400],
    success: colors.green[500]
  }
}

/**
 * generateSpinnerTheme - generates Spinner theme from UserTheme values
 * @param {UserTheme} userTheme - theme variables entered by the user
 * @param {SpinnerTheme} spinnerTheme - base spinner theme
 */
export const generateSpinnerTheme = (
  userTheme: UserTheme,
  spinnerTheme: SpinnerTheme
): SpinnerTheme => {
  const { primaryColor } = userTheme

  const newSpinnerTheme: SpinnerTheme = {
    ...spinnerTheme,
    variants: {
      ...spinnerTheme.variants,
      primary: primaryColor || spinnerTheme.variants.primary
    }
  }

  return newSpinnerTheme
}

export type SpinnerTheme = typeof spinnerTheme
