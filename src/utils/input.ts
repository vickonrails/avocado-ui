import { BorderRadius } from '../components/input'
import borders from '../components/theme/borders'

export const getBorderRadius = (borderRadius: BorderRadius) => {
  switch (borderRadius) {
    case 'curve':
      return borders.full

    case 'round':
      return borders.sm

    case 'square':
      return `none`

    default:
      throw new Error('Please pass in a borderRadius')
  }
}
