/** @jsx jsx */
import React, { AllHTMLAttributes } from 'react'
import { ThemeProps } from 'avocado-ui'

import { jsx, useTheme, css } from '@emotion/react'
import styled from '@emotion/styled'

const Header: React.FC = (props) => {
  console.log(props)
  const theme = useTheme() as ThemeProps

  return (
    <StyledHeader theme={theme} {...props}>
      Header component
    </StyledHeader>
  )
}

interface Header extends AllHTMLAttributes<any> {
  theme?: ThemeProps
}

const StyledBaseHeader = ({ theme }: Header) => css`
  background: ${theme?.colors.red[400]};
  color: ${theme?.colors.white};
  padding: ${theme?.spacing.large};
`

const StyledHeader = styled.header`
  ${StyledBaseHeader}
`

export { Header }
