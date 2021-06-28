# Button

Shows a clickable element to the user.

![Buttons](/images/Buttons.png)

## Quick use

```jsx
import { Button } from 'avocado-ui'

function App() {
  return <Button>Text</Button>
}
```

## Props

| property | description                            | type                                                        | default    |
| -------- | -------------------------------------- | ----------------------------------------------------------- | ---------- |
| size     | size of button                         | `sm`, `md`,`lg`                                             | `md`       |
| shape    | shape of button                        | `rounded`, `bordered`,`square`                              | `bordered` |
| prefix   | Component by the left of the button    | `ReactNode`                                                 |            |
| suffix   | Component by the right of the button   | `ReactNode`                                                 |            |
| trim     | trim text longer than a certain length | `number`                                                    |            |
| variant  | variant of the button                  | `default`, `secondary`, `warning`, `error`, `link`, `ghost` |            |
| loading  | set button state to loading            | `boolean`                                                   | `false`    |
| disabled | set button state to loading            | `boolean`                                                   | `false`    |

## Todo

- [x] size
- [x] shape
- [x] prefix & suffix
- [x] trim
- [x] variant
- [x] loading
- [x] disabled
- [x] write tests

## Tests suites

- [x] should render correctly
- [x] should render empty button without errors
- [x] should render a spinner when `loading` is set to `true`
- [x] should not be clickable when button is loading
- [ ] should render a link when `type` is set to link
- [ ] should not render as link when href is undefined
