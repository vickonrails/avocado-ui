# Link

Show a clickable text for user navigation

## Quick use

```jsx
import { Link } from 'avocado-ui'

function App() {
  return <Link href='/'>Go Home</Link>
}
```

## Props

| property   | description | type                                   | default   |
| ---------- | ----------- | -------------------------------------- | --------- |
| size       | ----------- | `sm`, `md`, `lg`                       | `md`      |
| shape      | ----------- | `square`, `round`, `curve`             | `default` |
| type       | ----------- | `default`, `ghost`, `outline`, `solid` | `curve`   |
| prefixIcon | ----------- | `ReactNode`                            | -         |
| suffixIcon | ----------- | `ReactNode`                            | -         |

## Todo

- [x] type
- [x] size
- [x] shape
- [x] prefixIcon
- [x] suffixIcon

## Tests suites

- [x] should render correctly
- [x] Should render empty link without errors
- [x] should throw an error if `href` is undefined
- [x] should render appropriate link type
- [x] should render prefix & suffix Icons correctly
