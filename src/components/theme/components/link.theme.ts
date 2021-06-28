import colors from '../colors'
import borders from '../borders'
import spacing from '../spacing'

import { UserTheme } from '../../../utils/generateTheme'

const linkTheme = {
  variants: {
    primary: {
      default: colors.primary,
      hover: colors.blue[400]
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
 * generateLinkTheme - generates Link theme from UserTheme values
 * @param {UserTheme} userTheme - theme variables entered by the user
 * @param {LinkTheme} buttonTheme - base link theme
 */
export const generateLinkTheme = (
  userTheme: UserTheme,
  linkTheme: LinkTheme
): LinkTheme => {
  const { primaryColor, secondaryColor } = userTheme

  const newLinkTheme: LinkTheme = {
    ...linkTheme,
    variants: {
      ...linkTheme.variants,
      primary: {
        default: primaryColor || linkTheme.variants.primary.default,
        hover: secondaryColor || linkTheme.variants.primary.hover
      }
    }
  }

  return newLinkTheme
}

export type LinkTheme = typeof linkTheme
export { linkTheme }
