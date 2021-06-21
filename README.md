# 🥑 avocado-ui

Experimental design system for building accessible, themeable and beautiful interfaces.

[![NPM](https://img.shields.io/npm/v/avocado-ui.svg)](https://www.npmjs.com/package/avocado-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

- 📚 [Storybook](https://avocado-ui-storybook.vercel.app/)
- 🤓 [Documentation](https://avocado-ui.vercel.app/) | [Github](https://github.com/vickOnRails/avocado-docs)

## Quick Start

- Installing with `npm`

```bash
npm install @avocado-ui/react
```

- Installing with yarn

```bash
yarn add @avocado-ui/react
```

## Features

- **♿ Accessible**: Accessibility is not an after taught in `avocado`. All components have accessible names and are called out correctly by screen readers. I ensure colors are accessibile, focus indicators are present on all components and they are in the right tab order.
- **💅🏼 Themeable**: `avocado` is highly themeable and the entire look can be controlled by tokens. I'm currently researching about `styled-system` and the goal is to ensure `avocado` follows the spec.
- **🌃 Dark Mode**: Good design systems handle darkmode excellently. I'm also researching & learning the best way to implement dark mode in avocado.
- **😎 Modern**: Modern design systems are a combination of tooling, look and feel of the interface. You have to really work hard to make avocado ugly 😋.

## Usage

```tsx
import { ThemeProvider, Button, Flex } from '@avocado-ui/react'
import './styles.css'

// basic theming with primary and secondary colors
const theme = {
  primaryColor: '#3f00ff',
  secondaryColor: '#6330ff'
}

export default function App() {
  return (
    <ThemeProvider className='App' theme={theme}>
      <Flex gap={5}>
        <Button>Welcome to Avocado</Button>
        <Button buttonType='outline'>Welcome to Avocado</Button>
      </Flex>
    </ThemeProvider>
  )
}
```

- Learn more on the [official documentation](https://avocado-ui.vercel.app/docs/)

## Roadmap

Foundations

- [x] Heading
- [x] Text
- [x] Color
- [x] Spacing
- [ ] Theming

Layout

- [x] Flex
- [ ] Grid
- [ ] Stack
- [x] Box

Components

- [x] Accordion
- [x] Avatar
- [x] Button
- [ ] Checkbox
- [ ] Dropdown
- [x] Input
- [x] Image
- [x] Modal
- [ ] Radio Group
- [ ] Select
- [x] Separator
- [x] Spinner
- [ ] Tabs
- [ ] Tooltip

## License

MIT © [vickonrails](https://github.com/vickonrails)
