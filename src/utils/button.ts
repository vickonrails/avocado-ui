import { ButtonShape, theme } from '../components'

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

export const trimButtonText = (text: string, limit = 6) => {
  if (limit > text.length) {
    return text
  }
  return `${text.substr(0, limit)}...`
}
