import React, { FC, HTMLAttributes } from 'react'
import styled from '@emotion/styled'

const Text: FC<TextProps> = ({ children, ...props }) => {
  const _className = props.className
    ? `avocado-text ${props.className}`
    : `avocado-text`

  return (
    <StyledText {...props} className={_className}>
      {children}
    </StyledText>
  )
}

const StyledText = styled.p<any>`
  margin-top: 0;
  font-size: ${({ theme }) => `${theme.fontSizes[2]}px`};
`

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {}

Text.displayName = 'Text'
export { Text }
