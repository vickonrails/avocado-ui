# Select

Renders a select for the user to choose from a range of options

<!-- ![Selects](/images/inputs.png) -->

## Quick Use

```jsx
import { Select } from 'avocado-ui'
const [name, setName] = useState('')

const genderOptions = [
  { value: 'male', displayText: 'Male' },
  { value: 'female', displayText: 'Female' }
]

const App: FC = () => (
  <Select
    onChange={(e) => setState(e.target.value)}
    placeholder='Placeholder content'
    selectOptions={genderOptions}
  />
)
```

## Props

| property     | description                              | type                           | default   |
| ------------ | ---------------------------------------- | ------------------------------ | --------- |
| variant      | variant of select                        | `filled`, `unstyled`,`outline` | `outline` |
| fullWidth    | should input span entire block           | `true`, `false`                | `false`   |
| required     | is input required                        | `true`, `false`                | `false`   |
| prefixIcon   | icon by the left of the input component  | React.ReactNode                | `null`    |
| suffixIcon   | icon by the right of the input component | React.ReactNode                | `null`    |
| disabled     | makes input inactive                     | `true`, `false`                | `false`   |
| inputSize    | size of the input                        | `sm`, `md`, `lg`               | `md`      |
| borderRadius | controls the appearance of the borders   | `round`, `curve`, `square`     | `curve`   |

## Todo

- [x] variant
- [x] fullWidth
- [x] required
- [ ] prefix & suffix icons
- [x] disabled
- [x] inputSize
- [x] borderRadius

## Test Suites

- [ ] should render correctly
- [ ] should render prefixIcon correctly
- [ ] should render suffixIcon correctly
- [ ] shouldn't receive input when disabled
- [ ] should respond to user input
- [ ] should render with defaultValue
- [ ] should render correct variant when `variant` prop is passed in
- [ ] should render correct size
- [ ] should render correct borderRadius
