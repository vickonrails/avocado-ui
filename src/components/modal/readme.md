# Modals

Renders a select for the user to choose from a range of options

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

| property     | description                                                                                                    | type        | default |
| ------------ | -------------------------------------------------------------------------------------------------------------- | ----------- | ------- |
| open         | sets the state of the Dialog. Whether the Dialog is open or not.                                               | `boolean`   | `false` |
| onClose      | function to execute while closing the Dialog                                                                   | () => void  | =       |
| unmount      | controls if the Dialog should be unmounted or hidden when closed                                               | `boolean`   | `blue`  |
| as           | specifies the html element the component should be rendered as                                                 | JSX.Element | `div`   |
| initialFocus | control the element that receives focus once the modal is open. Only elements in the tab order can be focused. | React.Ref   | `null`  |

## Todo

- [x] open
- [x] onClose
- [x] unmount
- [x] as
- [x] initialFocus

## Test Suites

- [x] Modal renders correctly
- [ ] Modal traps focus
- [ ] Modal is active when `open` prop is set to true
