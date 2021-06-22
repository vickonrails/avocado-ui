import { CardProps } from '../components'

/**
 * @param fullWidth - boolean to determine if card should fill horizontal axis
 * @param width - width of the card
 * @returns {string}
 */
export const getCardWidth = ({
  fullWidth,
  width
}: Pick<CardProps, 'fullWidth' | 'width'>): string => {
  // just return 100% if fullWidth is set to true
  if (fullWidth) return `100%`

  // return auto if width is undefined
  if (!width) return `auto`

  // append px to width of type numbers
  switch (typeof width) {
    case 'string':
      return `${width}`
    case 'number':
      return `${width}px`
    default:
      throw new Error('Please pass in a valid width')
  }
}
