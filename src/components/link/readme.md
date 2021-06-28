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
| prefixIcon | ----------- | `ReactNode`                            | null      |
| suffixIcon | ----------- | `ReactNode`                            | null      |

## Todo

- [ ] type
- [ ] size
- [ ] shape
- [ ] prefixIcon
- [ ] suffixIcon

## Tests suites

- [ ] should render correctly
- [ ] Should render empty link without errors
- [ ] should be inactive when `disabled === true`
- [ ] should throw an error if `href` is undefined
- [ ] should render appropriate link type
