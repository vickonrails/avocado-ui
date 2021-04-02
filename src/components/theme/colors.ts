const red = {
  '50': '#fff1f0',
  '100': '#ffccc7',
  '200': '#ffa39e',
  '300': '#ff7875',
  '400': '#ff4d4f',
  '500': '#f5222d',
  '600': '#cf1322',
  '700': '#a8071a',
  '800': '#820014',
  '900': '5c0011'
}

const primary = red[400]
const white = `#fff`
const black = '#000'

const colors = {
  red,
  white,
  primary,
  black
}

export type ColorProps = typeof colors
export default colors
