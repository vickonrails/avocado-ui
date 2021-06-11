// import { theme } from '..'
import { UserTheme } from '../../../utils/generateTheme'
import colors from '../colors'
// import borders from '../borders'
import spacing from '../spacing'

const inputTheme = {
  outlineColor: colors.blue[500],
  focusColor: colors.blue[200],
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

/**
 * generateAvatarTheme - generates Avatar theme from UserTheme values
 * @param {UserTheme} userTheme - theme variables entered by the user
 * @param {AvatarTheme} avatarTheme - base avatar theme
 */
export const generateInputTheme = (
  userTheme: UserTheme,
  inputTheme: InputTheme
): InputTheme => {
  const { primaryColor, focusColor } = userTheme

  const newInputTheme: InputTheme = {
    ...inputTheme,
    outlineColor: primaryColor || inputTheme.outlineColor,
    focusColor: focusColor || inputTheme.focusColor
  }

  return newInputTheme
}

export type InputTheme = typeof inputTheme
export { inputTheme }
