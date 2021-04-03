import { ButtonShape, theme, ButtonType, Variant } from '../components'

export const getButtonShape = (shape: ButtonShape): string => {
  switch (shape) {
    case 'curve':
      return theme.components.buttonTheme.borders.curve
    case 'round':
      return theme.components.buttonTheme.borders.round
    case 'square':
      return `0`

    default:
      throw new Error('Please pass in an appropriate buttton shape')
  }
}

export const getButtonTypeBackground = (
  buttonType: ButtonType,
  variant: Variant
): string => {
  switch (buttonType) {
    case 'ghost':
      return 'inherit'

    case 'solid':
      return theme.components.buttonTheme.variants[variant]

    case 'outline':
      return 'inherit'

    case 'link':
      return 'inherit'

    default:
      throw new Error('Please pass in an appropriate buttton type')
  }
}

export const getButtonTypeColor = (
  buttonType: ButtonType,
  variant: Variant
) => {
  switch (buttonType) {
    case 'ghost':
      return theme.components.buttonTheme.variants[variant]

    case 'solid':
      return theme.colors.gray[1]

    case 'outline':
      return theme.components.buttonTheme.variants[variant]

    case 'link':
      return theme.components.buttonTheme.variants[variant]

    default:
      throw new Error('Please pass in an appropriate buttton type')
  }
}

export const getButtonTypeBorder = (
  buttonType: ButtonType,
  variant: Variant
) => {
  switch (buttonType) {
    case 'ghost':
      return `1px solid ${theme.colors.gray[5]}`

    case 'solid':
    case 'outline':
      return `1px solid ${theme.components.buttonTheme.variants[variant]}`

    case 'link':
      return 'none'

    default:
      throw new Error('Please pass in an appropriate buttton type')
  }
}
