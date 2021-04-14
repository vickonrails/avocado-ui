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

const blue = {
  '50': '#E6F7FF',
  '100': '#BAE7FF',
  '200': '#91d5ff',
  '300': '#69c0ff',
  '400': '#40a9ff',
  '500': '#1890ff',
  '600': '#096dd9',
  '700': '#0050b3',
  '800': '#003a8c',
  '900': '#002766'
}

const green = {
  '50': '#f6ffed',
  '100': '#d9f7be',
  '200': '#b7eb8f',
  '300': '#95de64',
  '400': '#73d13d',
  '500': '#52c41a',
  '600': '#389e0d',
  '700': '#237804',
  '800': '#135200',
  '900': '#092b00'
}

const cyan = {
  '50': '#e6fffb',
  '100': '#b5f5ec',
  '200': '#87e8de',
  '300': '#5cdbd3',
  '400': '#36cfc9',
  '500': '#13c2c2',
  '600': '#08979c',
  '700': '#006d75',
  '800': '#00474f',
  '900': '#002329'
}

const yellow = {
  '50': '#feffe6',
  '100': '#ffffb8',
  '200': '#fffb8f',
  '300': '#fff566',
  '400': '#ffec3d',
  '500': '#fadb14',
  '600': '#d4b106',
  '700': '#ad8b00',
  '800': '#876800',
  '900': '#614700'
}

const gray = {
  '1': '#ffffff',
  '2': '#fafafa',
  '3': '#f5f5f5',
  '4': '#f0f0f0',
  '5': '#d9d9d9',
  '6': '#bfbfbf',
  '7': '#8c8c8c',
  '8': '#595959',
  '9': '#434343',
  '10': '#262626',
  '11': '#1f1f1f',
  '12': '#141414',
  '13': '#000000'
}

const primary = blue[500]
const secondary = blue[400]
const white = gray[1]
const black = gray[13]

const colors = {
  red,
  blue,
  green,
  cyan,
  yellow,
  gray,
  white,
  primary,
  secondary,
  black
}

export type ColorProps = typeof colors
export default colors
