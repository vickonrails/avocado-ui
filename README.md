# 🥑 avocado-ui

Experimental design system for building accessible, themeable and beautiful interfaces.

[![NPM](https://img.shields.io/npm/v/avocado-ui.svg)](https://www.npmjs.com/package/avocado-ui) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
import { Button, Input, Select, ISelectOptions } from '@avocado-ui/react'

const selectOptions: ISelectOptions = [
  { value: 'female', displayText: 'Female' },
  { value: 'male', displayText: 'Male' }
]

export const App = () => (
  <form onSubmit={...}>
    <Input shape='round' placeholder='name' name='name' />
    <Select options={selectOptions} name='gender' />
    <Button shape='round'>Send</Button>
  </form>
)
```

- Learn more on the [official documentation](https://avocado-ui-vickonrails.vercel.app/docs/)

## Roadmap

Foundations

- [ ] Typography
- [ ] Color
- [ ] Spacing
- [ ] Theming

Layout

- [ ] Grid
- [ ] Stack
- [ ] Flex

Components

- [ ] Accordion
- [ ] Avatar
- [ ] Button
- [ ] Checkbox
- [ ] Dialog
- [ ] Dropdown
- [ ] Input
- [ ] Image
- [ ] Modal
- [ ] Radio Group
- [ ] Select
- [ ] Separator
- [ ] Spinner
- [ ] Tabs
- [ ] Tooltip

## License

MIT © [vick_onrails](https://github.com/vick_onrails)
