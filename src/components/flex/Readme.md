# Flex

Component for rendering a flex container.

## Quick use

```jsx
import { Flex, FlexItem } from 'avocado-ui'

function App() {
  return (
    <Flex>
      <FlexItem>Text</FlexItem>
      <FlexItem>Text</FlexItem>
    </Flex>
  )
}
```

## `Flex` Props Table

| property       | description                                                | type                                                                                                                                                  | default      |
| -------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| flexWrap       | Control wrapping of flex children                          | `nowrap`, `wrap`, `wrap-reverse`                                                                                                                      | `nowrap`,    |
| alignContent   | How to distribute extra space in the cross-axis            | `flex-start` , `flex-end` , `center` , `space-between` , `space-around` , `space-evenly` , `stretch` , `start` , `end` , `baseline`, `first baseline` | `normal`     |
| flexFlow       | Short hand for `flex-direction` and `flex-wrap` properties | `none`                                                                                                                                                | `row nowrap` |
| justifyContent | Controls alignment along the main axis                     | ``flex-start` , `flex-end` , `center` , `space-between` , `space-around` , `space-evenly` , `start` , `end` , `left`, `right`, `safe`                 | `flex-start` |
| alignItems     | Controls alignment along the cross axis                    | `stretch` ,` flex-start` , `flex-end`, `center`, `baseline`, `first baseline`, `last baseline`, `start` , `end` , `self-start`, `self-end`            | `stretch`    |
| flexDirection  | Specifies the main axis of the flex                        | `row`, `row-reverse`, `column`, `column-reverse`                                                                                                      | `row`        |

## `FlexItem` Props Table

| property   | description                                                   | type                                                               | default |
| ---------- | ------------------------------------------------------------- | ------------------------------------------------------------------ | ------- |
| order      | Controls the order in which they appear in the flex container | `number`                                                           | 0       |
| flexGrow   | Defines the ability for a flex item to grow if necessary      | `number`                                                           | 0       |
| flexShrink | Defines the ability for a flex item to shrink if necessary.   | `number`                                                           | 0       |
| flexBasis  | Specifies the size of a flex item                             | `number`                                                           | `auto`  |
| flex       | Shorthand for `flex-grow`, `flex-shrink` & `flex-basis`       | `flex-grow` - `flex-shrink` - `flex-basis`                         | `auto`  |
| alignSelf  | Specifies the alignment of a flex child along the cross axis  | `auto` , `flex-start`, `flex-end`, `center`, `baseline`, `stretch` | `auto`  |

## Todo

- [x] Write tests
- [x] Add `Flex` component
- [x] Add `FlexItem` component
- [x] Write documentation for `Flex` & `FlexItem` components
- [ ] Implement responsiveness for the entire `Flex` & `FlexItem` components
