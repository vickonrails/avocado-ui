import colors from '../colors'
import borders from '../borders'
import { UserTheme } from '../../../utils/generateTheme'

export const avatarTheme = {
  sizes: {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 64,
    xl: 84
  },
  fontSizes: {
    xs: 8,
    sm: 14,
    md: 16,
    lg: 26,
    xl: 40
  },
  radius: {
    round: borders.full,
    square: 0,
    curve: borders.sm
  },
  bgColor: colors.blue[400]
}

type AvatarTheme = typeof avatarTheme
/**
 * generateAvatarTheme - generates Avatar theme from UserTheme values
 * @param {UserTheme} userTheme - theme variables entered by the user
 * @param {AvatarTheme} avatarTheme - base avatar theme
 */
export const generateAvatarTheme = (
  userTheme: UserTheme,
  spinnerTheme: AvatarTheme
): AvatarTheme => {
  const { primaryColor } = userTheme

  const newAvatarTheme: AvatarTheme = {
    ...spinnerTheme,
    bgColor: primaryColor || spinnerTheme.bgColor
  }

  return newAvatarTheme
}
