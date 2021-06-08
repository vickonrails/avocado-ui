# Separator

Draws a horizontal line to separate components

## Quick Use

```jsx
import { Separator } from 'avocado-ui'

const App: FC = () => <Separator />
```

## Props

| property | description                                     | type              | default |
| -------- | ----------------------------------------------- | ----------------- | ------- |
| color    | color of separator border                       | string            | -       |
| width    | should input span entire block                  | number            | 1       |
| spacing  | space between Separator and top/bottom elements | [`top`, `bottom`] | [0,1]   |
| centered | set horizontal position of Separator            | `boolean`         | `false` |

## Todo

- [x] color
- [x] width
- [x] centered
- [ ] spacing
