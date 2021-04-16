import { CaptionPosition } from '../components'

export const getFigureAlignment = (position: CaptionPosition): string => {
  switch (position) {
    case 'topCenter':
    case 'bottomCenter':
      return 'center'

    case 'topLeft':
    case 'bottomLeft':
      return 'left'

    case 'topRight':
    case 'bottomRight':
      return 'right'

    default:
      throw new Error(
        'Please specify a caption position to the Image component'
      )
  }
}
