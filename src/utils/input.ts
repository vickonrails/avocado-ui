import { theme } from '../components'
import { Size } from '../utils/types'
import { BorderRadius } from '../components/input'
import borders from '../components/theme/borders'

export const getBorderRadius = (borderRadius: BorderRadius) => {
  switch (borderRadius) {
    case 'curve':
      return borders.sm

    case 'round':
      return borders.full

    case 'square':
      return `0px`

    default:
      throw new Error('Please pass in a borderRadius')
  }
}

export const getInputIconSize = (size: Size) => {
  switch (size) {
    case 'sm':
      return theme.spacing['1.3x-large']
    case 'md':
    case 'lg':
      return theme.spacing['2x-large']

    default:
      throw new Error('Please psas in a size')
  }
}
