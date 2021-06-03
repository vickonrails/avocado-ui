# Box

Acts as a flexible wrapper around children components

## Quick Use

```jsx
import { Box, Button } from 'avocado-ui'

const App: FC = () => (
  <Box>
    <Button>Click Here</Button>
  </Box>
)
```

## Props

| property | description                   | type   | default |
| -------- | ----------------------------- | ------ | ------- |
| mt       | sets the top margin           | number | -       |
| mb       | sets the bottom margin        | number | -       |
| mr       | sets the right margin         | number | -       |
| ml       | sets the left margin          | number | -       |
| mh       | sets the horizontal margin    | number | -       |
| mv       | sets the vertical margin      | number | -       |
| m        | sets the margin on all sides  | number | -       |
| pt       | sets the top padding          | number | -       |
| pb       | sets the bottom padding       | number | -       |
| pr       | sets the right padding        | number | -       |
| pl       | sets the left padding         | number | -       |
| ph       | sets the horizontal padding   | number | -       |
| pv       | sets the vertical padding     | number | -       |
| p        | sets the padding on all sides | number | -       |

## Todo

- [ ] implement component margin & padding
- [ ] write tests

## Test Suites

- [ ] should render correctly
