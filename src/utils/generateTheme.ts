import { theme } from '../components'
import { ThemeProps } from '../components/theme'
import {
  buttonTheme as baseButtonTheme,
  generateButtonTheme
} from '../components/theme/components'

export interface UserTheme {
  /**
   * primaryColor - base color for all controls in the design system
   */
  primaryColor?: string

  /**
   * focusColor - color of all focus ring across the design system
   */
  focusColor?: string

  /**
   * secondaryColor - color for hover styles etc
   */
  secondaryColor?: string
}

export const generateTheme = ({
  primaryColor,
  secondaryColor,
  focusColor
}: UserTheme): ThemeProps => {
  const buttonTheme = generateButtonTheme(
    { primaryColor, secondaryColor, focusColor },
    baseButtonTheme
  )

  console.log(buttonTheme)

  const newTheme: ThemeProps = {
    ...theme,
    colors: {
      ...theme.colors,
      primary: primaryColor || theme.colors.primary
    },
    components: {
      ...theme.components,
      buttonTheme
    }
  }

  return newTheme
}
