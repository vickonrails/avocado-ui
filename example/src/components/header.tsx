/** @jsx jsx */
import React, { HTMLAttributes } from 'react'
import { ThemeProps, Button, Text, Heading } from 'avocado-ui'

import { jsx, css } from '@emotion/react'
import styled from '@emotion/styled'

// Header componet
const Header: React.FC<Header> = (props) => {
  return (
    <StyledHeader {...props}>
      <Text>component</Text>
      <Button>Button</Button>
      <Heading level='h1'>Content</Heading>
      <Button variant='error'>Button</Button>
    </StyledHeader>
  )
}

interface Header extends HTMLAttributes<HTMLElement> {}

// FIXME: Move this utility type to a separate file
type StyledThemeProps<T> = { theme?: ThemeProps } & T

// Styled component for Styled Header
// Something to note here is how the theme is in the Styled element by default
// This makes a lot of sense rather than having to take it out from a hook and passing down to the component like
// const theme = emotion.useTheme();
const StyledBaseHeader = ({ theme }: StyledThemeProps<Header>) => css`
  background: ${theme?.colors.red[100]};
  color: ${theme?.colors.white};
  padding: ${theme?.spacing.large};
`

const StyledHeader = styled.header`
  ${StyledBaseHeader}
`

export { Header }
