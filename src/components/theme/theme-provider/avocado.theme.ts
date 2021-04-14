import colors from '../colors'

const grays = {
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

const yellows = {
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

const blues = {
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

const reds = {
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

const greens = {
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

export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 2, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 256, 512],
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 28, 36, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125
  },
  colors: {
    text: grays[10],
    background: '#fff',
    white: grays[0],
    primary: blues[500],
    secondary: blues[400],
    muted: '#f6f6f6',
    blue: blues,
    gray: grays
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  buttons: {
    color: 'primary',
    primary: {
      color: 'primary',
      bg: colors.primary,
      hover: colors.secondary
    },
    success: {
      color: colors.white,
      bg: greens[500],
      hover: greens[400]
    },
    error: {
      color: colors.white,
      bg: reds[500]
    },
    warning: {
      color: colors.white,
      bg: yellows[500]
    }
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    h1: {
      variant: 'text.heading',
      fontSize: 5
    },
    h2: {
      variant: 'text.heading',
      fontSize: 4
    },
    h3: {
      variant: 'text.heading',
      fontSize: 3
    },
    h4: {
      variant: 'text.heading',
      fontSize: 2
    },
    h5: {
      variant: 'text.heading',
      fontSize: 1
    },
    h6: {
      variant: 'text.heading',
      fontSize: 0
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    }
  }
}

export type AvocadoTheme = typeof theme
