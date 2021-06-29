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

| property   | description                           | type                                   | default   |
| ---------- | ------------------------------------- | -------------------------------------- | --------- |
| size       | size of `Link`                        | `sm`, `md`, `lg`                       | `md`      |
| shape      | shape of `Link`                       | `square`, `round`, `curve`             | `default` |
| type       | type of `Link` component              | `default`, `ghost`, `outline`, `solid` | `curve`   |
| prefixIcon | icon to the left of `Link` component  | `ReactNode`                            | -         |
| suffixIcon | icon to the right of `Link` component | `ReactNode`                            | -         |

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
