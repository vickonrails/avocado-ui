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
| prefix   | Component by the left of the button    | `none`                                                      |            |
| suffix   | Component by the right of the button   | `none`                                                      |            |
| trim     | trim text longer than a certain length | `number`                                                    |            |
| variant  | variant of the button                  | `default`, `secondary`, `warning`, `error`, `link`, `ghost` |            |
| loading  | set button state to loading            | `boolean`                                                   | `false`    |
| disabled | set button state to loading            | `boolean`                                                   | `false`    |

## Todo

- [x] size
- [x] shape
- [ ] prefix & suffix
- [x] trim
- [x] variant
- [ ] loading
- [x] disabled
- [ ] write tests

## Tests suites

- [x] should render correctly
- [x] should render empty button without errors
- [ ] should render a spinner when `loading` is set to `true`
- [ ] should not be clickable when button is loading
- [ ] should render a link when `type` is set to link
- [ ] should not render as link when href is undefined
- [ ] should render correct variant
- [ ] should render correct size
