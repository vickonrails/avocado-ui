# Card

Display information in a segmented container

## Quick use

```jsx
import { Card } from 'avocado-ui'

function App() {
  return <Card>Card Component</Card>
}
```

## Props

| property   | description                                             | type                | default       |
| ---------- | ------------------------------------------------------- | ------------------- | ------------- |
| pr         | right padding of the Card                               | `number`            | 0             |
| pl         | left padding of the Card                                | `number`            | 0             |
| pt         | top padding of the Card                                 | `number`            | 0             |
| pb         | bottom padding of the Card                              | `number`            | 0             |
| fullWidth  | sets the Card to span entire horizontal available space | `boolean`           | `false`       |
| width      | sets the horizontal size of the Card                    | `string` , `string` | `fit-content` |
| br         | sets the border radius of the Card                      | `number`            | 0             |
| brt        | sets the top border radius of the Card                  | `number`            | 0             |
| brb        | sets the bottom border radius of the Card               | `number`            | 0             |
| showShadow | confirms if the Card should show shadows                | `boolean`           | `false`       |

## Todo

- [x] padding props
- [x] width & fullWidth
- [x] background color
- [x] border radius & border radius, top and bottom
- [ ] showShadow

## Tests suites

- [x] Card renders correctly
- [x] Card receives padding correctly
- [x] `fullWidth` prop creates a block card
- [x] `width` sets the horizontal size of the card
- [x] `br` prop sets the correct border radius
- [x] Card has shadow when `showShadows` prop is set to true
- [x] Card renders correct background color
