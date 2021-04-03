import { ButtonShape, theme } from '../components'

export const getButtonShape = (shape: ButtonShape): string => {
  switch (shape) {
    case 'curve':
      return theme.components.buttonTheme.borders.curve
    case 'round':
      return theme.components.buttonTheme.borders.round
    case 'square':
      return `0`
  }
}
